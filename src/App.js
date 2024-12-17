import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import './App.css';
import HomePage from './pages/homepage';
import ContactPage from './pages/contactpage';
import GalleryPage from './pages/gallerypage';
import AboutPage from './pages/aboutpage';
import PremiumRoom from './pages/premium-room-page';
import RoomPage from './pages/rooms-page';
import Payment from './pages/paymentpage';
import PlacesToVisitPage from './pages/placestovisitpage'
import DeluxeRoom from './pages/deluxe-room';
import CancellationPolicyPage from './pages/cancellationpolicypage';
import ServicesPage from './pages/servicespage';


function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/contact' element={<ContactPage />} />
          <Route path='/gallery' element={<GalleryPage />} />
          <Route path='/about' element={<AboutPage />} />
          <Route path="/rooms/premium-room" element={<PremiumRoom />} />
          <Route path="/rooms/deluxe-room" element={<DeluxeRoom />} />
          <Route path='/rooms' element={<RoomPage />} />
          <Route path='/payment' element={<Payment />} />
          <Route path='/places-to-visit' element={<PlacesToVisitPage />} />
          <Route path='/services' element={<ServicesPage />} />
          <Route path='/cancellation-policy' element={<CancellationPolicyPage />} />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
