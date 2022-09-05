import { Card, Container, Grid, Row, Text } from '@nextui-org/react';
import { FaBoxOpen } from 'react-icons/fa';
import { Box } from '../Header/Box';
import { skills } from './Items';

function Skills() {
	return (
		<Container sm css={{ mt: '$3xl' }}>
			<Box css={{ px: '$4', my: '$3xl', '@xsMax': { px: '$10' } }}>
				<Box
					css={{
						display: 'flex',
						justifyContent: 'space-between',
						position: 'relative',
					}}
				>
					<Box css={{ textAlign: 'left' }}>
						<Text h1 size='$5xl' weight='bold'>
							My Skills
						</Text>
						<Text h4 weight='normal'>
							Rhoncus mattis rhoncus urna viver 💻
						</Text>
					</Box>
					<Grid.Container gap={2} justify='flex-start'>
						{skills.map((item, index) => {
							return (
								<Grid xs={6} sm={3} key={index}>
									<Card isHoverable>
										<Card.Body css={{ p: 0 }}>
											<Card.Image
												src={item.icon}
												alt={item.title}
												width={'100px'}
											/>
										</Card.Body>
										<Card.Footer isBlurred>
											<Row wrap='wrap' justify='space-between' align='center'>
												<Text b>{item.title} </Text>
											</Row>
										</Card.Footer>
									</Card>
								</Grid>
							);
						})}
					</Grid.Container>
				</Box>
			</Box>
		</Container>
	);
}

export default Skills;
