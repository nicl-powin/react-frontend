import React from 'react';
import styled from 'styled-components';

import { ReactComponent as PowinLogo } from '../../icons/powin-logo.svg';

const AppNavigation = () => {
	return (
		<Container>
			<LogoContainer>
				<PowinLogo />
			</LogoContainer>
		</Container>
	);
};

export default AppNavigation;

const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 55px;
	padding: 15px 35px;
	background-color: palevioletred;
	box-shadow: 1px 0 1px 1px #fff;
	z-index: 1;
`;
const LogoContainer = styled.div`
	width: 35px;
	height: 35px;
	fill: #fff;
`;