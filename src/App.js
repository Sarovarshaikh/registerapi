import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Register from './components/Register';
import Login from './components/Login';


function App() {
  return (
    <div className="">
      <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/about' element ={<About/>} />
            <Route path='/login' element={<Login/>} />
            <Route path='/register' element={<Register/>} />
           
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
