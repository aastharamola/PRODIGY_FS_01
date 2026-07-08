import { useContext, useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import { FiSun, FiMoon, FiLogOut, FiUser, FiSettings, FiShield } from 'react-icons/fi';

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem('theme') === 'dark' ||
    (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
  );

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  const handleLogout = async () => {
    await logout();
    navigate('/login');
  };

  return (
    <nav className="bg-white dark:bg-dark-card border-b border-gray-100 dark:border-gray-800 transition-colors duration-200 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary-500 to-primary-700">
              AuthFlow
            </Link>
          </div>
          
          <div className="flex items-center space-x-4">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 text-gray-500 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400 transition-colors rounded-full hover:bg-gray-100 dark:hover:bg-gray-800"
              aria-label="Toggle Dark Mode"
            >
              {darkMode ? <FiSun className="w-5 h-5" /> : <FiMoon className="w-5 h-5" />}
            </button>

            {user ? (
              <div className="flex items-center space-x-4">
                <div className="hidden sm:flex items-center space-x-4 mr-2">
                  <Link to="/dashboard" className="text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 font-medium">Dashboard</Link>
                  <Link to="/profile" className="text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 font-medium">Profile</Link>
                  {user.role === 'admin' && (
                    <Link to="/admin" className="text-primary-600 dark:text-primary-400 font-medium flex items-center">
                      <FiShield className="mr-1" /> Admin
                    </Link>
                  )}
                </div>
                <div className="relative group">
                  <button className="flex items-center justify-center w-10 h-10 rounded-full bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 font-bold border-2 border-primary-200 dark:border-primary-800">
                    {user.name.charAt(0).toUpperCase()}
                  </button>
                  <div className="absolute right-0 w-48 mt-2 origin-top-right bg-white dark:bg-dark-card border border-gray-100 dark:border-gray-700 divide-y divide-gray-100 dark:divide-gray-800 rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                    <div className="px-4 py-3">
                      <p className="text-sm leading-5 text-gray-900 dark:text-white">Signed in as</p>
                      <p className="text-sm font-medium leading-5 text-gray-900 dark:text-gray-300 truncate">{user.email}</p>
                    </div>
                    <div className="py-1">
                      <Link to="/profile" className="flex px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 items-center">
                        <FiUser className="mr-2" /> Profile
                      </Link>
                    </div>
                    <div className="py-1">
                      <button onClick={handleLogout} className="flex w-full px-4 py-2 text-sm text-red-600 dark:text-red-400 hover:bg-gray-100 dark:hover:bg-gray-800 items-center">
                        <FiLogOut className="mr-2" /> Sign out
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="flex items-center space-x-3">
                <Link to="/login" className="text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 font-medium">Log in</Link>
                <Link to="/register" className="btn-primary py-1.5 px-4">Sign up</Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
