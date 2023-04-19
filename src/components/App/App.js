import './App.css';
import Main from '../Main/Main';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'

function App() {
  return (
    <div>
      <Router>
      <h1>News Stand</h1>
          <Routes>
            <Route path='/' element={<Main />} />
          </Routes>
      </Router>
    </div>
  )
}

export default App;
