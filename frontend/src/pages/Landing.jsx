import { Link } from 'react-router-dom';
import { FiShield, FiLock, FiUserCheck } from 'react-icons/fi';

const Landing = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] text-center">
      <div className="max-w-3xl space-y-8 animate-fade-in-up">
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-gray-900 dark:text-white">
          Secure Authentication <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-primary-700">Made Simple.</span>
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
          A production-ready full-stack authentication system built with the MERN stack. Features JWT, HTTP-only cookies, role-based access control, and a premium UI.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <Link to="/register" className="btn-primary w-full sm:w-auto text-lg px-8 py-3">
            Get Started
          </Link>
          <Link to="/login" className="btn-secondary w-full sm:w-auto text-lg px-8 py-3">
            Sign In
          </Link>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-24 max-w-5xl w-full">
        <div className="card text-left hover:-translate-y-1 transition-transform duration-300">
          <div className="bg-primary-100 dark:bg-primary-900/30 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
            <FiShield className="w-6 h-6 text-primary-600 dark:text-primary-400" />
          </div>
          <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">Secure by Default</h3>
          <p className="text-gray-600 dark:text-gray-400">Industry-standard security practices including bcrypt hashing, rate limiting, and HTTP-only cookies to prevent XSS.</p>
        </div>
        
        <div className="card text-left hover:-translate-y-1 transition-transform duration-300">
          <div className="bg-primary-100 dark:bg-primary-900/30 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
            <FiLock className="w-6 h-6 text-primary-600 dark:text-primary-400" />
          </div>
          <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">JWT Authentication</h3>
          <p className="text-gray-600 dark:text-gray-400">Stateless JSON Web Tokens for robust session management, stored securely without exposing tokens to client-side JS.</p>
        </div>

        <div className="card text-left hover:-translate-y-1 transition-transform duration-300">
          <div className="bg-primary-100 dark:bg-primary-900/30 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
            <FiUserCheck className="w-6 h-6 text-primary-600 dark:text-primary-400" />
          </div>
          <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">Role Based Access</h3>
          <p className="text-gray-600 dark:text-gray-400">Built-in support for different user roles (User/Admin) allowing you to easily restrict access to specific routes and features.</p>
        </div>
      </div>
    </div>
  );
};

export default Landing;
