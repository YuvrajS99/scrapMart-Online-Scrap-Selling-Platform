# ♻️ ScrapMart — Online Scrap Selling Platform

ScrapMart is a full-stack web application that connects households and businesses with verified scrap buyers. Users can list scrap materials, track submissions, and sell efficiently while promoting sustainability and recycling.

🌐 **Live Demo:**  
https://scrap-mart-online-scrap-selling-pla.vercel.app/

---

# 🚀 Features

### 👤 User Features
- User Registration & Login (JWT Authentication)
- Create Scrap Listings
- View Submitted Scrap Listings
- Role-based Dashboard (User / Buyer / Admin)

### 🛒 Buyer Features
- Browse Scrap Listings
- Connect with Sellers
- Manage Purchase Workflow

### 🛠️ Admin Features
- Monitor Users
- Manage Scrap Listings
- Platform Administration

### 🌐 General Features
- Responsive UI
- Secure Authentication
- REST API Integration
- Role-Based Access Control

---

# 🧑‍💻 Tech Stack

### Frontend
- React (Vite)
- Tailwind CSS
- React Router DOM
- Axios
- React Toastify
- Framer Motion

### Backend
- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- JWT Authentication
- bcrypt.js

---

# 📂 Project Structure


ScrapMart
│
├── backend
│ ├── controllers
│ ├── models
│ ├── routes
│ └── server.js
│
├── frontend
│ ├── public
│ ├── src
│ └── package.json
│
└── README.md


---

# ⚙️ Installation & Setup

## 1️⃣ Clone Repository


git clone https://github.com/YuvrajS999/scrapMart-Online-Scrap-Selling-Platform.git

cd scrapMart-Online-Scrap-Selling-Platform


---

# Backend Setup


cd backend
npm install


Create `.env` file inside backend folder


PORT=5000
MONGO_URI=your_mongodb_connection_string

JWT_SECRET=your_secret_key


Run backend server


npm start


---

# Frontend Setup


cd frontend
npm install
npm run dev


Frontend will run on


http://localhost:5173


---

# 🔐 Environment Variables

Backend requires these variables


MONGO_URI

JWT_SECRET

PORT


---

# 🌍 Deployment

Frontend deployed on


Vercel


Backend deployment planned on


Hostinger VPS


Database used


MongoDB Atlas


---

# 📈 Future Improvements

- Scrap price tracking system
- Pickup scheduling
- Buyer-Seller chat system
- Admin analytics dashboard
- Payment integration
- Location-based scrap matching

---

# 🤝 Contributing

Contributions are welcome.  
Fork the repository and create a pull request.

---
