import "./App.css";
import NavbarMain from "./components/Navbar/Navbar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import Banner from "./components/Banner/Banner";
import Cart from "./components/Cart/Cart";
import Pais from "./components/Country/Pais";
import Form from "./components/Form/Form";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartContextProvider } from "./context/CartContext";

function App() {
	return (
		<div className="App">
			<CartContextProvider>
				<BrowserRouter>
					<NavbarMain />
					<Routes className="main">
						<Route path="/" element={<Banner />} />
						<Route path="/cervezas" element={<ItemListContainer />}>
							<Route path=":country" element={<ItemListContainer />} />
						</Route>
						<Route path="Detail/:prodId" element={<ItemDetailContainer />} />
						<Route path="Cart" element={<Cart />} />
						<Route path="/Pais" element={<Pais />} />
						<Route path="/form" element={<Form />} />
						<Route path="*" element={<h1>404 Not Page</h1>} />
					</Routes>
				</BrowserRouter>
			</CartContextProvider>
		</div>
	);
}

export default App;
