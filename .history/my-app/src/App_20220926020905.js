import './App.css';
import NavbarMain from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Banner from './components/Banner/Banner';
import Cart from './components/Cart/Cart';
import Colombia from './components/Country/Colombia';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartContextProvider } from './context/CartContext';

function App() {
  return (
    <div className="App">
      <CartContextProvider>
        <BrowserRouter>
          <NavbarMain/>
          <button></button>
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
