import fetchNews from "../../utils/fetchNews";
import NewsList from "../NewsList";

type PageProps = {
    searchParams? : {term:string}
}

async function SearchPage({searchParams}: PageProps) {
const news:NewsResponse = await fetchNews(
    "general",
    searchParams?.term,
    true
)
  return (
    <div>
         <h1> Resultats de la recherche  {searchParams?.term} : </h1>
         <NewsList news={news}/>
    </div>
  )
}
export default SearchPage
