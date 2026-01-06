import {
	BrowserRouter as Router,
	Routes,
	Route,
	Outlet,
} from 'react-router-dom';
import { lazy, Suspense } from 'react';
import { MailForm, MiniLoader } from './components';
import { Modal } from './components';
import Splash from './pages/Splash';
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const NotFound = lazy(() => import('./pages/NotFound'));
import { Footer, NavBar } from './components';

const Layout = () => {
	return (
		<>
			<header className='max-w-screen'>
				<NavBar />
			</header>
			<main className='flex flex-col items-center justify-center max-w-[100vw] h-auto bg-inherit'>
				<Suspense
					fallback={
						<MiniLoader className='min-h-screen items-center justify-center' />
					}
				>
					<Outlet />
				</Suspense>
			</main>
			<Footer />
		</>
	);
};

const App = () => {
	return (
		<>
			<Router>
				<Routes>
					<Route path='/' element={<Splash />} />
					<Route element={<Layout />}>
						<Route path='/home' element={<Home />} />
						<Route path='/about' element={<About />} />
						<Route path='*' element={<NotFound />} />
					</Route>
				</Routes>
			</Router>
			<Modal>
				<MailForm />
			</Modal>
		</>
	);
};

export default App;
