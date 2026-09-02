🎓 Student Management System
Flutter • Node.js • Express • MySQL

A modern full-stack Student Management System built with Flutter and Node.js, using Express.js and MySQL for the backend and database.

The application provides complete CRUD (Create, Read, Update, Delete) functionality for managing student records through a clean and user-friendly Flutter interface.

✨ Features
➕ Add new students
📋 View all students
🔍 View student details
✏️ Edit student information
🗑️ Delete student records
🔄 Complete CRUD operations
📱 Responsive Flutter UI
🔗 REST API integration
🗄️ MySQL database
⚡ Node.js + Express backend
🛠️ Tech Stack
Technology	Purpose
📱 Flutter	Frontend / Mobile App
🟢 Node.js	Backend Runtime
🚀 Express.js	REST API
🐬 MySQL	Database
🔗 REST API	Flutter ↔ Backend Communication
📂 Project Structure
student-management-app/
│
├── flutter_app/
│   ├── lib/
│   ├── assets/
│   └── pubspec.yaml
│
├── node_backend/
│   ├── routes/
│   ├── controllers/
│   ├── models/
│   ├── config/
│   ├── server.js
│   └── package.json
│
└── README.md


The folder structure may vary depending on your project implementation.

🔄 Application Flow
┌─────────────────┐
│     Flutter     │
│   Mobile App    │
└────────┬────────┘
         │
         │ REST API
         ▼
┌─────────────────┐
│    Node.js +    │
│    Express.js   │
└────────┬────────┘
         │
         │ SQL Queries
         ▼
┌─────────────────┐
│      MySQL      │
│    Database     │
└─────────────────┘

🚀 Getting Started
1. Clone the repository
git clone https://github.com/YOUR_USERNAME/student-management-app.git
cd student-management-app

2. Backend Setup

Navigate to the backend folder:

cd node_backend


Install dependencies:

npm install


Configure your MySQL database and update the database credentials in your backend configuration.

Then start the server:

npm start


Or, if your project uses nodemon:

npm run dev

3. Flutter Setup

Navigate to the Flutter project:

cd flutter_app


Install Flutter dependencies:

flutter pub get


Run the application:

flutter run

🗄️ Database

This project uses MySQL to store student information.

Example student fields:

id
name
email
phone
course


Update these fields according to your actual database structure.

🔌 API

The Flutter application communicates with the Node.js backend through REST APIs.

Typical operations include:

GET     /students       → Get all students
GET     /students/:id   → Get a student
POST    /students       → Add a student
PUT     /students/:id   → Update a student
DELETE  /students/:id   → Delete a student


Update the endpoints above if your actual API routes are different.

📸 Screenshots

Add screenshots of your Flutter application here.

Coming soon...

🎯 Project Goal

The goal of this project is to demonstrate a complete full-stack CRUD application using Flutter as the frontend, Node.js and Express.js as the backend, and MySQL as the database.

🤝 Contributing

Contributions, suggestions, and improvements are welcome.

Fork the repository
Create a new branch
Make your changes
Commit your changes
Push the branch
Open a Pull Request
⭐ Support

If you find this project useful, consider giving it a ⭐ on GitHub!
