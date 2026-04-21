# 🧑‍💻 User CRUD Application (MERN Stack)

A full-stack **User Management System** built using the **MERN Stack (MongoDB, Express.js, React.js, Node.js)**.
This application allows users to perform complete **CRUD operations (Create, Read, Update, Delete)** with a responsive UI.

---

## 🚀 Features

* ➕ Add New User
* 📋 View All Users
* ✏️ Update User Details
* ❌ Delete User
* 🔍 Form Validation
* 🔔 Toast Notifications
* 📱 Responsive Design

---

## 🛠️ Tech Stack

### Frontend

* React.js
* Axios
* Bootstrap / Tailwind CSS
* React Toastify

### Backend

* Node.js
* Express.js

### Database

* MongoDB (Mongoose)

---

## 📂 Project Structure

```id="p6akz8"
UserCrud/
│
├── client/        # React Frontend
├── server/        # Node.js Backend
├── screenshots/   # UI Images (optional)
└── README.md
```

---

## ⚙️ Installation & Setup

### 1️⃣ Clone Repository

```bash id="4cw6cb"
git clone https://github.com/sagarkunal/UserCrud-.git
cd UserCrud
```

---

### 2️⃣ Setup Backend

```bash id="sb4hjp"
cd server
npm install
```

Create a `.env` file in **server/**:

```id="1c0g8b"
PORT=5000
MONGO_URI=your_mongodb_connection_string
```

Run backend:

```bash id="7skl0g"
npm run dev
```

---

### 3️⃣ Setup Frontend

```bash id="y6l2g8"
cd client
npm install
npm start
```

---

## 🌐 API Endpoints

| Method | Endpoint   | Description     |
| ------ | ---------- | --------------- |
| GET    | /users     | Get all users   |
| POST   | /users     | Create new user |
| PUT    | /users/:id | Update user     |
| DELETE | /users/:id | Delete user     |

---

## 📸 Screenshots

*Add your project screenshots here for better presentation*

---

## 🚀 Deployment

* Frontend: Vercel / Netlify
* Backend: Render / Railway
* Database: MongoDB Atlas

---

## 🎯 Future Improvements

* 🔐 Authentication (Login/Register)
* 🔎 Search & Filter Users
* 📊 Pagination
* 🌙 Dark Mode

---

## 👨‍💻 Author

**Kunal Sagar**
📩 [kunalsagar456@gmail.com](mailto:kunalsagar456@gmail.com)

---

## ⭐ Support

If you like this project, please give it a ⭐ on GitHub!

---
