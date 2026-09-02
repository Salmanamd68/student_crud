require("dotenv").config();

const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

// MySQL connection
const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT,
});

// Connect to MySQL
db.connect((err) => {
  if (err) {
    console.error("MySQL connection failed:", err);
    return;
  }

  console.log("Connected to MySQL");
});

// -----------------------------
// Validation function
// -----------------------------

function validateStudent(name, email, course) {
  if (!name || !email || !course) {
    return "Name, email and course are required";
  }

  const nameRegex = /^[a-zA-Z ]+$/;

  const emailRegex = /^[\w.-]+@[\w.-]+\.\w+$/;

  const courseRegex = /^[a-zA-Z0-9 .-]+$/;

  if (!nameRegex.test(name.trim())) {
    return "Name can contain letters and spaces only";
  }

  if (!emailRegex.test(email.trim())) {
    return "Enter a valid email address";
  }

  if (!courseRegex.test(course.trim())) {
    return "Enter a valid course";
  }

  return null;
}

// -----------------------------
// GET - Get all students
// -----------------------------

app.get("/students", (req, res) => {
  const sql = "SELECT * FROM students";

  db.query(sql, (err, results) => {
    if (err) {
      return res.status(500).json({
        error: err.message,
      });
    }

    res.status(200).json(results);
  });
});

// -----------------------------
// POST - Insert student
// -----------------------------

app.post("/students", (req, res) => {
  const { name, email, course } = req.body;

  const validationError =
    validateStudent(name, email, course);

  if (validationError) {
    return res.status(400).json({
      error: validationError,
    });
  }

  const sql = `
    INSERT INTO students (name, email, course)
    VALUES (?, ?, ?)
  `;

  db.query(
    sql,
    [
      name.trim(),
      email.trim(),
      course.trim(),
    ],
    (err, result) => {
      if (err) {
        return res.status(500).json({
          error: err.message,
        });
      }

      return res.status(201).json({
        message: "Student inserted successfully",
        id: result.insertId,
      });
    }
  );
});

// -----------------------------
// PUT - Update student
// -----------------------------

app.put("/students/:id", (req, res) => {
  const { id } = req.params;
  const { name, email, course } = req.body;

  const validationError =
    validateStudent(name, email, course);

  if (validationError) {
    return res.status(400).json({
      error: validationError,
    });
  }

  const sql = `
    UPDATE students
    SET name = ?, email = ?, course = ?
    WHERE id = ?
  `;

  db.query(
    sql,
    [
      name.trim(),
      email.trim(),
      course.trim(),
      id,
    ],
    (err, result) => {
      if (err) {
        return res.status(500).json({
          error: err.message,
        });
      }

      if (result.affectedRows === 0) {
        return res.status(404).json({
          error: "Student not found",
        });
      }

      return res.status(200).json({
        message: "Student updated successfully",
      });
    }
  );
});

// -----------------------------
// DELETE - Delete student
// -----------------------------

app.delete("/students/:id", (req, res) => {
  const { id } = req.params;

  const sql = "DELETE FROM students WHERE id = ?";

  db.query(sql, [id], (err, result) => {
    if (err) {
      return res.status(500).json({
        error: err.message,
      });
    }

    if (result.affectedRows === 0) {
      return res.status(404).json({
        error: "Student not found",
      });
    }

    return res.status(200).json({
      message: "Student deleted successfully",
    });
  });
});

// -----------------------------
// Start server
// -----------------------------

app.listen(3000, () => {
  console.log(
    "Server running on http://localhost:3000"
  );
});
