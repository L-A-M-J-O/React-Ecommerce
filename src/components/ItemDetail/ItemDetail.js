import "./ItemDetail.css";

import Count from "../ItemCount/ItemCount";
import CartContext from "../../context/CartContext";

import { useState, useContext } from "react";
import { Link } from "react-router-dom";

const ItemDetail = ({ id, name, price, description, stock, img, country }) => {
	const [quantityAdd, setQuantityAdd] = useState(0);
	const { addItem, getProductQuantity } = useContext(CartContext);

	const handleOnAdd = (quantity) => {
		setQuantityAdd(quantity);

		const productToAdd = {
			id,
			name,
			price,
			quantity,
		};
		if (quantity > 0) {
			addItem(productToAdd);
		}
	};

	const productQuantity = getProductQuantity(id);
	return (
		<div className="container">
			<div className="row justify-content-center mt-4">
				<div className="col-4 text-center">
					<Link to="/cervezas" className="m-a-detail" aria-current="page">
						Cervezas
					</Link>
				</div>
			</div>
			<div className="row mt-4">
				<div className="col-12  col-sm-12 col-md-5 col-lg-5 text-center">
					<img className="img-product" src={img} alt={name} />
				</div>
				<div className="col-12 col-sm-12 col-md-7 col-lg-7">
					<div className="row-cols-1">
						<div className="col-7">
							<h1>{name}</h1>
						</div>
						<div className="col-7">
							<p>${price}</p>
						</div>
						<div className="col-8 text-start">
							<p>
								<b>
									incl. 19% VAT. (the VAT of the respective EU country will be
									calculated at the checkout.) plus
								</b>
							</p>
						</div>
						<div className="col-9">
							<p>{description}</p>
						</div>
						<div className="col-6">
							<p>
								Stocks <b>{stock}</b>
							</p>
						</div>
						<div className="col-6">
							<p>
								<b>{country}</b>
							</p>
						</div>
						<div className="col-8 text-center mt-4">
							{quantityAdd <= 0 ? (
								<Count
									stock={stock}
									initial={productQuantity}
									onAdd={handleOnAdd}
								/>
							) : (
								<div>
									<Link className="t-hero-d" to="/Cart">
										Buy
									</Link>
									<hr />
									<Link className="t-hero-d" to="/cervezas">
										keep shopping
									</Link>
								</div>
							)}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ItemDetail;
