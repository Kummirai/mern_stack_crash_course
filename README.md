Admin Product Management - Fullstack Application
A fullstack web application for managing products with a React frontend and Express.js backend with MongoDB.

🚀 Features
Product Management: Create, read, update, and delete products

Responsive Design: Clean and modern UI with Tailwind CSS

Real-time Feedback: Success/error messages for user actions

RESTful API: Backend API with Express.js and MongoDB

Image Support: Product images with URL integration

🛠 Tech Stack
Frontend
React 18 - Frontend framework

React Router DOM - Client-side routing

Tailwind CSS - Styling and responsive design

React Icons - Icon library

Backend
Express.js - Web framework

MongoDB - Database

Mongoose - ODM for MongoDB

CORS - Cross-origin resource sharing

dotenv - Environment variables

📁 Project Structure
text
project/
├── backend/
│   ├── config/
│   │   └── db.js          # Database connection
│   ├── routes/
│   │   └── productRoute.js # Product API routes
│   └── index.js           # Express server setup
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Navbar.jsx
│   │   │   ├── ProductCard.jsx
│   │   │   └── Message.jsx
│   │   ├── pages/
│   │   │   ├── Homepage.jsx
│   │   │   └── CreateProduct.jsx
│   │   └── App.jsx
│   └── dist/              # Production build
└── README.md
🚀 Getting Started
Prerequisites
Node.js (v14 or higher)

MongoDB (local or Atlas)

npm or yarn

Installation
Clone the repository

bash
git clone <repository-url>
cd project
Backend Setup

bash
cd backend
npm install
Environment Variables
Create a .env file in the backend directory:

env
PORT=3000
MONGODB_URI=your_mongodb_connection_string
NODE_ENV=development
Frontend Setup

bash
cd ../frontend
npm install
Running the Application
Start the Backend Server

bash
cd backend
npm run dev
Server will run on http://localhost:3000

Start the Frontend Development Server

bash
cd frontend
npm run dev
Frontend will run on http://localhost:5173

Production Build
Build the Frontend

bash
cd frontend
npm run build
Start Production Server

bash
cd backend
npm start
📚 API Endpoints
Method	Endpoint	Description
GET	/api/products	Get all products
GET	/api/products/:id	Get single product
POST	/api/products	Create new product
PUT	/api/products/:id	Update product
DELETE	/api/products/:id	Delete product
Product Schema
javascript
{
  name: String,
  price: Number,
  image: String (URL)
}
🎯 Usage
View Products: Navigate to the homepage to see all products

Add Product: Click the "+" icon to create a new product

Edit Product: Click the edit icon on any product card

Delete Product: Click the delete icon to remove a product

🔧 Configuration
CORS Settings
The backend is configured to accept requests from http://localhost:5173 in development.

Environment Variables
PORT: Server port (default: 3000)

MONGODB_URI: MongoDB connection string

NODE_ENV: Environment mode (development/production)

📦 Dependencies
Backend
express

mongoose

cors

dotenv

Frontend
react

react-dom

react-router-dom

tailwindcss

react-icons

🤝 Contributing
Fork the project

Create your feature branch (git checkout -b feature/AmazingFeature)

Commit your changes (git commit -m 'Add some AmazingFeature')

Push to the branch (git push origin feature/AmazingFeature)

Open a Pull Request

📄 License
This project is licensed under the MIT License.

👥 Authors
Milton Kumirai

🙏 Acknowledgments
React team for the amazing framework

Tailwind CSS for the utility-first CSS framework

MongoDB for the database solution
