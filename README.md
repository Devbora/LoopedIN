```markdown
# 🌐 LoopedIN: Community Finder & Builder  

![JavaScript](https://img.shields.io/badge/Language-JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black) 
![React](https://img.shields.io/badge/Frontend-React-61DAFB?style=for-the-badge&logo=react&logoColor=black) 
![Node.js](https://img.shields.io/badge/Backend-Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white) 
![Express](https://img.shields.io/badge/API-Express-000000?style=for-the-badge&logo=express&logoColor=white) 
![MongoDB](https://img.shields.io/badge/Database-MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white)  

![Python](https://img.shields.io/badge/ML-Python-3776AB?style=for-the-badge&logo=python&logoColor=yellow) 
![Flask](https://img.shields.io/badge/API-Flask-000000?style=for-the-badge&logo=flask&logoColor=white) 
![Vercel](https://img.shields.io/badge/Deploy-Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white) 
![Figma](https://img.shields.io/badge/Design-Figma-F24E1E?style=for-the-badge&logo=figma&logoColor=white)  

---

## 🧭 Vision  

"Communities thrive when people connect over shared passions. LoopedIN brings people together by helping them discover, join, and build communities that match their interests — from hiking to skateboarding and beyond."  

---

## 📌 The Problem  

👤 *Disconnected People* – Many individuals struggle to find like-minded people in their area.  

🌍 *Scattered Communities* – Hobbyist groups are often fragmented across different platforms with no central hub.  

---

## ✨ The Solution: LoopedIN  

An all-in-one **community finder and builder platform** where users can:  

- ✅ *Discover Communities* → Search by interest (skateboarding, hiking, coding, etc.)  
- ✅ *Join Groups* → Connect with like-minded individuals instantly  
- ✅ *Create Communities* → Build your own groups with custom rules and events  
- ✅ *Engage & Collaborate* → Share posts, updates, and resources  

⚡ Inclusive • Social • User-driven ⚡  

---

## 🔧 How It Works  

LoopedIN uses the **MERN stack** for scalable performance, enhanced with **Flask microservices** for future AI-powered features.  

```text
+--------------------------+
|       User Frontend      |
|     (React + Vercel)     |
+--------------+-----------+
               | (API Requests)
               v
+--------------------------+
|   Node.js + Express API  |
|   (Auth, Communities)    |
+--------------+-----------+
               | (Database Queries)
               v
+--------------------------+
|        MongoDB           |
+--------------------------+

[Optional Services]
   ↳ Flask API (Python ML) → Recommendation Engine (future expansion)
```

---

## 🛠 Tech Stack

### 🎨 Frontend

* *React.js* ⚛ – Interactive, modern UI
* *Figma* 🎨 – UI/UX wireframing

### ⚙ Backend

* *Node.js + Express* 🚀 – REST API & server logic
* *Flask (Python)* 🐍 – Optional microservices for AI/ML

### 🗄 Database

* *MongoDB* 🍃 – Flexible NoSQL database

### 🚀 Deployment

* *Vercel* ▲ – Hosting frontend + backend
* *Mongo Atlas* ☁ – Cloud database

---

## 📦 Getting Started

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/Devbora/LoopedIN.git
cd LoopedIN
```

### 2️⃣ Install Dependencies

```bash
# Backend
cd backend
npm install

# Frontend
cd ../frontend
npm install
```

### 3️⃣ Environment Variables

Create a `.env` file in both `backend/` and `frontend/`:

```bash
MONGO_URI=your_mongodb_connection
JWT_SECRET=your_secret_key
VERCEL_URL=your_project_url
```

### 4️⃣ Run the Application

```bash
# Start backend
cd backend
npm run dev

# Start frontend
cd ../frontend
npm start
```

App will be live at: **[http://localhost:3000](http://localhost:3000)**

---

## 🔌 API Usage Examples

### Create a Community
```bash
POST /api/communities/create
Content-Type: application/json
Authorization: Bearer <token>

{
  "name": "Seattle Hikers",
  "description": "Weekly hiking adventures around Seattle",
  "category": "Outdoors",
  "tags": ["hiking", "nature", "adventure"]
}
```

### Join a Community
```bash
POST /api/communities/join
Content-Type: application/json
Authorization: Bearer <token>

{
  "communityId": "community_id_here"
}
```

### List Communities
```bash
GET /api/communities?category=Outdoors&limit=10
Authorization: Bearer <token>
```

### Search Communities
```bash
GET /api/communities/search?q=hiking&location=Seattle
Authorization: Bearer <token>
```

### Get Community Details
```bash
GET /api/communities/:communityId
Authorization: Bearer <token>
```

---

## 📂 Project Structure

```text
📦 LoopedIN/
 ├── 📂 frontend/          # React.js app
 │   ├── 📂 src/
 │   │   ├── 📂 components/
 │   │   ├── 📂 pages/
 │   │   ├── 📂 hooks/
 │   │   └── 📂 utils/
 │   ├── 📜 package.json
 │   └── 📜 .env
 │
 ├── 📂 backend/           # Node.js + Express API
 │   ├── 📂 routes/
 │   │   ├── auth.js
 │   │   ├── communities.js
 │   │   └── users.js
 │   ├── 📂 models/
 │   │   ├── User.js
 │   │   └── Community.js
 │   ├── 📂 middleware/
 │   │   └── auth.js
 │   ├── 📜 server.js
 │   ├── 📜 package.json
 │   └── 📜 .env
 │
 ├── 📂 flask-service/     # Python (Flask) services (future)
 │   ├── 📜 app.py
 │   ├── 📜 requirements.txt
 │   └── 📜 .env
 │
 └── 📜 README.md
```

---

## 🧑‍💻 Contributors

👨‍💻 *Dev Bora*
👨‍💻 *Piyush Varma*
👨‍💻 *Vibhav S chaudhary*
👨‍💻 *Sameehan Trivedi*

---

## 📜 License

This project is licensed under the **MIT License**.

![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)
```
