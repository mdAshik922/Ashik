import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import About from './Component/About/About';
import Blogs from './Component/Blogs/Blogs';
import Contact from './Component/Contact/Contact';
import Header from './Component/Header/Header';
import Home from './Component/Home/Home';
import Projects from './Component/Projects/Projects';





function App() {
  return (
    <div  className="App">
  <BrowserRouter>
 <Header></Header>
  <Routes>
   <Route  path="/" element={<Home></Home>} />
   <Route path="/home" element={<Home></Home>} />
   <Route path="/about" element={<About></About>} />
   <Route path="/projects" element={<Projects></Projects>} />
   <Route path="/blogs" element={<Blogs></Blogs>} />
   <Route path="/contact" element={<Contact></Contact>} />
  
  </Routes>
  </BrowserRouter>

    </div>
  );
}

export default App;
