import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home'
import About from './pages/About';
import Room1 from './pages/Room1';
import Room2 from './pages/Room2';



function App() {
  return (
    <div className="">
      <BrowserRouter>
      <Routes>
        <Route index element={<Home/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/room1" element={<Room1/>}/>
        <Route path="/room2" element={<Room2/>}/>
        </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
