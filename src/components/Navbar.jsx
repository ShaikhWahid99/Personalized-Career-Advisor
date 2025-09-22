import { Link, useLocation } from 'react-router-dom';
import { useAppContext } from '../state/AppContext';
import { useTranslation } from '../i18n';

const Navbar = () => {
  const { language, toggleLanguage, profile } = useAppContext();
  const t = useTranslation(language);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="bg-blue-600 text-white shadow-lg">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-xl font-bold">
            Career Advisor
          </Link>

          <div className="flex items-center space-x-6">
            {/* Navigation Links */}
            <div className="hidden md:flex items-center space-x-4">
              <Link
                to="/"
                className={`px-3 py-2 rounded transition-colors ${
                  isActive('/') ? 'bg-blue-700' : 'hover:bg-blue-500'
                }`}
              >
                {t.home}
              </Link>
              
              {profile && (
                <>
                  <Link
                    to="/dashboard"
                    className={`px-3 py-2 rounded transition-colors ${
                      isActive('/dashboard') ? 'bg-blue-700' : 'hover:bg-blue-500'
                    }`}
                  >
                    {t.dashboard}
                  </Link>
                  
                  <Link
                    to="/quiz"
                    className={`px-3 py-2 rounded transition-colors ${
                      isActive('/quiz') ? 'bg-blue-700' : 'hover:bg-blue-500'
                    }`}
                  >
                    {t.aptitudeQuiz}
                  </Link>
                </>
              )}
            </div>

            {/* Language Toggle */}
            <button
              onClick={toggleLanguage}
              className="px-3 py-2 bg-blue-500 hover:bg-blue-400 rounded transition-colors text-sm font-medium"
            >
              {language === 'en' ? 'हिं' : 'EN'}
            </button>

            {/* Profile Info */}
            {profile && (
              <div className="text-sm">
                {t.welcome}, {profile.name}
              </div>
            )}
          </div>
        </div>

        {/* Mobile Navigation */}
        {profile && (
          <div className="md:hidden mt-3 flex space-x-4">
            <Link
              to="/dashboard"
              className={`px-3 py-2 rounded transition-colors text-sm ${
                isActive('/dashboard') ? 'bg-blue-700' : 'hover:bg-blue-500'
              }`}
            >
              {t.dashboard}
            </Link>
            
            <Link
              to="/quiz"
              className={`px-3 py-2 rounded transition-colors text-sm ${
                isActive('/quiz') ? 'bg-blue-700' : 'hover:bg-blue-500'
              }`}
            >
              {t.aptitudeQuiz}
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
