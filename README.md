# Library Management System

A comprehensive Library Management System built with the MERN Stack (MongoDB, Express.js, React.js, and Node.js). This application provides a complete solution for managing library operations with role-based access control.

## 🚀 Features

### Role-Based Access Control
- **Admin**: Full system control, user management, system configuration
- **Librarian**: Book management, borrowing operations, user queries
- **Student**: Book search, borrowing requests, account management

### Core Functionality
- **Book Management**: Add, edit, delete, and search books
- **User Management**: Register, authenticate, and manage user accounts
- **Borrowing System**: Request, approve, and track book loans
- **Search & Filter**: Advanced search capabilities for books and users
- **Dashboard**: Role-specific dashboards with relevant analytics
- **Notifications**: Alerts for due dates, approvals, and system updates

## 🛠️ Tech Stack

### Frontend
- **React.js**: UI framework
- **React Router**: Client-side routing
- **Axios**: HTTP client
- **Redux/Context API**: State management
- **Material-UI / Bootstrap**: UI component library

### Backend
- **Node.js**: Runtime environment
- **Express.js**: Web application framework
- **MongoDB**: NoSQL database
- **Mongoose**: MongoDB ODM
- **JWT**: Authentication tokens
- **bcrypt**: Password hashing

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- **Node.js** (v14.x or higher)
- **npm** (v6.x or higher) or **yarn**
- **MongoDB** (v4.x or higher)
- **Git**

## 🔧 Installation & Setup

### 1. Clone the Repository

```bash
git clone https://github.com/hibounashi/Library-Management-System.git
cd Library-Management-System
```

### 2. Backend Setup

```bash
# Navigate to backend directory
cd backend

# Install dependencies
npm install

# Create .env file
cp .env.example .env
```

#### Environment Variables

Create a `.env` file in the backend directory with the following variables:

```env
# Server Configuration
PORT=5000
NODE_ENV=development

# Database Configuration
MONGODB_URI=mongodb://localhost:27017/library-management

# JWT Configuration
JWT_SECRET=your_jwt_secret_key_here
JWT_EXPIRE=30d

# Email Configuration (Optional)
EMAIL_SERVICE=gmail
EMAIL_USER=your_email@gmail.com
EMAIL_PASSWORD=your_email_password

# Frontend URL
CLIENT_URL=http://localhost:3000
```

#### Start Backend Server

```bash
# Development mode with hot reload
npm run dev

# Production mode
npm start
```

The backend server will run on `http://localhost:5000`

### 3. Frontend Setup

```bash
# Navigate to frontend directory (from root)
cd frontend

# Install dependencies
npm install

# Create .env file
cp .env.example .env
```

#### Frontend Environment Variables

Create a `.env` file in the frontend directory:

```env
REACT_APP_API_URL=http://localhost:5000/api
```

#### Start Frontend Development Server

```bash
npm start
```

The frontend application will run on `http://localhost:3000`

## 🚀 Running the Application

### Development Mode

1. Start MongoDB service:
   ```bash
   # On Linux/Mac
   sudo service mongod start
   
   # On Windows
   net start MongoDB
   ```

2. Start the backend server:
   ```bash
   cd backend
   npm run dev
   ```

3. Start the frontend development server:
   ```bash
   cd frontend
   npm start
   ```

4. Access the application at `http://localhost:3000`

### Production Build

#### Frontend Build

```bash
cd frontend
npm run build
```

This creates an optimized production build in the `frontend/build` directory.

#### Deploy Backend

```bash
cd backend
npm start
```

## 🧪 Testing

### Backend Tests

```bash
cd backend
npm test
```

### Frontend Tests

```bash
cd frontend
npm test
```

### Run All Tests

```bash
# From root directory
npm run test:all
```

## 📁 Project Structure

```
Library-Management-System/
├── backend/
│   ├── config/          # Configuration files
│   ├── controllers/     # Route controllers
│   ├── models/          # Database models
│   ├── routes/          # API routes
│   ├── middleware/      # Custom middleware
│   ├── utils/           # Utility functions
│   ├── tests/           # Backend tests
│   ├── server.js        # Entry point
│   └── package.json
├── frontend/
│   ├── public/          # Static files
│   ├── src/
│   │   ├── components/  # React components
│   │   ├── pages/       # Page components
│   │   ├── services/    # API services
│   │   ├── context/     # Context providers
│   │   ├── utils/       # Utility functions
│   │   └── App.js       # Main component
│   └── package.json
├── docs/                # Documentation
│   ├── API.md          # API documentation
│   └── CONTRIBUTING.md # Contribution guidelines
└── README.md
```

## 👥 Default User Accounts

After initial setup, you can use these default accounts:

### Admin Account
- **Email**: admin@library.com
- **Password**: admin123

### Librarian Account
- **Email**: librarian@library.com
- **Password**: librarian123

### Student Account
- **Email**: student@library.com
- **Password**: student123

*Note: Change these passwords immediately in production!*

## 📚 Documentation

- [API Endpoints Documentation](./docs/API.md) - Complete API reference
- [Contributing Guidelines](./docs/CONTRIBUTING.md) - How to contribute to this project

## 🤝 Contributing

We welcome contributions! Please read our [Contributing Guidelines](./docs/CONTRIBUTING.md) before submitting pull requests.

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🐛 Bug Reports & Feature Requests

If you encounter any bugs or have feature requests, please create an issue on our [GitHub Issues](https://github.com/hibounashi/Library-Management-System/issues) page.

## 📧 Contact

For any questions or support, please contact:
- **Email**: support@library.com
- **GitHub**: [@hibounashi](https://github.com/hibounashi)

## 🙏 Acknowledgments

- Thanks to all contributors who have helped build this project
- Built with the MERN stack community's best practices
- Inspired by modern library management needs

---

**Made with ❤️ by the Library Management System Team**