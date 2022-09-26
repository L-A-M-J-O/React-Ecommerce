import './App.css';
import NavbarMain from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Banner from './components/Banner/Banner';
import Cart from './components/Cart/Cart';
import Colombia from './components/Country/Colombia';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartContextProvider } from './context/CartContext';
import { useState } from 'react';

function App() {

  const [click, setClick] = useState (0);



  return (
    <div className="App">
      <CartContextProvider>
        <BrowserRouter>
          <NavbarMain/>
          <h2>{click}</h2>
          <button onClick={() => setClick(0)}>Reset</button>
          <button onClick={() => setClick(element => element + 1)}>+</button>
          <Routes className='main'>
          <Route path="/" element={<Banner/>}/>
            <Route path='/country' element={<Colombia/>}/>
            <Route path="/cervezas" element={<ItemListContainer/>} />
            <Route path="Category/:category" element={<ItemListContainer/>} />
            <Route path="Detail/:prodId" element={<ItemDetailContainer/>} />
            <Route path='Cart' element={<Cart/>}/>
            <Route path="*" element={<h1>404 Not Page</h1>} />
          </Routes>
        </BrowserRouter>
      </CartContextProvider>
    </div>
  );
}

export default App;
