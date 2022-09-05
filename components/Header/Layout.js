import { Content } from './Content.js';
import { Box } from './Box.js';
import { Container } from '@nextui-org/react';

export const Layout = ({ children }) => (
	<Container fluid>
		<Box>{children}</Box>
	</Container>
);
