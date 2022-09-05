import React, { useRef, useState } from 'react';
import { send } from 'emailjs-com';
import {
	Button,
	Card,
	Container,
	Grid,
	Input,
	Spacer,
	Text,
	Textarea,
} from '@nextui-org/react';
import { Box } from './Header/Box';

export const ContactUs = () => {
	const form = useRef();

	const [user_name, Setuser_name] = useState('');
	const [user_email, Setuser_email] = useState('');
	const [message, Setmessage] = useState('');

	const sendEmail = (e) => {
		e.preventDefault();
		send(
			'service_uo0dyxc',
			'template_i2bjjjs',
			{
				user_name,
				user_email,
				message,
			},
			'f304csjcnmE0CtGNO'
		).then(
			(result) => {
				console.log(result.text);
			},
			(error) => {
				console.log(error.text);
			}
		);
	};

	return (
		<Box css={{ px: '$4', mt: '$3xl', mb: '18px', '@xsMax': { px: '$10' } }}>
			<form ref={form} onSubmit={sendEmail}>
				<Container md>
					<Card
						variant='flat'
						css={{
							alignItems: 'center',
							justifyContent: 'center',
							p: '$10',
						}}
					>
						<Card.Header>
							<Text size='$2xl' weight='medium'>
								Contact Me 📩
							</Text>
						</Card.Header>
						<Card.Body
							css={{
								p: '$10',
							}}
						>
							<Grid>
								<Input
									bordered
									labelPlaceholder='Name'
									color='secondary'
									name='user_name'
									value={user_name}
								/>
							</Grid>
							<Spacer y={2} />
							<Grid>
								<Input
									bordered
									color='secondary'
									type='email'
									name='user_email'
									value={user_email}
									labelPlaceholder='Email'
								/>
							</Grid>
							<Spacer y={2} />

							<Grid>
								<Textarea
									labelPlaceholder='Message'
									status='secondary'
									name='message'
									bordered
									value={message}
									rows={4}
								/>
							</Grid>
						</Card.Body>

						<Grid>
							<Button flat color='secondary' type='submit' value='Send'>
								Send
							</Button>
						</Grid>
					</Card>
				</Container>
			</form>
		</Box>
	);
};
