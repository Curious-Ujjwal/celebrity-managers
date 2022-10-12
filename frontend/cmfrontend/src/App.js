import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home';
import Footer from './components/Footer/Footer';

import logo from './logo.svg';

import './App.css';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path='/' element={< Home/>} />
        <Route path='/navbar' element={<Navbar/>} />
        <Route path='/footer' element={< Footer/>} />
      </Routes>
    </div>
  );
}

export default App;
