import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../Form/Form.css";
import { Link } from 'react-router-dom'

export default function Form() {
	const [modal, setModal] = useState(false);
	const [form, setForm] = useState(true);

		const toggleModal = () => {
			setModal(true)
			setForm(false)
		}
	
	const [email, setEmail] = useState();
	const [password, setPassword] = useState();

	const handleSubmit = (event => {
		event.preventDefault();
	})
	return (
		<>
		{form && (
				<div className="container">
				<div className="row justify-content-center">
					<div className="col-12 col-sm-12 col-md-6 col-lg-6 mt-5">
						<form className="p-5 m-3 form-main" onChange={handleSubmit}>
							<div className="mb-3">
								<label for="exampleInputEmail1" className="form-label">
									Email address
								</label>
								<input
									type="email"
									className="form-control rounded-pill"
									id="exampleInputEmail1"
									aria-describedby="emailHelp"
									value={email}
									onChange={(e) => {
										setEmail(e.target.value)
									}}
								/>
								<div id="emailHelp" className="form-text">
									We'll never share your email with anyone else.
								</div>
							</div>
							<div className="mb-3">
								<label for="exampleInputPassword1" className="form-label">
									Password
								</label>
								<input
									type="password"
									className="form-control rounded-pill"
									id="exampleInputPassword1"
									value={password}
									onChange={(e) => {
										setPassword(e.target.value)
									}}
								/>
							</div>
		
						</form>
						<div className="row justify-content-center">
							<div className="col-4">
								<div className="row">
									<button	button className="btn btn-primary" onClick={toggleModal}>
										Confirm Buy
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		)} 
		{modal && (
			<div className='row row-cols-1 p-3 justify-content-center box-modal mt-5'>
				<div className='col-12 text-center'>
					<h2>Muchas Gracias por tu compra</h2>
				</div>
				<div className='col-4 text-center mt-3'>
					<Link to='/'>
						<button className="btn btn-primary">Aceptar</button>
					</Link>
				</div>
		</div>
		)}
		</>
	);
}
