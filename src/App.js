import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import ScrollToTop from './components/common/ScrollToTop';
import PageTransition from './components/common/PageTransition';
import Home from './pages/Home';
import './App.css';

// Lazy Load Pages
const Sermons = lazy(() => import('./pages/Sermons'));
const Events = lazy(() => import('./pages/Events'));
const Contact = lazy(() => import('./pages/Contact'));
const Admin = lazy(() => import('./pages/Admin'));
const NotFound = lazy(() => import('./pages/NotFound'));

// Mock Protected Route Wrapper for Admin Dashboard
const ProtectedRoute = ({ children }) => {
  const isAuthenticated = true;
  if (!isAuthenticated) {
    return <Navigate to="/contact" replace />;
  }
  return children;
};

// Global Loading Spinner for lazy-loading transition
const LoadingSpinner = () => (
  <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '60vh' }}>
    <div className="spinner">Loading Content...</div>
  </div>
);

// AnimatedRoutes component handles the routing so we can use useLocation
const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageTransition><Home /></PageTransition>} />
        <Route path="/sermons" element={<PageTransition><Sermons /></PageTransition>} />
        <Route path="/events" element={<PageTransition><Events /></PageTransition>} />
        <Route path="/contact" element={<PageTransition><Contact /></PageTransition>} />

        {/* Protected Route for Admin */}
        <Route
          path="/admin/*"
          element={
            <ProtectedRoute>
              <PageTransition><Admin /></PageTransition>
            </ProtectedRoute>
          }
        />

        {/* 404 Catch-All Route */}
        <Route path="*" element={<PageTransition><NotFound /></PageTransition>} />
      </Routes>
    </AnimatePresence>
  );
};

// LayoutWrapper intercepts the route to hide header/footer on admin pages
const LayoutWrapper = () => {
  const location = useLocation();
  const isAdminRoute = location.pathname.startsWith('/admin');

  return (
    <div className={`App ${isAdminRoute ? 'admin-mode' : ''}`}>
      {!isAdminRoute && <Header />}
      <main>
        <Suspense fallback={<LoadingSpinner />}>
          <AnimatedRoutes />
        </Suspense>
      </main>
      {!isAdminRoute && <Footer />}
    </div>
  );
};

function App() {
  return (
    <Router>
      <ScrollToTop />
      <LayoutWrapper />
    </Router>
  );
}

export default App;
