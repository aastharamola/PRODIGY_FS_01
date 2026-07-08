import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { FiUser, FiMail, FiShield, FiClock } from 'react-icons/fi';

const Dashboard = () => {
  const { user } = useContext(AuthContext);

  if (!user) return null;

  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Dashboard</h1>
        <p className="text-gray-600 dark:text-gray-400 mt-2">Welcome back, {user.name}!</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="card">
          <h2 className="text-xl font-semibold mb-6 flex items-center text-gray-900 dark:text-white">
            <FiUser className="mr-2 text-primary-500" /> User Information
          </h2>
          <div className="space-y-4">
            <div className="flex items-center p-4 bg-gray-50 dark:bg-dark-bg rounded-lg">
              <FiUser className="text-gray-400 w-5 h-5 mr-3" />
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400">Name</p>
                <p className="font-medium text-gray-900 dark:text-white">{user.name}</p>
              </div>
            </div>
            
            <div className="flex items-center p-4 bg-gray-50 dark:bg-dark-bg rounded-lg">
              <FiMail className="text-gray-400 w-5 h-5 mr-3" />
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400">Email Address</p>
                <p className="font-medium text-gray-900 dark:text-white">{user.email}</p>
              </div>
            </div>

            <div className="flex items-center p-4 bg-gray-50 dark:bg-dark-bg rounded-lg">
              <FiShield className="text-gray-400 w-5 h-5 mr-3" />
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400">Account Role</p>
                <p className="font-medium text-gray-900 dark:text-white capitalize">
                  {user.role} 
                  {user.role === 'admin' && <span className="ml-2 text-xs bg-primary-100 text-primary-800 dark:bg-primary-900/30 dark:text-primary-300 px-2 py-0.5 rounded-full">Elevated</span>}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="card bg-gradient-to-br from-primary-600 to-primary-800 text-white border-none">
          <h2 className="text-xl font-semibold mb-4 text-white">Getting Started</h2>
          <p className="text-primary-100 mb-6 leading-relaxed">
            You've successfully authenticated! You can now explore the protected routes and update your profile information.
          </p>
          <div className="space-y-3">
            <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
              <h4 className="font-medium mb-1 flex items-center"><FiClock className="mr-2" /> Session Active</h4>
              <p className="text-sm text-primary-100">Your JWT token is securely stored in an HTTP-only cookie.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
