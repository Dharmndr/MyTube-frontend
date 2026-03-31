# MyTube — Full Stack Video Platform

A YouTube-inspired full-stack web application where users can watch videos and admins can upload videos using YouTube links. Built with modern technologies and deployed for production use.

---

# Github Repo

 Frontend: https://github.com/Dharmndr/MyTube-frontend
 
 Backend: https://github.com/Dharmndr/MyTube-backend

---
# Live
  URL: https://my-tube-frontend-c6q7.vercel.app/

# 📌 Features

## 🔐 Authentication

* Email & Password Signup/Login
* Google Login (Firebase OAuth)
* JWT-based authentication
* Auto login using stored token

## 👤 User Features

* View all videos
* Watch videos (YouTube embed)
* Protected access (only logged-in users)

## 👑 Admin Features

* Upload videos (YouTube link)
* Add title & thumbnail
* Role-based access (Admin only)

## 🎨 UI/UX

* Dark theme (YouTube-inspired)
* Responsive design
* Smooth animations
* Toast notifications
* Loader (spinner)

---

# 🛠️ Tech Stack

## Frontend

* React.js (Vite)
* Tailwind CSS
* React Router DOM
* Axios
* Context API

## Backend

* Node.js
* Express.js

## Database

* MongoDB Atlas
* Mongoose

## Authentication

* JWT (JSON Web Token)
* bcryptjs
* Firebase Authentication (Google OAuth)

## Deployment

* Vercel (Frontend)
* Render (Backend)

---

# 📂 Folder Structure

## Backend

```
backend/
 ├── models/
 ├── routes/
 ├── middleware/
 ├── controllers/
 ├── server.js
```

## Frontend

```
frontend/
 ├── src/
 │    ├── pages/
 │    ├── components/
 │    ├── context/
 │    ├── App.jsx
 │    ├── main.jsx
```

---

# 🗄️ Database Schema

## 👤 User

* name
* email
* password (hashed)
* role (user/admin)

## 🎥 Video

* title
* youtubeLink
* thumbnail
* createdBy (User ID)

---

# 🔌 API Endpoints

## Auth

* POST `/api/auth/signup`
* POST `/api/auth/login`
* POST `/api/auth/google`
* GET `/api/auth/me`

## Video

* GET `/api/video`
* POST `/api/video/upload` (Admin only)

---
# ⚙️ Installation & Setup

---

# 1️⃣ Clone Repositories

## 🔧 Backend Repo

```bash
git clone https://github.com/Dharmndr/MyTube-backend.git
cd backend
```

## 🎨 Frontend Repo

```bash
git clone https://github.com/Dharmndr/MyTube-frontend.git
cd frontend
```

---

# 2️⃣ Backend Setup

```bash
cd backend
npm install
```

## Create `.env`

```env
PORT=5000
MONGO_URI=your_mongodb_uri
JWT_SECRET=your_secret
```

## Run Backend

```bash
npm run dev
```

👉 Backend runs on:

```
http://localhost:5000
```

---

# 3️⃣ Frontend Setup

```bash
cd frontend
npm install
```

## Create `.env`

```env
VITE_API_URL=http://localhost:5000/api
VITE_FIREBASE_API_KEY=your-api-key
VITE_FIREBASE_AUTH_DOMAIN=your-auth-domain
VITE_FIREBASE_PROJECT_ID=your-project-id

```

## Run Frontend

```bash
npm run dev
```

👉 Frontend runs on:

```
http://localhost:5173
```

---


# 🌍 Deployment

## Backend (Render)

## Frontend (Vercel)

---

# 🧠 Key Learnings

* Full-stack development (MERN)
* Authentication & authorization
* REST API design
* Role-based access control
* Deployment workflow

---

# 🤝 Contributing

Feel free to fork this repo and improve it.

---

# ⭐ If you like this project

Give it a ⭐ on GitHub!

---
