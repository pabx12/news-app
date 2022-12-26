import { gql } from "graphql-request"
import sortNewsByImage from "./sortNewsByImage"

const  fetchNews = async (
    category?:Category | string,
    keywords?:string,
    isDynamic?:boolean
) => {

 const query = gql `
 query MyQuery(
    $access_key : String!
    $categories : String!
    $keywords : String
 ) {
  myQuery(
    access_key: $access_key
    categories: $categories
    countries: "fr, sn"
    sort : "published_desc"
    keywords : $keywords
  ) {
    data {
      author
      category
      country
      description
      image
      language
      published_at
      title
      source
      url
    }
    pagination {
      count
      limit
      offset
      total
    }
  }
}
 `
 const res = await fetch(`https://paraguacu.stepzen.net/api/falling-marmot/__graphql`, {
    method:"POST",
    cache:isDynamic ? "no-cache" : "default",
    next: isDynamic ? {revalidate:0} : {revalidate:20},
    headers : {
        "Content-Type" : "application/json",
        Authorization : `Apikey ${process.env.STEPZEN_API_KEY}`
    },
    body : JSON.stringify(
        {
            query,
            variables : {
                access_key : process.env.MEDIASTACK_API_KEY,
                categories : category,
                keywords : keywords,
            }
        }
    )
 })
 const newResponse  = await res.json()
 // sort by image present
 const news = sortNewsByImage(newResponse.data.myQuery);
 return news;
}
export default fetchNews