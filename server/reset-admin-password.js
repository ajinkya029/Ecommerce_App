require("dotenv").config();

const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const User = require("./models/User");

mongoose
  .connect(process.env.MONGO_URI)
  .then(async () => {
    const newPassword = "admin123";

    const hashedPassword = await bcrypt.hash(newPassword, 10);

    const user = await User.findOneAndUpdate(
      { email: "admin1@example.com" },
      {
        password: hashedPassword,
        role: "admin"
      },
      { new: true }
    );

    if (user) {
      console.log("Admin password reset successfully");
      console.log("Email: admin1@example.com");
      console.log("Password: admin123");
    } else {
      console.log("Admin user not found");
    }

    await mongoose.connection.close();
  })
  .catch((err) => console.log(err));