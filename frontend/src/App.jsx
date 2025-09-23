import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AppProvider } from './state/AppContext';
import Navbar from './components/Navbar';
import ProtectedRoute from './components/ProtectedRoute';
import GuestRoute from './components/GuestRoute';
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/Auth/LoginPage';
import Dashboard from './pages/Dashboard';
import AptitudeQuiz from './pages/AptitudeQuiz';
import SignUpPage from './pages/Auth/SignUpPage';

function App() {
  return (
    <AppProvider>
      <Router>
        <div className="min-h-screen bg-gray-50">
          <Navbar />
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route 
              path="/signup" 
              element={
                <GuestRoute>
                  <SignUpPage />
                </GuestRoute>
              } 
            />
            <Route 
              path="/login" 
              element={
                <GuestRoute>
                  <LoginPage />
                </GuestRoute>
              } 
            />
            <Route 
              path="/dashboard" 
              element={
                <ProtectedRoute>
                  <Dashboard />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/quiz" 
              element={
                <ProtectedRoute>
                  <AptitudeQuiz />
                </ProtectedRoute>
              } 
            />
          </Routes>
        </div>
      </Router>
    </AppProvider>
  );
}

export default App;
