# 🛒 Ecommerce App

A modern and responsive **Ecommerce Web Application** that provides a seamless online shopping experience. Users can browse products, search items, manage their shopping cart, and securely place orders through an intuitive interface.

## 🚀 Tech Stack

<p align="center">

![React](https://img.shields.io/badge/React-18-61DAFB?style=for-the-badge&logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-5-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-Express-339933?style=for-the-badge&logo=node.js&logoColor=white)
![Express](https://img.shields.io/badge/Express.js-4.x-000000?style=for-the-badge&logo=express&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-Mongoose-47A248?style=for-the-badge&logo=mongodb&logoColor=white)
![Redux Toolkit](https://img.shields.io/badge/Redux-Toolkit-764ABC?style=for-the-badge&logo=redux&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)
![JWT](https://img.shields.io/badge/JWT-Authentication-000000?style=for-the-badge&logo=jsonwebtokens&logoColor=white)
![Cloudinary](https://img.shields.io/badge/Cloudinary-Image_Storage-3448C5?style=for-the-badge&logo=cloudinary&logoColor=white)
![PayPal](https://img.shields.io/badge/PayPal-Payment-00457C?style=for-the-badge&logo=paypal&logoColor=white)
![Axios](https://img.shields.io/badge/Axios-HTTP_Client-5A29E4?style=for-the-badge&logo=axios&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

</p>

---

## ✨ Features

- 🔐 User Authentication (Login & Signup)
- 🏠 Responsive Home Page
- 📦 Browse Products
- 🔍 Search & Filter Products
- 📄 Product Details
- 🛒 Shopping Cart
- ❤️ Wishlist Support
- 💳 Checkout Process
- 📱 Mobile Responsive UI
- ⚡ Fast and Smooth User Experience

---

## 📂 Project Structure

```text
Ecommerce_App/
│
├── screenshots/
│   ├── Login.png
│   ├── SignUp.png
│   ├── Home.png
│   ├── Products.png
│   ├── Filter.png
│   ├── Cart.png
│   └── Payments.png
│
├── client/
│   ├── public/
│   ├── src/
│   ├── vite.config.js
│   └── package.json
│
├── server/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── uploads/
│   ├── server.js
│   └── package.json
│
└── README.md
```

---

## ⚙️ Installation

### 1. Clone the repository

```bash
git clone https://github.com/ajinkya029/Ecommerce_App.git
cd Ecommerce_App
```
### 2. Install Frontend Dependencies

```bash
cd client

npm install

npm run dev
```

Frontend runs on:

```
http://localhost:5173

```

### 3. Install Backend Dependencies

```bash
cd ../server

npm install

npm run dev
```

Backend runs on:

```
http://localhost:5000
```

---

## 🔑 Environment Variables

Create a `.env` file inside the **server** directory.

```env
PORT=5000

MONGO_URI=your_mongodb_connection_string

JWT_SECRET=your_jwt_secret

CLIENT_URL=http://localhost:3000

CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret

PAYPAL_MODE=sandbox
PAYPAL_CLIENT_ID=your_paypal_client_id
PAYPAL_CLIENT_SECRET=your_paypal_client_secret
```

Create a `.env` file inside the **server** directory.

```env
VITE_API_URL=http://localhost:5000/api
```

---

## 📸 Screenshots

### 🏠 Login Page

![Login Page](./screenshots/Login.png)

---

### 🏠 Sign Up Page

![Sign Up Page](./screenshots/SignUp.png)

---

### 🏠 Home Page

![Home Page](./screenshots/Home.png)

---

### 🏠 Product Page

![Product Page](./screenshots/Products.png)

---

### 🏠 Filter Page

![Filter Page](./screenshots/Filter.png)

---

### 🏠 Cart Page

![Cart Page](./screenshots/Cart.png)

---

### 🏠 Payment Page

![Payment Page](./screenshots/Payments.png)

---

## 🚀 Future Enhancements

- 💳 Payment Gateway Integration
- 📦 Order Tracking
- ⭐ Product Reviews & Ratings
- 🛠️ Admin Dashboard
- 📊 Inventory Management
- 🎁 Coupon & Discount System
- 📧 Email Notifications
- 🌙 Dark Mode

---

## 🤝 Contributing

Contributions are welcome!

1. Fork the repository.
2. Create your feature branch.

```bash
git checkout -b feature/FeatureName
```

3. Commit your changes.

```bash
git commit -m "Add new feature"
```

4. Push to the branch.

```bash
git push origin feature/FeatureName
```

5. Open a Pull Request.

---

## 🐛 Issues

If you find a bug or have a feature request, feel free to open an issue.

---

## 📄 License

This project is licensed under the **MIT License**.

---

## 👨‍💻 Author

**Ajinkya**

- GitHub: https://github.com/ajinkya029

---

## ⭐ Show Your Support

If you found this project helpful, please consider giving it a ⭐ on GitHub. It helps others discover the project and motivates further development!
