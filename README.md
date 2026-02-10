# 📅 Development Group Meeting System

A Full Stack application designed for managing and viewing team meetings.
The system allows users to filter and view scheduled meetings for specific development groups and easily book new meetings through a clean and intuitive interface.

![Project Demo](./assets/demo.gif)


## 🛠️ Tech Stack

**Client:**
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Bootstrap](https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E)

**Server & Database:**
![NodeJS](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)
![Express](https://img.shields.io/badge/Express.js-404D59?style=for-the-badge)
![MySQL](https://img.shields.io/badge/MySQL-005C84?style=for-the-badge&logo=mysql&logoColor=white)

## ✨ Key Features

- 🔍 **Smart Filtering:** View meetings filtered by specific Development Groups.
- ➕ **Schedule Meetings:** A user-friendly form to create and book new meetings.
- 🎨 **Clean UI:** Designed with Bootstrap and custom CSS for a clear and responsive user experience.
- 📱 **Dynamic View:** Real-time updates of the meeting list based on the selected group.

## 🚀 Future Improvements (Roadmap)

- [ ] Implement User Authentication (Login/Register).
- [ ] Add conflict validation (prevent double booking of the same room/time).
- [ ] Enable editing and deleting of existing meetings.

## 📸 Screenshots

|            Group Filter View            |              Add Meeting Form              |
| :-------------------------------------: | :-----------------------------------------: |
| ![Home Page](./screenshots/home-page.png) | ![Add Meeting](./screenshots/add-meeting.png) |

## ⚙️ Installation & Setup

To run this project locally, follow these steps:

### 1. Clone the Repository

```bash
git clone https://github.com/amoryossef/dev-team-scheduler.git
cd dev-team-scheduler
```

### 2. Server Setup

```bash
cd server
npm install
# Ensure your .env file is configured with your MySQL credentials
npm start
```

### 3. Client Setup

**Bash**

```
cd client
npm install
npm run dev
```

### 4. Database Setup

Run the provided SQL script located in the `database` folder to create the necessary tables and insert initial data.

---

### 📬 Contact

Created by  **Ayala Mor Yossef** .
LinkedIn: [linkedin.com/in/ayala-m-8885a3395](https://www.linkedin.com/in/ayala-m-8885a3395)
Email: ayala21717@gmail.com
