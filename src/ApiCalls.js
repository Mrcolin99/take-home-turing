const key = process.env.REACT_APP_NY_TIMES_KEY

export const fetchAll = () => {
    return fetch(`https://api.nytimes.com/svc/topstories/v2/home.json?api-key=XhTCffvWu7ouYIiIADETyNdc0eO5XhcQ`)
    .then(response => response.json())
}