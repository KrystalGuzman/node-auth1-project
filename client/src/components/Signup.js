import React, { useState } from 'react';
import axios from 'axios';

const Signup = ({ isLoggedIn, setIsLoggedIn }) => {
	const [ userInput, setUserInput ] = useState('');

	const handleSubmit = (event) => {
		event.preventDefault();
		axios
			.post('http://localhost:5000/api/register', userInput)
			.then((response) => {
				console.log('Signup response:', response);

				if (response.status === 200) {
					setIsLoggedIn(true);
				}
			})
			.catch((error) => {
				console.log('Could not sign up:', error);
			});
	};

	const handleChange = (event) => {
		setUserInput({ ...userInput, [event.target.name]: event.target.value });
	};

	return (
		<div className="signupForm">
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
					<button onClick={handleSubmit}>Sign Up</button>
				</form>
			)}
		</div>
	);
};

export default Signup;
