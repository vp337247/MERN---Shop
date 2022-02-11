import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useState } from 'react';
//Screens
import HomeScreen from './Screens/HomeScreen'
import ProductScreen from './Screens/ProductScreen'
import CartScreen from './Screens/CartScreen'

//Components
import Navbar from './components/Navbar';
import Backdrop from './components/Backdrop';
import SideDrawer from './components/SideDrawer';
import LoginScreen from './Screens/LoginScreen';

function App() {

  const[sideToggle,setSideToggle]=useState(false)
  return (
    <Router>
      <Navbar click={()=> setSideToggle(true)} />
      <SideDrawer show={sideToggle} click={()=> setSideToggle(false)}/>
      <Backdrop show={sideToggle} click={()=> setSideToggle(false)}/>
      <main>
        <Routes>

          <Route exact path='/' element={<HomeScreen />} />
          <Route exact path="/product/:id" element={<ProductScreen />} />
          <Route exact path="/cart" element={<CartScreen />} />
          <Route exact path="/userlogin" element={<LoginScreen />} />
        </Routes>
      </main>

    </Router>
  );
}

export default App;
