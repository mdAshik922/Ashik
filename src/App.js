import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Footer from './Component/Footer/Footer';
import Header from './Component/Header/Header';
import Home from './Component/Home/Home';






function App() {
  return (
    <div  className="App">
  <BrowserRouter>
 <Header></Header>
  <Routes>
   <Route  path="/" element={<Home></Home>} />
   <Route path="/home" element={<Home></Home>} />
  </Routes>
  <Footer></Footer>
  </BrowserRouter>

    </div>
  );
}

export default App;
