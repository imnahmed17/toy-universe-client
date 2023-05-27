import { Outlet, ScrollRestoration } from 'react-router-dom';
import NavBar from './pages/Shared/NavBar';
import Footer from './pages/Shared/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div>
      <NavBar />
      <Outlet />
      <Footer />
      <ScrollRestoration />
    </div>
  );
}

export default App;