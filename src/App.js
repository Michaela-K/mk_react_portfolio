import './App.css';
import { BrowserRouter, Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home Page';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Navbar/> 
          <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="*" element={<div>404 Not Found</div>}></Route>
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
