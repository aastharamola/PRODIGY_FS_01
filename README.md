# User Authentication System

A production-ready Full Stack Web Application that allows users to register, log in, access protected routes, and manage authentication securely. Built with the MERN stack (MongoDB, Express, React, Node.js).

## Features

- **User Registration & Login**: Secure authentication flow using JWT and HTTP-only cookies.
- **Role-Based Access Control**: Differentiates between regular `user` and `admin` roles.
- **Protected Routes**: Frontend and backend protection for secure endpoints.
- **Premium UI**: Responsive, beautiful interface built with Tailwind CSS and dark mode support.
- **Security**: Implementation of bcrypt, Helmet, CORS, and Express Rate Limiter.
- **Profile Management**: Users can update their names and passwords securely.

## Tech Stack

### Frontend
- React.js (Vite)
- React Router DOM
- Axios
- Tailwind CSS
- Context API
- React Toastify
- React Icons

### Backend
- Node.js
- Express.js
- MongoDB with Mongoose
- JSON Web Token (JWT)
- bcryptjs
- express-validator
- cookie-parser

## Folder Structure

```
├── backend/
│   ├── config/          # Database configuration
│   ├── controllers/     # Route logic
│   ├── middleware/      # Authentication & error handlers
│   ├── models/          # Mongoose schemas
│   ├── routes/          # Express routes
│   ├── utils/           # Helper functions (JWT generator)
│   ├── validators/      # Express-validator schemas
│   ├── app.js           # Express app setup
│   ├── server.js        # Server entry point
│   └── package.json
└── frontend/
    ├── src/
    │   ├── api/         # Axios configuration
    │   ├── components/  # Reusable UI components
    │   ├── context/     # Auth Context for global state
    │   ├── layouts/     # Main page layouts
    │   ├── pages/       # Application pages
    │   ├── App.jsx      # Routing setup
    │   └── main.jsx     # React entry point
    ├── tailwind.config.js
    └── package.json
```

## Installation

1. **Clone the repository** (if applicable):
   ```bash
   git clone <repository-url>
   cd FS_01
   ```

2. **Install Backend Dependencies**:
   ```bash
   cd backend
   npm install
   ```

3. **Install Frontend Dependencies**:
   ```bash
   cd frontend
   npm install
   ```

## Environment Variables

Create a `.env` file in the `backend` directory and add the following variables:

```env
NODE_ENV=development
PORT=5000
MONGO_URI=mongodb://localhost:27017/auth_system
JWT_SECRET=your_super_secret_jwt_key
JWT_EXPIRE=30d
```

> Make sure you have a local MongoDB instance running, or replace `MONGO_URI` with a MongoDB Atlas connection string.

## Running the Application

1. **Start the Backend Server**:
   ```bash
   cd backend
   npm run dev
   ```
   The backend will start on `http://localhost:5000`.

2. **Start the Frontend Application**:
   Open a new terminal window/tab:
   ```bash
   cd frontend
   npm run dev
   ```
   The frontend will start on `http://localhost:5173`.

## API Documentation

### Auth Routes (`/api/auth`)
- `POST /register`: Register a new user
- `POST /login`: Authenticate user & get token
- `POST /logout`: Clear cookie and logout
- `GET /me`: Get current logged in user (Protected)

### User Routes (`/api/users`)
- `PUT /profile`: Update user profile (Protected)
- `PUT /password`: Update user password (Protected)

### Admin Routes (`/api/admin`)
- `GET /users`: Get all users (Admin only)
- `DELETE /users/:id`: Delete a user (Admin only)

## Live Demo & Video

- **Live Demo Link:** [Insert Live Demo Link Here]
- **Video Walkthrough:** [Insert YouTube/Loom Video Link Here]

## Screenshots

### 1. Sign In / Registration
![Sign In / Registration Page](https://via.placeholder.com/800x450.png?text=Sign+In+Page+Screenshot+Here)
*The secure login and registration form with validation.*

### 2. User Dashboard
![User Dashboard](https://via.placeholder.com/800x450.png?text=User+Dashboard+Screenshot+Here)
*Protected dashboard accessible only to authenticated users, showing profile details.*

### 3. Admin / User Store Dashboard
![Admin Dashboard](https://via.placeholder.com/800x450.png?text=Admin+Dashboard+Screenshot+Here)
*Role-based Admin view allowing management and deletion of registered users.*
