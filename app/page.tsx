import { resolve } from "path"
import { categories } from "../constants"
import fetchNews from "../utils/fetchNews"
import NewsList from "./NewsList"

async function Homepage() {
  const news:NewsResponse = await fetchNews(categories.join(","))
  //stepzen import curl http://api.mediastack.com/v1/news?access_key=paraguacu::stepzen.net+1000::588a1d55f38c0b7c734cf6f5af60859335da703a46439fa818362fa3b250afc7&sources=business,sports
  return (
    <div>
          <NewsList news={news}/>
    </div>
  )
}

export default Homepage