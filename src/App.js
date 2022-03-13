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

import React, { useState } from 'react';
import './resources/Layout.css'
import Main from './layout/Main';
// import your route components too

function App() {

  return (
    <>
            <BrowserRouter>
              <Main>

                      <Routes>
                        <Route path="/home" element={<Home />}/>
                        <Route path="/products" element={<Product />}/>
                      </Routes>
              </Main>
            </BrowserRouter>

             

    </>
  );
}

export default App;
