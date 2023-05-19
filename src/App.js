
import './App.css';
import Register from './components/Register';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/Home';
import Login from './components/Login';
import ProductList from './components/ProductList';


function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
    <Route exact path="/" element={<Home/>}/>
        <Route exact path="/login" element={<Login/>}/>
        <Route exact path="/prod" element={<ProductList/>}/>
        <Route exact path='/reg' element={<Register />}></Route>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
