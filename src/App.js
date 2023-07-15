import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home'
import Contact from './pages/Contact';
import About from './pages/About';
import Rooms from './pages/Rooms';



function App() {
  return (
    <div className="">
      <BrowserRouter>
      <Routes>
        <Route index element={<Home/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/rooms" element={<Rooms/>}/>
        </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
