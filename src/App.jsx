import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AppProvider } from './state/AppContext';
import Navbar from './components/Navbar';
import LoginPage from './pages/LoginPage';
import Dashboard from './pages/Dashboard';
import AptitudeQuiz from './pages/AptitudeQuiz';

function App() {
  return (
    <AppProvider>
      <Router>
        <div className="min-h-screen bg-gray-50">
          <Navbar />
          <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/quiz" element={<AptitudeQuiz />} />
          </Routes>
        </div>
      </Router>
    </AppProvider>
  );
}

export default App;
