# Library Management System

A complete MERN stack application for managing a library system.

## Tech Stack

### Frontend
- **React** (Vite)
- **Bootstrap** & **React-Bootstrap** (UI Framework)
- **Axios** (API Requests)
- **React Router DOM** (Routing)

### Backend
- **Node.js** & **Express**
- **MongoDB** & **Mongoose** (Database)
- **JWT** (Authentication)
- **Cloudinary** (Image Storage)
- **Nodemailer** (Email Notifications)

## Project Structure

```
/frontend
  /src
    /components
    /pages
    /context
    /services
/backend
  /models
  /routes
  /controllers
  /middleware
  /config
```

## Setup Instructions

1. **Clone the repository**
2. **Install Dependencies**
   ```bash
   cd frontend && npm install
   cd backend && npm install
   ```
3. **Environment Variables**
   - Configure `frontend/.env`
   - Configure `backend/.env`
4. **Run the Application**
   - Backend: `cd backend && npm run dev`
   - Frontend: `cd frontend && npm run dev`

## API Endpoints

### Auth
- `POST /api/auth/register`
- `POST /api/auth/login`

### Books
- `GET /api/books`
- `GET /api/books/:id`
- `POST /api/books` (Admin/Librarian)
- `PUT /api/books/:id` (Admin/Librarian)
- `DELETE /api/books/:id` (Admin/Librarian)