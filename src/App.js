import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes,} from 'react-router-dom';
import Login from './Pages/Login';
import Home from './Pages/Home';

const loggedIn = localStorage.getItem('@user');

function App() {
  return (
    <Router>
      <Routes>
        {loggedIn && <Route path='/' exact element={<Home />} />}
        {!loggedIn && <Route path='/' element={<Login />} />}
      </Routes>
    </Router>
  );
}

export default App;
