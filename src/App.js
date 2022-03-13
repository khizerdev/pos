import { Button } from 'antd';
import 'antd/dist/antd.css';
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from './pages/Home';
import Product from './pages/Product';
// import your route components too

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<Home />}/>
          <Route path="/products" element={<Product />}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
