import axios from "axios"
import { useQuery } from "react-query"

const useNews = () => {
    const apiKey ="709fa6626ddd4e899a173b78e073387e"
    const apiUrl = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`

    const {data: news, isLoading} = useQuery("news", async () => {
        try {
            const res = await axios.get(apiUrl)
            return res.data.articles
        } catch (error) {
            console.log(error)
        }
    })

    const filteredData = news?.filter((item:any) => item?.urlToImage !== null && item?.urlToImage !== undefined && item?.content !== "")
  
    return {
 filteredData,
 isLoading
  }
}

export default useNews