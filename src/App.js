import './App.css';

// Browser Router
import { BrowserRouter, Route, Routes } from "react-router-dom";

// Every Pages
import Home from './Pages/Home'
import About from './Pages/About'
import Product from './Pages/Product'
import Service from './Pages/Service'
import Contact from './Pages/Contact'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* Path for Main Pages */}
          <Route exact path="/" element={<Home />}/>
          <Route path="/About" element={<About />}/>
          <Route path="/Product" element={<Product />}/>
          <Route path="/Service" element={<Service />}/>
          <Route path="/Contact" element={<Contact />}/>
        </Routes>

      </BrowserRouter>
    </>
  );
}

export default App;
