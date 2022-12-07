import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Company from './pages/Company';
import Community from './pages/Community';
import Products from './pages/Products';
import ProductPage from './pages/Products/ProductPage';
import Contact from './pages/Contact';
function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/company' element={<Company />}></Route>
        <Route path='/community' element={<Community />}></Route>
        <Route path='/products' element={<Products />}>
          <Route path=':filter' element={<Products />} />
          <Route path='' element={<Products />} />
        </Route>
        <Route path='/product/:id' element={<ProductPage />} />
        <Route path='/contact' element={<Contact />}></Route>
      </Routes>
    </div>
  );
}

export default App;
