import { Text, Spacer, Container, Button, Card } from '@nextui-org/react';
import { MdWavingHand } from 'react-icons/md';
import { FaRegAddressCard, FaLinkedin, FaGithub } from 'react-icons/fa';

import { Box } from './Box.js';
import Image from 'next/image.js';

export const Content = () => (
	<Container sm>
		<Box css={{ px: '$4', mt: '$3xl', '@xsMax': { px: '$10' } }}>
			<Text h3 color='secondary' weight='bold'>
				Hello there <span> 👋</span> I am
			</Text>
			<Text h1 size='$5xl' weight='bold'>
				Alejandro Díaz
			</Text>
			<Text h4 weight='normal'>
				I am a fullstack web developer with a Front-End Orientation. ugit, sed
				quia consequuntur magni dolores eos qui ratione voluptatem sequi
				nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit
				amet, consectetur, adipisci velit, sed quia non numquam eius.
			</Text>
			<Box
				css={{
					display: 'flex',
					justifyContent: 'start',
					mt: '$0',
					pt: '$0',
				}}
			>
				<Box>
					<Spacer y={1} />
					<Button
						icon={<FaRegAddressCard fill='currentColor' />}
						flat
						color='secondary'
						auto
					>
						Download Resume
					</Button>
					<Spacer y={1} />
					<Text h5 weight='medium'>
						Find me on :
					</Text>

					<Box css={{ display: 'flex', gap: '$5', m: 'auto' }}>
						<a
							target='_blank'
							href={'https://linkedin.com/in/alejandrodíaz-dev'}
							rel='noopener noreferrer'
						>
							<Card
								isPressable
								isHoverable
								variant='bordered'
								css={{ mw: '62px', alignItems: 'center' }}
							>
								<Card.Body>
									<FaLinkedin size='35px' color='secondary' />
								</Card.Body>
							</Card>
						</a>
						<a
							target='_blank'
							href={'https://github.com/aledx18'}
							rel='noopener noreferrer'
						>
							<Card
								isPressable
								isHoverable
								variant='bordered'
								css={{ mw: '62px', alignItems: 'center' }}
							>
								<Card.Body>
									<FaGithub size='35px' color='secondary' />
								</Card.Body>
							</Card>
						</a>
					</Box>
				</Box>

				<Container>
					<Image
						width={900}
						height={650}
						objectFit='cover'
						alt='mac'
						src='/nextone.svg'
					/>
				</Container>
			</Box>
		</Box>
	</Container>
);
