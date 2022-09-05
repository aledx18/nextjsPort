import { Card, Col, Container, Row, Spacer, Text } from '@nextui-org/react';
import Head from 'next/head';
import Image from 'next/image';
import Footer from '../components/Footer/Footer';
import App from '../components/Header/App';
import { Content } from '../components/Header/Content';
import Skills from '../components/Skills/Skills';

export default function Home() {
	return (
		<>
			<App />
			<Content />
			<Skills />
			<Footer />
		</>
	);
}
