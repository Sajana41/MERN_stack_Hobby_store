# MERN Hobby Store

This is a **MERN Stack** project for a Hobby Store, a web-based e-commerce platform designed specifically for hobbyists. The store specializes in **RC Planes**, **accessories**, and **parts**, and includes an **Admin Panel** for managing products efficiently.

---

## Features

### **User Features**
- **Authentication**: Users must sign in or register to access features.
- Browse a wide variety of RC planes, accessories, and parts.
- View detailed information about each product.
- Add products to the cart and manage your selections.
- Secure and intuitive user experience.

### **Admin Features**
- **Product Management**: Admins can upload, edit, and delete products.
- Manage product categories and inventory.
- Dashboard to view key metrics.

---

## Tech Stack

### **Frontend**
- **React**: Framework for building the user interface.
- **Redux**: State management for efficient data handling.
- **Axios**: For handling API requests.
- **Bootstrap/Material-UI**: Responsive and modern design components.

### **Backend**
- **Node.js**: Backend runtime environment.
- **Express.js**: Framework for building RESTful APIs.
- **MongoDB**: Database for storing user and product information.

---

## Getting Started

### **Install Dependencies**
For the **Frontend**:
```bash
cd frontend
npm install
```
For the **Backend**:
```bash
cd backend
npm install
```

### **Run the Application**

#### **Start the Backend**
```bash
cd backend
npm start
```

#### **Start the Frontend**
```bash
cd frontend
npm start
```
Open your browser and navigate to `http://localhost:3000` for the frontend. The backend will run on `http://localhost:5000` by default.

---

## Project Structure

```
MERN_Hobby_store
├── frontend
│   ├── public
│   ├── src
│   │   ├── components
│   │   ├── pages
│   │   ├── redux
│   │   ├── utils
│   │   ├── App.js
│   │   ├── index.js
│   ├── package.json
│   └── .env
├── backend
│   ├── models
│   ├── routes
│   ├── controllers
│   ├── config
│   ├── server.js
│   ├── package.json
│   └── .env
├── README.md
```

---

## Environment Variables

### **Frontend**
Create a `.env` file in the `frontend` directory and add the following:
```env
REACT_APP_API_URL=http://localhost:5000
```

### **Backend**
Create a `.env` file in the `backend` directory and add the following:
```env
MONGO_URI=<Your MongoDB Connection String>
JWT_SECRET=<Your JWT Secret>
```

---

## Authentication Workflow
1. **Sign In/Sign Up**: Users must create an account or log in to access the store.
2. **Session Management**: Tokens are used to manage user sessions securely.
3. **Cart Access**: Only logged-in users can add products to their cart and manage orders.

---

## Contributing
Contributions are welcome! Please follow these steps:
1. Fork the repository.
2. Create a new branch: `git checkout -b feature/YourFeatureName`
3. Commit your changes: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin feature/YourFeatureName`
5. Open a pull request.

---

## License
This project is licensed under the MIT License. See the LICENSE file for details.

---

## Contact
For any queries, please contact **Sajana**:
- GitHub: [Sajana41](https://github.com/Sajana41)
- Email: [sajanaakilendra41@gmail.com](mailto:sajanaakilendra41@gmail.com)

---

Happy Building! ✌️

