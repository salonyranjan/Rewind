# 📸 Rewind (Flashback)

**Rewind** is a high-performance, immersive MERN stack application designed to archive and visualize digital footprints. By combining a robust backend with a cinematic 3D frontend powered by **Three.js** and **GSAP**, Rewind transforms static data into an interactive journey.

---

## 🚀 Key Features
* **3D Interactive UI:** Cinematic transitions and data visualization using Three.js and GSAP.
* **Full-Stack Depth:** Seamless integration between React, Node.js, and MongoDB.
* **State Management:** Optimized data flow using Redux Toolkit.
* **Secure Auth:** JWT-based authentication with protected API endpoints.
* **Responsive Design:** High-fidelity experience optimized for both mobile and desktop.

---

## 🏗 Project Architecture
The application utilizes a decoupled **Client-Server Architecture** to ensure independent scalability and clean separation of concerns.

```mermaid
graph TD
    User((User)) -->|Interacts| Frontend[React + Three.js/GSAP]
    Frontend -->|API Requests| Backend[Node.js + Express]
    Backend -->|Auth/Logic| Middleware[JWT & Express Validator]
    Middleware -->|Queries| DB[(MongoDB Atlas)]
    Backend -->|Asset Hosting| Storage[Cloudinary/AWS S3]

    ```
 ---

## 🔄 Workflow Diagram
This diagram outlines the logic flow from user authentication to content rendering.

```mermaid
sequenceDiagram
    participant U as User
    participant F as Frontend (React)
    participant B as Backend (Express)
    participant D as Database (MongoDB)

    U->>F: Opens App (3D Intro)
    F->>B: GET /api/session
    B->>F: Session Valid/Invalid
    U->>F: Uploads "Memory"
    F->>B: POST /api/memories (Payload)
    B->>D: Store Metadata
    D-->>B: Success Response
    B-->>F: Update Redux Store
    F->>U: Render New 3D Element

    ```
 ---

## 📊 Data Models (ER Diagram)
The database schema is designed for relational integrity within a NoSQL structure.

```mermaid
erDiagram
    USER ||--o{ MEMORY : creates
    USER {
        string id PK
        string username
        string email
        string password
    }
    MEMORY {
        string id PK
        string userId FK
        string title
        string description
        string mediaUrl
        datetime createdAt
    }
    ```
---

## 🌊 Dataflow Diagram (DFD - Level 1)
Tracking how data moves through the system's processes.

```mermaid
graph LR
    subgraph Input
    U[User]
    end

    subgraph Processes
    P1[Auth Handler]
    P2[Data Processor]
    P3[3D Engine]
    end

    subgraph Storage
    S1[(User DB)]
    S2[(Media Store)]
    end

    U -->|Credentials| P1
    P1 <--> S1
    U -->|Metadata| P2
    P2 --> S2
    S2 --> P3
    P3 -->|Interactive UI| U
```
---

## 🛠 Tech Stack
Frontend: React.js, Three.js, GSAP, Tailwind CSS, Redux Toolkit.

Backend: Node.js, Express.js.

Database: MongoDB (Mongoose).

Deployment: Docker, GitHub Actions, AWS EC2.

---

## ⚙️ Installation & Setup
Clone the repository:

```bash
git clone [https://github.com/salonyranjan/Rewind.git](https://github.com/salonyranjan/Rewind.git)
cd Rewind
```
### Install Dependencies:

```bash
# Install root and backend dependencies
npm install
```
```bash
# Install frontend dependencies
cd client
npm install
```
# Configure Environment Variables:
Create a .env file in the root:
```bash
Code snippet
PORT=5000
MONGO_URI=your_mongodb_connection_string
```
Run Development Server:

```bash
npm run dev
```
---

## 🤝 Contributing
Contributions, issues, and feature requests are welcome! 
Feel free to check the [issues page](link-to-issues).

---

## 💖 Support
If you find this project helpful, consider giving it a ⭐ or sponsoring the project!

---