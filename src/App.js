import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes,} from 'react-router-dom';
import Login from './Pages/Login';
import Dashboard from './Pages/Dashboard';
import Sidebar from './Components/Sidebar';
import styled from 'styled-components';
import Header from './Components/Header';
import SoldPage from './Pages/SoldPage';
import AddProduct from './Pages/AddProduct';
import { useState } from 'react';

const loggedIn = localStorage.getItem('@user');

function App() {
  const [showSidebar, setShowSidebar] = useState(true);

  
  return (
    <Container>
      {loggedIn && (
        <>
          <div className='page-topbar'>
            <Header showSidebar={showSidebar} setShowSidebar={setShowSidebar}/>
          </div>
          
          <div className='sidebar'>
            <Sidebar showSidebar={showSidebar}/>
          </div>
        </>
      )}
      
      <Router>
        <Routes>
          {loggedIn ? (
            <>
              <Route path='/' exact element={<Dashboard showSidebar={showSidebar}/>}/>
              <Route path='/sold' element={<SoldPage />} />
              <Route path='/products' element={<AddProduct />} />
            </>
          ):(
            <Route path='/' element={<Login />} />
          )}
            
        </Routes>
      </Router>
    </Container>
  );
}

export default App;

const Container = styled.div`
  display: flex;

  .page-topbar{
    box-shadow: 0 1px 1px rgba(0,0,0, .08);
    left: 0;
    position: fixed;
    top: 0;
    right: 0;
    z-index: 1002;
}
`;