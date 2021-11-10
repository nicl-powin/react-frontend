import React from 'react';
import styled from 'styled-components';

const Login = ({ setToken }) => {
	const handleSubmit = () => {
		setToken(true);
	};

	return (
		<Container>
			<LoginForm>
				<Header>Welcome to Powin</Header>
				<form onSubmit={ handleSubmit }>
					<Input
						type="email"
						autofocus
						placeholder="Email Address"
					/>
					<Input
						type="password"
						placeholder="Password"
					/>
					<Submit type="submit">Log In</Submit>
				</form>
			</LoginForm>
		</Container>
	);
};

export default Login;

const Container = styled.div`
	display: flex;
	flex: 1;
	align-items: center;
	justify-content: center;
	background-color: palevioletred;
`;

const LoginForm = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 250px;
`;
const Header = styled.h2`
	color: #fff;
	margin: 0 0 25px;
`;
const Input = styled.input`
	width: 100%;
	border-radius: 5px;
	border: 1px solid #fff;
	padding: 15px 10px;
	margin-bottom: 15px;
	background-color: transparent;
	color: #fff;

	&::placeholder {
		color: #fff;
	}

	&:focus {
		background-color: #c94d75;
	}
`;
const Submit = styled.button`
	width: 100%;
	border-radius: 5px;
	border: none;
	padding: 15px 10px;
	margin-bottom: 15px;
	background-color: #fff;
	color: palevioletred;
	font-weight: 600;
	box-shadow: 0 2px 2px rgba(0, 0, 0, .2);
	cursor: pointer;
`;