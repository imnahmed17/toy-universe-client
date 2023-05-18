import { Outlet } from 'react-router-dom';
import NavBar from './pages/Shared/NavBar';
import Footer from './pages/Shared/Footer';

function App() {
  return (
    <div>
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;