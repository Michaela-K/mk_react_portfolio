import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home Page';
import Navbar from './components/Navbar';
import About from './components/About';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Navbar/> 
          <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/about" element={<About/>}></Route>
            <Route path="*" element={<div>404 Not Found</div>}></Route>
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
