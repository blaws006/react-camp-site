import Header from './components/Header';
import Footer from './components/Footer';
import CampsitesDirectoryPage from './pages/CampsitesDirectoryPage';
import HomePage from './pages/HomePage';
import ContactPage from './pages/ContactPage';
import CampsiteDetailPage from './pages/CampsiteDetailPage';
import { Route, Routes } from 'react-router-dom'
import AboutPage from './pages/AboutPage';
import './App.css';

function App() {
 
  return (
    <div className="App">
      <Header />
       <Routes>
          <Route path='/' element={<HomePage/>} />
          <Route path='contact' element={<ContactPage/>} />
          <Route path='directory' element={<CampsitesDirectoryPage/>} />
          <Route path='directory/:campsiteId' element={<CampsiteDetailPage/>} />
          <Route path='about' element={<AboutPage/>} />
        </Routes>
      <Footer />
    </div>
  );
}

export default App;
