## E-Commerce Application

This is a full-stack e-commerce application built with React, Redux, Node.js, Express, and MongoDB. It allows users to browse products, add them to the cart, and place orders. Administrators can manage products and order statuses.

## Features
- User authentication and authorization
- Product browsing and searching
- Shopping cart management
- Order placement and order history
- Admin functionalities for product and order management

## Table of Contents

- [Installation](#installation)
- [Backend Setup](#backend-setup)
- [Frontend Setup](#frontend-setup)
- [Running The Application](#running-the-application)
- [API Endpoints](#api-endpoints)
  - [Auth Routes](#auth-routes)
  - [Product Routes](#product-routes)
  - [Cart Routes](#cart-routes)
  - [Order Routes](#order-routes)
- [Technologies Used](#technologies-used)
  - [Frontend](#frontend)
  - [Backend](#backend)
- [Author](#author)
  
## Installation

Before you begin, ensure you have the following installed on your machine:

- Node.js
- npm (Node Package Manager)
- MongoDB

## Backend Setup

To run this project locally, follow these steps:

1. Clone the repository:
   ```sh
   git clone [https://github.com/yourusername/company-website.git](https://github.com/lokesh0408/E-Commerce-Application.git)

2. Navigate to the project directory:
   ```bash
   cd E-Commerce-Application
   ```

3. Navigate to the `backend` directory:
   ```bash
   cd e-commerce-backend
   ```

4. Install the required dependencies:
   ```bash
   npm install
   ```

5. Create a `.env` file in the `backend` directory and add the following environment variables:
   ```bash
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   ```

6. Start the backend server:
   ```bash
   npm run dev
   ```
   The backend server should now be running on `http://localhost:5000`

## Frontend Setup

1. Open a new terminal and navigate to the `frontend` directory:
   ```bash
   cd e-commerce-frontend
   ```

2. Install the required dependencies:
   ```bash
   npm install
   ```

3. Start the frontend development server:
   ```bash
   npm run dev
   ```
   The frontend server should now be running on `http://localhost:5173`

## Running the Application

To run the application, ensure both the backend and frontend servers are running. You can then open a browser and navigate to `http://localhost:5173` to use the application.

## API Endpoints
### Auth Routes

- `POST /api/auth/register` - Register a new user
- `POST /api/auth/login` - Login a user

### Product Routes

- `GET /api/products` - Get all products
- `GET /api/products/:id` - Get product by ID
- `GET /api/products/search` - search product by name
- `GET /api/products/filter/category/:category` - Filter the product by category
- `GET /api/products/filter/price` - Filter the product by price range
- `POST /api/products` - Create a new product (Admin only)
- `PUT /api/products/:id` - Update a product (Admin only)
- `DELETE /api/products/:id` - Delete a product (Admin only)

### Cart Routes

- `GET /api/cart` - Get the user's cart
- `POST /api/cart` - Add to cart
- `DELETE /api/cart/:id` - Delete cart item

### Order Routes
- `POST /api/orders` - Create a new order
- `GET /api/orders` - Get all orders for the logged-in user
- `GET /api/orders/:id` - Get a specific order by ID

## Technologies Used

### Frontend

- React.js
- Redux
- React Router
- Axios
- Moment.js

### Backend

- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT

## Author

- Lokesh Jindal (lokeshjindal, lokeshjindal997@gmail.com)
  - [LinkedIn](https://www.linkedin.com/in/lokesh-kumar04/)
