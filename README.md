# 📝 Task Manager App - MERN Stack

A **full-stack Task Manager** application built using **MongoDB**, **Express.js**, **React**, and **Node.js (MERN)** that allows users to **create**, **view**, **update**, **delete**, and **filter** their daily tasks with a clean and modern UI.

---

## ✨ Core Features

- ✅ **Create Tasks:** Add new tasks with a title and description  
- ✅ **View Tasks:** Responsive card layout for all tasks  
- ✅ **Update Tasks:** Edit title, description, or status easily  
- ✅ **Delete Tasks:** Remove tasks with confirmation  
- ✅ **Filter Tasks:** Filter by status — *All, Pending, Completed*  
- ✅ **Mark Status:** Mark tasks as *Completed* or *Pending*  
- ✅ **Form Validation:** Required field checks  
- ✅ **Responsive Design:** Works seamlessly on desktop & mobile  
- ✅ **Modern UI:** Built with Tailwind CSS  
- ✅ **Toast Notifications:** Instant feedback for user actions  
- ✅ **Visual Indicators:** Color-coded status labels  

---

## 🌟 Bonus Features

- 🔐 **Simple Login Screen:** UI-level authentication (no backend auth)  
- ⚙️ **React Context API:** Global state management for tasks  
- ✨ **Smooth Animations:** Fade effects & transitions for better UX  

---

## 🧩 Tech Stack

### **Frontend**
- ⚛️ React (v19.1.1)
- ⚡ Vite (build tool)
- 🎨 Tailwind CSS (v4.1.16)
- 🔗 Axios (v1.13.1)
- 🔔 React Toastify (v11.0.5)
- 💎 React Icons (v5.5.0)

### **Backend**
- 🟢 Node.js  
- 🚀 Express.js (v5.1.0)  
- 🍃 MongoDB (NoSQL Database)  
- 🔗 Mongoose (v8.19.2)  
- 🌍 CORS (v2.8.5)  
- 🔐 dotenv (v17.2.3)  

---

## ⚙️ Prerequisites

Make sure you have the following installed:
- [Node.js (v16+)](https://nodejs.org/)
- npm or yarn  
- [MongoDB](https://www.mongodb.com/atlas/database) (Atlas or local)
- [Git](https://git-scm.com/)

---

## 🚀 Installation & Setup

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/komalshukla2005/Task_Manager_App.git
cd Task_Manager_App

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
