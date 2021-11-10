import React from 'react';
import styled from 'styled-components';

const Home = () => {
	return (
		<Container>
			Welcome to the dashboard!
		</Container>
	);
};

export default Home;

const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	flex: 1;
`;