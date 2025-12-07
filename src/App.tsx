import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import { MailForm, MiniLoader } from './components';
import { Modal } from './components';
const Splash = lazy(() => import('./pages/Splash'));
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const NotFound = lazy(() => import('./pages/NotFound'));
import { Footer, NavBar } from './components';

const App = () => {
	return (
		<>
			<Router>
				<header className='max-w-screen'>
					<NavBar />
				</header>
				<main className='flex flex-col items-center justify-center max-w-[100vw] h-auto bg-inherit'>
					<Suspense fallback={<MiniLoader />}>
						<Routes>
							<Route path='/' element={<Splash />} />
							<Route path='/home' element={<Home />} />
							<Route path='/about' element={<About />} />
							<Route path='*' element={<NotFound />} />
						</Routes>
					</Suspense>
				</main>
				<Footer />
			</Router>
			<Modal>
				<MailForm />
			</Modal>
		</>
	);
};

export default App;
