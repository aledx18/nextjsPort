import { Navbar, Text, Switch, useTheme } from '@nextui-org/react';
import { SunIcon } from './SunIcon';
import { MoonIcon } from './MoonIcon';
import { Layout } from './Layout.js';
import { AcmeLogo } from './AcmeLogo.js';
import { useTheme as useNextTheme } from 'next-themes';
import Link from 'next/link.js';

export default function App() {
	const { setTheme } = useNextTheme();
	const { isDark, type } = useTheme();

	const collapseItems = ['Profile', 'Dashboard', 'Activity'];

	return (
		<Layout>
			<Navbar variant='floating' color='#26292b'>
				<Navbar.Toggle showIn='xs' />
				<Navbar.Brand
					css={{
						'@xs': {
							w: '12%',
						},
					}}
				>
					<AcmeLogo />
					<Text b color='secondary' hideIn='xs'>
						Ale
					</Text>
				</Navbar.Brand>

				<Navbar.Content hideIn='xs'>
					<Text weight='bold'>
						<Link href='/'>Home</Link>
					</Text>
					<Text weight='medium'>
						<Link href='/proyect'>Proyect</Link>
					</Text>
					<Text weight='medium'>
						<Link href='/contact'>Contact</Link>
					</Text>
				</Navbar.Content>

				<Navbar.Content
					css={{
						'@xs': {
							w: '60%',
							jc: 'flex-end',
						},
					}}
				></Navbar.Content>
				<Switch
					checked={isDark}
					onChange={(e) => setTheme(e.target.checked ? 'dark' : 'light')}
					size='xl'
					color='secondary'
					iconOn={<SunIcon filled />}
					iconOff={<MoonIcon filled />}
				/>
				<Navbar.Collapse>
					{collapseItems.map((item, index) => (
						<Navbar.CollapseItem
							key={item}
							activeColor='warning'
							css={{
								color: index === collapseItems.length - 1 ? '$error' : '',
							}}
							isActive={index === 2}
						>
							<Link
								color='inherit'
								css={{
									minWidth: '100%',
								}}
								href='#'
							>
								{item}
							</Link>
						</Navbar.CollapseItem>
					))}
				</Navbar.Collapse>
			</Navbar>
		</Layout>
	);
}
