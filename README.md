![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-47A048?style=for-the-badge&logo=mongodb&logoColor=white)
![Redux](https://img.shields.io/badge/Redux-593D88?style=for-the-badge&logo=redux&logoColor=white)
![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)
![Render](https://img.shields.io/badge/Render-46E3B7?style=for-the-badge&logo=render&logoColor=white)

# 📸 Rewind - A Full Stack MERN Memory-Sharing Platform

Rewind is a feature-rich social media application built using the MERN stack that allows users to create, share, like, and manage personal memories. The project demonstrates a modern decoupled architecture with the frontend hosted on **Vercel** and the backend API on **Render**.

---

## 🚀 Live Links
- **Live Website:** [https://rewind-topaz.vercel.app](https://rewind-topaz.vercel.app)
- **API Endpoint:** [https://rewind-api-alwp.onrender.com](https://rewind-api-alwp.onrender.com)

---

## 🏗 System Architecture & Workflow

The application follows a **Decoupled Monorepo Architecture**. The Client and Server communicate over HTTPS using RESTful principles.

### Workflow Diagram
```mermaid
graph TD
    A[User Browser] -->|React/Redux| B(Vercel Frontend)
    B -->|Axios REST Call| C(Render Backend)
    C -->|Mongoose ODM| D[(MongoDB Atlas)]
    D -->|Data Response| C
    C -->|JSON Response| B
    B -->|Update State| A
```
---
📂 Folder ArchitecturePlaintextRewind/
```Plaintext

├── client/                # React Frontend
│   ├── src/
│   │   ├── api/          # Axios service configuration
│   │   ├── actions/      # Redux Action Creators
│   │   ├── reducers/     # Redux State Logic
│   │   ├── components/   # UI Components (Material-UI)
│   │   ├── styles/       # CSS-in-JS (MUI Styles)
│   │   └── index.js      # Frontend Entry Point
│   └── package.json
├── server/                # Node.js/Express Backend
│   ├── controllers/      # Request Handling Logic
│   ├── models/           # Mongoose Data Schemas
│   ├── routes/           # Express API Endpoints
│   ├── .env              # Environment Variables
│   └── index.js          # Backend Entry Point
└── README.md
```

---
## 📊 Data Models (Entity Schema)
```mermaid
classDiagram
    class PostMessage {
        +ObjectId _id
        +String title
        +String message
        +String creator
        +String[] tags
        +String selectedFile
        +Number likeCount
        +Date createdAt
    }
```
  Note for PostMessage "Base64 encoded string is used \n for the 'selectedFile' fie
  ---

 
