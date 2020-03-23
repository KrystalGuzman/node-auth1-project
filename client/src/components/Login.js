import React, { useState } from 'react';
import axios from 'axios';

const Login = ({ isLoggedIn, setIsLoggedIn }) => {
	const [ userInput, setUserInput ] = useState('');

	const handleSubmit = (event) => {
		event.preventDefault();
		axios
			.post('http://localhost:5000/api/login', userInput)
			.then((response) => {
				console.log('Login response:', response);
				if (response.status === 200) {
                    sessionStorage.setItem("info", response.data.user);
					setIsLoggedIn(true);
				}
			})
			.catch((error) => {
				console.log('Could not log in:', error);
			});
	};

	const handleChange = (event) => {
		setUserInput({ ...userInput, [event.target.name]: event.target.value });
	};

	return (
		<div className="loginForm">
			{isLoggedIn ? (
				<p>You are already logged in.</p>
			) : (
				<form>
					<label>
						Username:
						<input type="text" name="username" value={userInput.username} onChange={handleChange} />
					</label>
					<label>
						Password:
						<input type="password" name="password" value={userInput.password} onChange={handleChange} />
					</label>
					<button onClick={handleSubmit}>Log In</button>
				</form>
			)}
		</div>
	);
};

export default Login;
