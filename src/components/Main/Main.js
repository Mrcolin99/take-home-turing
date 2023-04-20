import { useEffect, useState } from "react"
import { fetchAll } from "../../ApiCalls"
import { Link } from "react-router-dom"


const Main = () => {
    const [news, setNews] = useState([])
    const [fullArticle, setSetFullArticle] = useState({})

    useEffect(() => {
        fetchAll()
            .then(data => {
                setNews(data.results)
            })
    }, [])

    const showArticle = (article) => {
        setSetFullArticle(article)
    }

    const showNews = () => {
        if (news.length === 0) {
            return <p>Loading...</p>
        } else {
            return news.map(article => {
                return (
                    <div>
                        <h3>{article.title}</h3>
                        <p>Date: {article.created_date}</p>
                        <Link onClick={() => showArticle(article)} state={{fullArticle: article}} to='details'>Learn More</Link>
                        <br />
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