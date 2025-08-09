// pages/Splash.tsx
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { IntroLoader } from '../components';

const Splash = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/home');
    }, 2500);
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <motion.div
      className='w-screen h-screen flex flex-col justify-center items-center absolute top-0 z-50 gap-10'
      style={{ background: 'var(--dark-bg)' }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}>
      <motion.h1
        className='text-white text-3xl font-bold z-10'
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: 'easeOut' }}>
        Loading...
      </motion.h1>
      <IntroLoader />
    </motion.div>
  );
};

export default Splash;
