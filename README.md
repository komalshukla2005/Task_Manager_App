Task Manager App - MERN Stack
A full-stack Task Manager application built with MongoDB, Express.js, React, and Node.js that allows users to create, view, update, delete, and filter their daily tasks with a clean, modern UI.

✨ Features
Core Features
✅ Create new tasks with title and description
✅ View all tasks in a responsive card layout
✅ Update task details (title, description, status)
✅ Delete tasks with confirmation
✅ Filter tasks by status (All, Pending, Completed)
✅ Mark tasks as completed/pending
✅ Form validation for required fields
✅ Responsive design for desktop and mobile
✅ Modern UI with Tailwind CSS
✅ Toast notifications for user feedback
✅ Visual status indicators (color-coded)


Bonus Features Implemented
✅ Simple Login Screen - UI-level authentication screen (no backend auth)
✅ React Context API - Global state management for tasks
✅ Smooth Animations - Fade effects and transitions

Frontend

React (v19.1.1) - UI library
Vite - Build tool and development server
Tailwind CSS (v4.1.16) - Utility-first CSS framework
Axios (v1.13.1) - HTTP client for API calls
React Icons (v5.5.0) - Icon library
React Toastify (v11.0.5) - Toast notifications

Backend

Node.js - JavaScript runtime
Express.js (v5.1.0) - Web framework
MongoDB - NoSQL database
Mongoose (v8.19.2) - MongoDB object modeling
CORS (v2.8.5) - Cross-origin resource sharing
dotenv (v17.2.3) - Environment variable management


📋 Prerequisites
Before you begin, ensure you have the following installed:

Node.js (v16 or higher) - Download
npm or yarn - Comes with Node.js
MongoDB - MongoDB Atlas (cloud) or local installation
Git - Download

🚀 Installation & Setup
git clone https://github.com/yourusername/task-manager-app.git
cd task-manager-app

2. Backend Setup
# Navigate to backend directory
cd backend

# Install dependencies
npm install 

# Create .env file
touch .env

Add the following to your backend/.env file:
PORT=5000
MONGODB_URI=mongodb+srv://your-username:your-password@cluster.mongodb.net/taskmanager?retryWrites=true&w=majority
Note: Replace your-username and your-password with your MongoDB credentials.

3. Frontend Setup
# Navigate to frontend directory (from root)
cd ./frontend

# Install dependencies
npm install

# Create .env file
touch .env

▶️ Running the Application
Terminal 1 -Run Backend
Terminal 2 - Frontend


📡 API Endpoints

Method  Endpoint
GET    /api/tasks
POST   /api/tasks
PUT    /api/tasks/:id
DELETE /api/tasks/:id

🙏 Thank You
Thank you for reviewing my submission! I look forward to discussing the implementation and any feedback you may have.
