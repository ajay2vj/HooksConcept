import React, { useState } from 'react';
import Nav from '../component/Nav';

function State() {

	const [data, setData] = useState({
		username: '',
		password: ''
	});
	const [form, setForm] = useState({
		username: '',
		password: ''
	});
	const [submit, submitted] = useState(false);

	const printValues = e => {
		e.preventDefault();
		setForm({
		username: data.username,
		password: data.password
		});
		submitted(true);
	};

	const updateField = e => {
		setData({
		...data,
		[e.target.name]: e.target.value
		});
	};

	return (
		<div>
			<div className="container">
				<div className="row">
					<div className="col-md-4"></div>
					<div className="col-md-4 mt-5">
						<Nav/>
					</div>
					<div className="col-md-4"></div>
					<div className="col-md-2"></div>
					<div className="col-md-8 mt-5">
						<h2 className="text-center">useState</h2>
							<form onSubmit={printValues}>
								<div className="mb-3 row">
									<label className="col-sm-2 col-form-label">Username</label>
									<div className="col-sm-10">
										<input type="text" className="form-control" id="inputUsername"
										name="username"
										value={data.username}
										onChange={updateField}
										 />
									</div>
								</div>
								<div className="mb-3 row">
									<label className="col-sm-2 col-form-label">Password</label>
									<div className="col-sm-10">
										<input type="password" className="form-control" id="inputPassword"
										name="password"
										value={data.password}
										onChange={updateField}
										 />
									</div>
								</div>
								<div className="d-grid gap-5 col-4 mx-auto">
									<button className="btn btn-primary" type="submit">Submit</button>
								</div>
							</form>
					</div>
					<div className="col-md-2"></div>
					<div className="col-md-4"></div>
					<div className="col-md-4 mt-5">
						<p>User Name : {submit?form.username:null}</p>
						<p>Password :        {submit?form.password:null}</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default State;
