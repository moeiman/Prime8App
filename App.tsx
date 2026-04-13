
import React, { useState, createContext, useContext, useEffect } from 'react';
import { HashRouter, Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import Landing from './screens/Landing';
import Dashboard from './screens/Dashboard';
import ExploreMap from './screens/ExploreMap';
import Feed from './screens/Feed';
import StudioDetail from './screens/StudioDetail';
import Rewards from './screens/Rewards';
import Profile from './screens/Profile';
import Onboarding from './screens/Onboarding';
import BookingConfirmation from './screens/BookingConfirmation';
import PartnerDashboard from './screens/PartnerDashboard';
import PartnerScanner from './screens/PartnerScanner';
import PartnerSignup from './screens/PartnerSignup';
import Referral from './screens/Referral';
import { MOCK_USER } from './constants';
import { Booking } from './types';

interface GlobalState {
  points: number;
  bookings: Booking[];
  addBooking: (booking: Booking) => void;
  updatePoints: (pts: number) => void;
  isPartnerMode: boolean;
  togglePartnerMode: () => void;
}

const GlobalContext = createContext<GlobalState | undefined>(undefined);

export const useGlobalState = () => {
  const context = useContext(GlobalContext);
  if (!context) throw new Error('useGlobalState must be used within a GlobalProvider');
  return context;
};

const Navigation: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { isPartnerMode } = useGlobalState();

  const navItems = isPartnerMode ? [
    { label: 'Dashboard', icon: 'dashboard', path: '/partner' },
    { label: 'Scanner', icon: 'qr_code_scanner', path: '/scanner' },
    { label: 'Studio', icon: 'storefront', path: '/profile' }
  ] : [
    { label: 'Home', icon: 'home', path: '/dashboard' },
    { label: 'Explore', icon: 'map', path: '/map' },
    { label: 'Community', icon: 'layers', path: '/feed' },
    { label: 'Rewards', icon: 'auto_awesome', path: '/rewards' },
    { label: 'Profile', icon: 'person', path: '/profile' }
  ];

  const hideNavPaths = ['/', '/onboarding', '/confirmation'];
  if (hideNavPaths.includes(location.pathname)) return null;

  return (
    <nav className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[430px] h-20 ios-blur bg-background-dark/95 border-t border-white/5 px-6 flex justify-around items-center z-[60] shadow-[0_-10px_40px_rgba(0,0,0,0.5)]">
      {navItems.map((item) => {
        const isActive = location.pathname === item.path;
        return (
          <button
            key={item.path}
            onClick={() => navigate(item.path)}
            className={`flex flex-col items-center gap-1 transition-all duration-300 ${
              isActive ? 'text-primary' : 'text-slate-500 hover:text-slate-300'
            }`}
          >
            <span className={`material-icons text-[24px] ${isActive ? 'scale-110 drop-shadow-[0_0_8px_rgba(25,120,229,0.5)]' : ''}`}>{item.icon}</span>
            <span className="text-[8px] font-black uppercase tracking-widest">{item.label}</span>
          </button>
        );
      })}
    </nav>
  );
};

const AppContent: React.FC = () => {
  const location = useLocation();
  const { isPartnerMode } = useGlobalState();
  const isLanding = location.pathname === '/';

  return (
    <div className={`min-h-screen bg-[#05070a] flex justify-center ${isLanding ? 'items-stretch' : 'items-start'}`}>
      <main className={`w-full min-h-screen relative overflow-x-hidden bg-background-dark ${
        isLanding 
          ? 'max-w-none' 
          : 'max-w-[430px] border-x border-white/5 pb-24 shadow-[0_0_100px_rgba(0,0,0,0.8)]'
      }`}>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/onboarding" element={<Onboarding />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/map" element={<ExploreMap />} />
          <Route path="/feed" element={<Feed />} />
          <Route path="/studio/:id" element={<StudioDetail />} />
          <Route path="/rewards" element={<Rewards />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/confirmation" element={<BookingConfirmation />} />
          <Route path="/partner" element={<PartnerDashboard />} />
          <Route path="/partner-signup" element={<PartnerSignup />} />
          <Route path="/scanner" element={<PartnerScanner />} />
          <Route path="/referral" element={<Referral />} />
        </Routes>
        <Navigation />
        
        {!isLanding && (
          <div className="fixed top-4 left-1/2 -translate-x-1/2 px-4 py-1.5 bg-slate-900/80 ios-blur rounded-full flex items-center gap-2 z-[70] pointer-events-none border border-white/10 shadow-2xl">
            <div className={`w-1.5 h-1.5 rounded-full ${isPartnerMode ? 'bg-primary animate-pulse' : 'bg-neon-green animate-pulse'}`}></div>
            <span className="text-[8px] font-black text-white/80 uppercase tracking-[0.2em]">
              {isPartnerMode ? 'STUDIO PARTNER' : 'PRIME8 MEMBER'}
            </span>
          </div>
        )}
      </main>
    </div>
  );
};

const App: React.FC = () => {
  const [points, setPoints] = useState<number>(() => {
    const saved = localStorage.getItem('p8_points');
    return saved ? parseInt(saved) : MOCK_USER.points;
  });

  const [bookings, setBookings] = useState<Booking[]>(() => {
    const saved = localStorage.getItem('p8_bookings');
    return saved ? JSON.parse(saved) : [];
  });

  const [isPartnerMode, setIsPartnerMode] = useState<boolean>(() => {
    return localStorage.getItem('p8_partner_mode') === 'true';
  });

  const addBooking = (booking: Booking) => {
    const newBookings = [booking, ...bookings];
    setBookings(newBookings);
    const newPoints = points + (booking.pointsEarned || 0);
    setPoints(newPoints);
    
    localStorage.setItem('p8_bookings', JSON.stringify(newBookings));
    localStorage.setItem('p8_points', newPoints.toString());
  };

  const updatePoints = (pts: number) => {
    const newPoints = points + pts;
    setPoints(newPoints);
    localStorage.setItem('p8_points', newPoints.toString());
  };

  const togglePartnerMode = () => {
    const newValue = !isPartnerMode;
    setIsPartnerMode(newValue);
    localStorage.setItem('p8_partner_mode', newValue.toString());
  };

  // Sync state across tabs
  useEffect(() => {
    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === 'p8_points' && e.newValue) setPoints(parseInt(e.newValue));
      if (e.key === 'p8_bookings' && e.newValue) setBookings(JSON.parse(e.newValue));
      if (e.key === 'p8_partner_mode' && e.newValue) setIsPartnerMode(e.newValue === 'true');
    };
    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, []);

  return (
    <GlobalContext.Provider value={{ points, bookings, addBooking, updatePoints, isPartnerMode, togglePartnerMode }}>
      <HashRouter>
        <AppContent />
      </HashRouter>
    </GlobalContext.Provider>
  );
};

export default App;
