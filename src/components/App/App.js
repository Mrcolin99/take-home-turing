import './App.css';
import Main from '../Main/Main';
import Details from '../Details/Details';
import news from '../../Assets/news.gif'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom'

function App() {
  return (
    <div>
      <Router>
        <div className='header'>
          <Link to='/'>
            <img className='home-gif' src={news}></img>
          </Link>
          <h1>News Stand</h1>
        </div>
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/details' element={<Details />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App;
