import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const Details = () => {
    const [details, setDetails] = useState({})
    const location = useLocation();
    const fullArticle = location.state?.fullArticle;

    useEffect(() => {
        setDetails(fullArticle)
    }, [fullArticle])

    const showMedia = () => {
        if (details.multimedia) {
            return <img className='main-img' src={details.multimedia[1].url} />
        }
    }

    return (
        <div>
            <h3>{details.title}</h3>
            <p>{details.byline}</p>
            <p>{details.published_date}</p>
            <p>Section: {details.section} {details.subsection}</p>
            {showMedia()}
            <p>{details.abstract}</p>
            <a href={details.url}>Read the full article here</a>
        </div>
    )
}

export default Details