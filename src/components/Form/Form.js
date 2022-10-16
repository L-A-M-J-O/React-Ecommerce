import { useState } from "react";
import "../Form/Form.css";

export default function Form() {

	const [email, setEmail] = useState();
	const [password, setPassword] = useState();

	const handleSubmit = (event => {
		event.preventDefault();
		const gEmail = password;
		const gPassword = password;
		console.log(gEmail, gPassword)
	})

	return (
		<div className="container">
			<div className="row justify-content-center">
				<div className="col-12 col-sm-12 col-md-6 col-lg-6 mt-5">
					<form className="p-5 m-3 form-main" onChange={handleSubmit}>
						<div className="mb-3">
							<label for="exampleInputEmail1" className="form-label">
								Name
							</label>
							<input
								type="name"
								className="form-control rounded-pill"
							/>
						</div>
						<div className="mb-3">
							<label for="exampleInputEmail1" className="form-label">
								LatsName
							</label>
							<input
								type="lastname"
								className="form-control rounded-pill"
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
								value={email}
								onChange={(
									event,
								) => setEmail(event.target.value)}
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
								onChange={(
									event,
								) => setPassword(event.target.value)}
							/>
						</div>
						<div className="row justify-content-center p-2">
							<div className="col-12 col-sm-12 col-md-4 col-lg-4	p-2">
								<div className="col-12 text-center">
									<button type="submit" className="btn btn-primary">
										Confirm Buy
									</button>
								</div>
							</div>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
}
