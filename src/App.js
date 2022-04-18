import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContatiner';
import Cart from './components/Cart';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemDetailContainer from './components/ItemDetailContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const App = ()=> {
  return (
    <div className="App">
      
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path="/" element={<ItemListContainer/>} />
          <Route path='/category/:Cid' element={<ItemListContainer/>}/>
          <Route path="/item/:Iid" element={<ItemDetailContainer/>}/>
          <Route path='/carrito' element={<Cart/>}></Route>
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
