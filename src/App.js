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
import {Provider} from 'react-redux'
import store from './store';
// import your route components too

function App() {

  return (
    <>      
    <Provider store={store}>
            <BrowserRouter>
              <Main>

                      <Routes>
                        <Route path="/home" element={<Home />}/>
                        <Route path="/products" element={<Product />}/>
                      </Routes>
              </Main>
            </BrowserRouter>
            </Provider>

             

    </>
  );
}

export default App;
