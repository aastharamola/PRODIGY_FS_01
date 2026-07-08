import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] text-center">
      <h1 className="text-9xl font-black text-gray-200 dark:text-gray-800">404</h1>
      <p className="text-2xl font-bold text-gray-900 dark:text-white mt-4">Page not found</p>
      <p className="text-gray-500 dark:text-gray-400 mt-2 mb-8 max-w-md mx-auto">
        Sorry, we couldn't find the page you're looking for. It might have been moved or doesn't exist.
      </p>
      <Link to="/" className="btn-primary">
        Go back home
      </Link>
    </div>
  );
};

export default NotFound;
