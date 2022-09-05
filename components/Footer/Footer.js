import { Card, Col, Text } from '@nextui-org/react';

function Footer() {
	return (
		<Card>
			<Card.Body>
				<Col justify='center' align='center'>
					<Text h6 size={15} css={{ m: 0 }}>
						Created whit NextUI
					</Text>
				</Col>
			</Card.Body>
		</Card>
	);
}

export default Footer;
