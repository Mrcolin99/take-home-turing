import { useEffect, useState } from "react"
import { fetchAll } from "../../ApiCalls"
import { Link } from "react-router-dom"


const Main = () => {
    const [news, setNews] = useState([])
    const [fullArticle, setSetFullArticle] = useState({})
    const [sort, setSort] = useState('')

    useEffect(() => {
        fetchAll()
            .then(data => {
                setNews(data.results)
            })
    }, [])

    useEffect(() => {
        if (sort === 'alphabetical') {
          setNews([...news].sort((a, b) => a.title.localeCompare(b.title)))
        } else if (sort === 'time') {
          setNews([...news].sort((a, b) => new Date(b.created_date) - new Date(a.created_date)))
        }
      }, [sort])

    const showArticle = (article) => {
        setSetFullArticle(article)
    }

    const showNews = () => {
        if (news.length === 0) {
            return <p>Loading...</p>
        } else {
            return news.map(article => {
                return (
                    <div className='article'>
                        <h3>{article.title}</h3>
                        <p>Date: {article.created_date}</p>
                        <Link onClick={() => showArticle(article)} state={{ fullArticle: article }} to='details'>Learn More</Link>
                        <br />
                    </div>
                )
            }
            )
        }
    }

    const setSortType = (event) => {
        setSort(event.target.value)
    }

    return (
        <div className='main'>
            <select name="sort" id="sort" value={sort} onChange={setSortType}>
                <option value=''>Select a way to sort</option>
                <option value='alphabetical'>Alphabetical</option>
                <option value='time'> Date Created</option>
            </select>
            {showNews()}
        </div>
    )
}

export default Main