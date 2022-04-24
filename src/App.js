
import './App.css';
import { Route,Routes,BrowserRouter } from 'react-router-dom';
import Homepage from './Component/Content/HomePage';
import About from './Component/Content/About';
import Contact from './Component/Content/Contact';
import Products from './Component/Content/Products';
import Navbar from './Component/Content/Navbar'
import Footer from './Component/Content/Footer';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Homepage />} />
        <Route path="/about"  element={<About />} />
        <Route path="/product"  element={<Products />} />
        <Route path="/service"  element={<Contact />} />
      </Routes>
    <Footer />
      </BrowserRouter>
     
    </div>
  );
}

export default App;
