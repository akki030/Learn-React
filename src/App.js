import logo from './logo.svg';
import './App.css';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/home';
import { About } from './pages/about';

function App() {
  return (
    <div className="App">
      <header>

      </header>
      <BrowserRouter>
      <Routes>
          <Route path='home' element={<Home/>} />
          <Route path='about' element={<About/>} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
