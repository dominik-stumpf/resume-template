'use client';

import { globalStyles } from './styles/global-styles';
import { Global } from '@emotion/react';
import styled from '@emotion/styled';

const Box = styled.div(({ theme }) => ({
	color: theme.best,
	fontFamily: theme.sansSerifFont,
	fontSize: 128,
}));

export default function Home() {
	return (
		<main>
			<Global styles={globalStyles} />
			<Box>brown fox</Box>
		</main>
	);
}
