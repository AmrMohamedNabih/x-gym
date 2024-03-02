import Profile from './pages/Profile/Profile';
import NavBar from './components/NavBar/NavBar';
import { useEffect, useState } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
  useNavigate,
} from 'react-router-dom';
import Exercises from './pages/Exercises/Exercises';
import Store from './pages/Store/Store';
import Data from './data/User.json';
import Login from './pages/login/login';
import SignUp from './pages/signUp/signUp';
import { useCookies } from 'react-cookie';
import FriendPage from './pages/FriendPage/FriendPage';
import axios from 'axios';
import Detail from './pages/Store/Detail';
import Cart from './pages/Store/Cart';
import ProductsList from './pages/Store/productsList';
import ProductsList2 from './pages/Store/productsList2';
import ProductsList3 from './pages/Store/productsList3';
import Home from './pages/Store/Home';
import AboutUs from './pages/aboutUs/aboutUs';
import Footer from './components/store/footer';

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

function AppContent() {
  const location = useLocation();
  const { pathname } = location;
  const [cookies] = useCookies(['Email',"Id"]);
  const isAuthenticated = cookies.Email;

  const navigate = useNavigate();
  
useEffect(() => {
  if(isAuthenticated && (pathname == '/' || pathname === '/signUp') ){
    
    navigate('/exercises');
  }
},[]);
  useEffect(() => {
    // Redirect to the login page if not authenticated
    if (!isAuthenticated && pathname !== '/' && pathname !== '/signUp') {
      navigate('/'); // Redirect to the login page
    }
  }, [isAuthenticated, pathname, navigate]);
  return (
    <>
      {!isAuthenticated || pathname === '/' || pathname === '/signUp' ? null : (
        <NavBar UserImg={Data.User.UserImg} />
      )}
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/exercises" element={<Exercises />} />
        <Route path="/FriendPage" element={<FriendPage/>} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/profile" element={<Profile/>} />
        <Route path='/Store' element={<Home/>}></Route>
        <Route path='/Detail' element={<Detail/>}></Route>
        <Route path='/Cart' element={<Cart/>}></Route>
        <Route path='/productsList' element={<ProductsList/>}></Route>
        <Route path='/productsList2' element={<ProductsList2/>}></Route>
        <Route path='/productsList3' element={<ProductsList3/>}></Route>
        <Route path='/aboutUs' element={<AboutUs/>}></Route>
      </Routes>
    </>
  );
}

export default App;
