import "../Form/Form.css";

import { Link } from "react-router-dom";

export default function Form({ id, name, price, description, img, country }) {
	return (
		<div className="container">
			<div className="row justify-content-center">
				<div className="col-6 mt-5">
					<form className="p-5 m-3 form-main">
						<div className="mb-3">
							<label for="exampleInputEmail1" className="form-label">
								Name
							</label>
							<input
								type="email"
								className="form-control rounded-pill"
								id="exampleInputEmail1"
								aria-describedby="emailHelp"
							/>
						</div>
						<div className="mb-3">
							<label for="exampleInputEmail1" className="form-label">
								LatsName
							</label>
							<input
								type="email"
								className="form-control rounded-pill"
								id="exampleInputEmail1"
								aria-describedby="emailHelp"
							/>
						</div>
						<div className="mb-3">
							<label for="exampleInputEmail1" className="form-label">
								Email address
							</label>
							<input
								type="email"
								className="form-control rounded-pill"
								id="exampleInputEmail1"
								aria-describedby="emailHelp"
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
							/>
						</div>
						<div className="row justify-content-center p-2">
							<div className="col-4 p-2">
								<div className="mb-3 form-check">
									<input
										type="checkbox"
										className="form-check-input"
										id="exampleCheck1"
									/>
									<label className="form-check-label" for="exampleCheck1">
										Check me out
									</label>
								</div>
							</div>
							<div className="col-3 p-0 m-0">
								<button type="submit" class="btn btn-primary">
									Confirm Buy
								</button>
							</div>
						</div>
					</form>
				</div>
				<div className="col-6 mt-5">
					<div className="row m-2 justify-content-center">
						<div className="col-2">
							<h4>Beer</h4>
						</div>
						<div className="col-12">
							<div className="row justify-content-center p-2 m-2">
								<div className="col-8">
									<div className="m-card-m col-12 col-sm-4 col-md-2 col-lg-2">
										<div className="m-card row gx-0 gy-0 mt-3">
											<img className="m-card-img" src={img} alt="item imagen" />
										</div>
										<div className="row justify-content-center">
											<div className="col-9 mt-4">
												<p className="name">{name}</p>
											</div>
											<div className="col-4">
												<p>{price}</p>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
