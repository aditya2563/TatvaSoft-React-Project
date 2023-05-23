
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar';
import Home from './components/Home';
import Products from './components/Products';
import About from './components/About';
import Contact from './components/Contact';
import Login from './components/Login';
import Register from './components/Register';
import Cart from './components/Cart';


function App() {
  return (
    <>
      < Navbar />
      <BrowserRouter>
        <Routes>
        <Route exact path="/" element={<Home />}/>
        <Route exact path="/prod" element={<Products />}/>
        <Route exact path="/about" element={<About />}/>
        <Route exact path="/contact" element={<Contact />}/>
        <Route exact path="/login" element={<Login />}/>
        <Route exact path="/register" element={<Register />}/>
        <Route exact path="/cart" element={<Cart />}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
