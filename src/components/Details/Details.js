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
            return <img src={details.multimedia[1].url} />
        }
    }

    return (
        <div>
            <h3>{details.title}</h3>
            <p>{details.byline}</p>
            {showMedia()}
            <p>{details.abstract}</p>
        </div>
    )
}

export default Details