import { useEffect, useState } from "react"
import { fetchAll } from "../../ApiCalls"

const Main = () => {
    const [news, setNews] = useState([])
    useEffect(() => {
        fetchAll()
            .then(data => {
                setNews(data.results)
            })
    }, [])

    const showNews = () => {
        if (news.length === 0) {
            return <p>Loading...</p>
        } else {
            return news.map(article => {
                return (
                    <div>
                    <h3>{article.title}</h3>
                    </div>
                )
            }
            )
        }
    }
    return (
        <div>
            {showNews()}
        </div>
    )
}

export default Main