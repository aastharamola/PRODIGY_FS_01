import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const MainLayout = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-dark-bg transition-colors duration-200">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Outlet />
      </main>
      <ToastContainer position="bottom-right" theme="colored" />
      <footer className="bg-white dark:bg-dark-card border-t border-gray-100 dark:border-gray-800 py-6 text-center text-gray-500 dark:text-gray-400 text-sm transition-colors duration-200">
        &copy; {new Date().getFullYear()} AuthFlow. All rights reserved.
      </footer>
    </div>
  );
};

export default MainLayout;
