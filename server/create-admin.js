const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const User = require("./models/User");
require('dotenv').config();

async function createAdminUser() {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Connected to MongoDB");

    // Check if admin already exists
    const existingAdmin = await User.findOne({ role: "admin" });
    if (existingAdmin) {
      console.log("Admin user already exists");
      console.log("Email:", existingAdmin.email);
      return;
    }

    // Hash password
    const hashedPassword = await bcrypt.hash("admin123", 12);

    // Create admin user
    const adminUser = new User({
      userName: "admin1",
      email: "admin1@example.com",
      password: hashedPassword,
      role: "admin"
    });

    await adminUser.save();
    console.log("✅ Admin user created successfully!");
    console.log("📧 Email: admin1@example.com");
    console.log("🔒 Password: admin123");
    console.log("🎯 Role: admin");

  } catch (error) {
    console.log("❌ Error creating admin user:", error.message);
  } finally {
    await mongoose.connection.close();
    console.log("🔌 Database connection closed");
  }
}

createAdminUser();