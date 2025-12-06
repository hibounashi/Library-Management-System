# API Endpoints Documentation

## Base URL

```
Development: http://localhost:5000/api
Production: https://your-domain.com/api
```

## Authentication

Most endpoints require authentication using JWT tokens. Include the token in the Authorization header:

```
Authorization: Bearer <your_jwt_token>
```

## Response Format

### Success Response
```json
{
  "success": true,
  "data": { ... }
}
```

### Error Response
```json
{
  "success": false,
  "error": "Error message"
}
```

---

## Table of Contents

1. [Authentication](#authentication-endpoints)
2. [Users](#user-endpoints)
3. [Books](#book-endpoints)
4. [Borrowing](#borrowing-endpoints)
5. [Admin](#admin-endpoints)

---

## Authentication Endpoints

### Register User

Register a new user account.

**Endpoint:** `POST /auth/register`

**Access:** Public

**Request Body:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "password123",
  "role": "student"
}
```

**Response:** `201 Created`
```json
{
  "success": true,
  "data": {
    "token": "jwt_token_here",
    "user": {
      "id": "user_id",
      "name": "John Doe",
      "email": "john@example.com",
      "role": "student"
    }
  }
}
```

---

### Login

Authenticate a user and receive a JWT token.

**Endpoint:** `POST /auth/login`

**Access:** Public

**Request Body:**
```json
{
  "email": "john@example.com",
  "password": "password123"
}
```

**Response:** `200 OK`
```json
{
  "success": true,
  "data": {
    "token": "jwt_token_here",
    "user": {
      "id": "user_id",
      "name": "John Doe",
      "email": "john@example.com",
      "role": "student"
    }
  }
}
```

---

### Get Current User

Get the currently authenticated user's information.

**Endpoint:** `GET /auth/me`

**Access:** Private (All authenticated users)

**Headers:**
```
Authorization: Bearer <token>
```

**Response:** `200 OK`
```json
{
  "success": true,
  "data": {
    "id": "user_id",
    "name": "John Doe",
    "email": "john@example.com",
    "role": "student",
    "borrowedBooks": []
  }
}
```

---

### Logout

Logout the current user (client-side token removal).

**Endpoint:** `POST /auth/logout`

**Access:** Private

**Response:** `200 OK`
```json
{
  "success": true,
  "message": "Logged out successfully"
}
```

---

### Update Password

Update the current user's password.

**Endpoint:** `PUT /auth/password`

**Access:** Private

**Request Body:**
```json
{
  "currentPassword": "oldpassword123",
  "newPassword": "newpassword123"
}
```

**Response:** `200 OK`
```json
{
  "success": true,
  "message": "Password updated successfully"
}
```

---

## User Endpoints

### Get User Profile

Get a specific user's profile.

**Endpoint:** `GET /users/:id`

**Access:** Private (Admin, Librarian, Own profile)

**Response:** `200 OK`
```json
{
  "success": true,
  "data": {
    "id": "user_id",
    "name": "John Doe",
    "email": "john@example.com",
    "role": "student",
    "borrowedBooks": [],
    "borrowingHistory": [],
    "createdAt": "2024-01-01T00:00:00.000Z"
  }
}
```

---

### Update User Profile

Update user profile information.

**Endpoint:** `PUT /users/:id`

**Access:** Private (Own profile or Admin)

**Request Body:**
```json
{
  "name": "John Updated",
  "email": "john.updated@example.com"
}
```

**Response:** `200 OK`
```json
{
  "success": true,
  "data": {
    "id": "user_id",
    "name": "John Updated",
    "email": "john.updated@example.com"
  }
}
```

---

### Get All Users

Get a list of all users (with pagination).

**Endpoint:** `GET /users`

**Access:** Private (Admin, Librarian)

**Query Parameters:**
- `page` (optional): Page number (default: 1)
- `limit` (optional): Items per page (default: 10)
- `role` (optional): Filter by role (admin, librarian, student)
- `search` (optional): Search by name or email

**Example:** `GET /users?page=1&limit=10&role=student&search=john`

**Response:** `200 OK`
```json
{
  "success": true,
  "data": {
    "users": [
      {
        "id": "user_id",
        "name": "John Doe",
        "email": "john@example.com",
        "role": "student"
      }
    ],
    "pagination": {
      "currentPage": 1,
      "totalPages": 5,
      "totalUsers": 50,
      "limit": 10
    }
  }
}
```

---

### Delete User

Delete a user account.

**Endpoint:** `DELETE /users/:id`

**Access:** Private (Admin only)

**Response:** `200 OK`
```json
{
  "success": true,
  "message": "User deleted successfully"
}
```

---

## Book Endpoints

### Get All Books

Get a list of all books with filtering and pagination.

**Endpoint:** `GET /books`

**Access:** Public

**Query Parameters:**
- `page` (optional): Page number (default: 1)
- `limit` (optional): Items per page (default: 10)
- `search` (optional): Search by title, author, or ISBN
- `category` (optional): Filter by category
- `available` (optional): Filter by availability (true/false)

**Example:** `GET /books?page=1&limit=10&search=javascript&available=true`

**Response:** `200 OK`
```json
{
  "success": true,
  "data": {
    "books": [
      {
        "id": "book_id",
        "title": "JavaScript: The Good Parts",
        "author": "Douglas Crockford",
        "isbn": "978-0596517748",
        "category": "Programming",
        "description": "A book about JavaScript",
        "totalCopies": 5,
        "availableCopies": 3,
        "publishedYear": 2008,
        "coverImage": "url_to_image"
      }
    ],
    "pagination": {
      "currentPage": 1,
      "totalPages": 10,
      "totalBooks": 100,
      "limit": 10
    }
  }
}
```

---

### Get Book by ID

Get detailed information about a specific book.

**Endpoint:** `GET /books/:id`

**Access:** Public

**Response:** `200 OK`
```json
{
  "success": true,
  "data": {
    "id": "book_id",
    "title": "JavaScript: The Good Parts",
    "author": "Douglas Crockford",
    "isbn": "978-0596517748",
    "category": "Programming",
    "description": "A book about JavaScript",
    "totalCopies": 5,
    "availableCopies": 3,
    "publishedYear": 2008,
    "coverImage": "url_to_image",
    "currentBorrowers": [
      {
        "userId": "user_id",
        "userName": "John Doe",
        "borrowDate": "2024-01-01T00:00:00.000Z",
        "dueDate": "2024-01-15T00:00:00.000Z"
      }
    ]
  }
}
```

---

### Add New Book

Add a new book to the library.

**Endpoint:** `POST /books`

**Access:** Private (Admin, Librarian)

**Request Body:**
```json
{
  "title": "Clean Code",
  "author": "Robert C. Martin",
  "isbn": "978-0132350884",
  "category": "Programming",
  "description": "A book about writing clean code",
  "totalCopies": 3,
  "publishedYear": 2008,
  "coverImage": "url_to_image"
}
```

**Response:** `201 Created`
```json
{
  "success": true,
  "data": {
    "id": "book_id",
    "title": "Clean Code",
    "author": "Robert C. Martin",
    "isbn": "978-0132350884",
    "category": "Programming",
    "description": "A book about writing clean code",
    "totalCopies": 3,
    "availableCopies": 3,
    "publishedYear": 2008
  }
}
```

---

### Update Book

Update book information.

**Endpoint:** `PUT /books/:id`

**Access:** Private (Admin, Librarian)

**Request Body:**
```json
{
  "title": "Clean Code - Updated",
  "totalCopies": 5
}
```

**Response:** `200 OK`
```json
{
  "success": true,
  "data": {
    "id": "book_id",
    "title": "Clean Code - Updated",
    "totalCopies": 5,
    "availableCopies": 3
  }
}
```

---

### Delete Book

Delete a book from the library.

**Endpoint:** `DELETE /books/:id`

**Access:** Private (Admin only)

**Response:** `200 OK`
```json
{
  "success": true,
  "message": "Book deleted successfully"
}
```

---

## Borrowing Endpoints

### Borrow Book

Request to borrow a book.

**Endpoint:** `POST /borrowing/borrow`

**Access:** Private (Student, Librarian)

**Request Body:**
```json
{
  "bookId": "book_id"
}
```

**Response:** `201 Created`
```json
{
  "success": true,
  "data": {
    "id": "borrowing_id",
    "bookId": "book_id",
    "userId": "user_id",
    "borrowDate": "2024-01-01T00:00:00.000Z",
    "dueDate": "2024-01-15T00:00:00.000Z",
    "status": "borrowed"
  }
}
```

---

### Return Book

Return a borrowed book.

**Endpoint:** `POST /borrowing/return`

**Access:** Private (Student, Librarian)

**Request Body:**
```json
{
  "borrowingId": "borrowing_id"
}
```

**Response:** `200 OK`
```json
{
  "success": true,
  "data": {
    "id": "borrowing_id",
    "returnDate": "2024-01-10T00:00:00.000Z",
    "status": "returned",
    "fine": 0
  }
}
```

---

### Get Borrowing History

Get borrowing history for the current user.

**Endpoint:** `GET /borrowing/history`

**Access:** Private

**Query Parameters:**
- `page` (optional): Page number (default: 1)
- `limit` (optional): Items per page (default: 10)
- `status` (optional): Filter by status (borrowed, returned, overdue)

**Response:** `200 OK`
```json
{
  "success": true,
  "data": {
    "history": [
      {
        "id": "borrowing_id",
        "book": {
          "id": "book_id",
          "title": "JavaScript: The Good Parts",
          "author": "Douglas Crockford"
        },
        "borrowDate": "2024-01-01T00:00:00.000Z",
        "dueDate": "2024-01-15T00:00:00.000Z",
        "returnDate": "2024-01-10T00:00:00.000Z",
        "status": "returned",
        "fine": 0
      }
    ],
    "pagination": {
      "currentPage": 1,
      "totalPages": 3,
      "totalRecords": 25,
      "limit": 10
    }
  }
}
```

---

### Get All Borrowings

Get all borrowing records (Admin/Librarian).

**Endpoint:** `GET /borrowing/all`

**Access:** Private (Admin, Librarian)

**Query Parameters:**
- `page` (optional): Page number
- `limit` (optional): Items per page
- `status` (optional): Filter by status
- `userId` (optional): Filter by user

**Response:** `200 OK`
```json
{
  "success": true,
  "data": {
    "borrowings": [
      {
        "id": "borrowing_id",
        "user": {
          "id": "user_id",
          "name": "John Doe"
        },
        "book": {
          "id": "book_id",
          "title": "JavaScript: The Good Parts"
        },
        "borrowDate": "2024-01-01T00:00:00.000Z",
        "dueDate": "2024-01-15T00:00:00.000Z",
        "status": "borrowed"
      }
    ]
  }
}
```

---

### Extend Due Date

Extend the due date for a borrowed book.

**Endpoint:** `PUT /borrowing/:id/extend`

**Access:** Private (Librarian, Admin)

**Request Body:**
```json
{
  "extensionDays": 7
}
```

**Response:** `200 OK`
```json
{
  "success": true,
  "data": {
    "id": "borrowing_id",
    "newDueDate": "2024-01-22T00:00:00.000Z"
  }
}
```

---

## Admin Endpoints

### Get Dashboard Statistics

Get system statistics for the admin dashboard.

**Endpoint:** `GET /admin/stats`

**Access:** Private (Admin)

**Response:** `200 OK`
```json
{
  "success": true,
  "data": {
    "totalUsers": 150,
    "totalBooks": 500,
    "totalBorrowings": 320,
    "activeBorrowings": 45,
    "overdueBorrowings": 5,
    "usersByRole": {
      "admin": 2,
      "librarian": 5,
      "student": 143
    },
    "recentActivity": [
      {
        "type": "borrow",
        "user": "John Doe",
        "book": "JavaScript: The Good Parts",
        "timestamp": "2024-01-01T00:00:00.000Z"
      }
    ]
  }
}
```

---

### Update User Role

Update a user's role (Admin only).

**Endpoint:** `PUT /admin/users/:id/role`

**Access:** Private (Admin only)

**Request Body:**
```json
{
  "role": "librarian"
}
```

**Response:** `200 OK`
```json
{
  "success": true,
  "data": {
    "id": "user_id",
    "name": "John Doe",
    "role": "librarian"
  }
}
```

---

### Get System Logs

Get system activity logs.

**Endpoint:** `GET /admin/logs`

**Access:** Private (Admin)

**Query Parameters:**
- `page` (optional): Page number
- `limit` (optional): Items per page
- `type` (optional): Filter by log type

**Response:** `200 OK`
```json
{
  "success": true,
  "data": {
    "logs": [
      {
        "id": "log_id",
        "type": "user_login",
        "user": "John Doe",
        "description": "User logged in",
        "timestamp": "2024-01-01T00:00:00.000Z",
        "ipAddress": "192.168.1.1"
      }
    ]
  }
}
```

---

## Error Codes

| Status Code | Description |
|------------|-------------|
| 200 | Success |
| 201 | Created |
| 400 | Bad Request - Invalid input |
| 401 | Unauthorized - Authentication required |
| 403 | Forbidden - Insufficient permissions |
| 404 | Not Found - Resource doesn't exist |
| 409 | Conflict - Resource already exists |
| 500 | Internal Server Error |

---

## Rate Limiting

API requests are limited to:
- **Public endpoints**: 100 requests per 15 minutes
- **Authenticated endpoints**: 1000 requests per 15 minutes

If you exceed these limits, you'll receive a `429 Too Many Requests` response.

---

## Pagination

All list endpoints support pagination with the following query parameters:
- `page`: Page number (default: 1)
- `limit`: Items per page (default: 10, max: 100)

Response includes a `pagination` object:
```json
{
  "pagination": {
    "currentPage": 1,
    "totalPages": 10,
    "totalItems": 100,
    "limit": 10
  }
}
```

---

## Testing the API

### Using cURL

```bash
# Login
curl -X POST http://localhost:5000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"email":"student@library.com","password":"student123"}'

# Get Books (with token)
curl -X GET http://localhost:5000/api/books \
  -H "Authorization: Bearer YOUR_TOKEN_HERE"
```

### Using Postman

Import the API collection:
1. Download the [Postman Collection](./postman_collection.json)
2. Import into Postman
3. Set the environment variables
4. Start testing!

---

## Swagger/OpenAPI

For interactive API documentation, visit:
```
http://localhost:5000/api-docs
```

This provides a Swagger UI interface to explore and test all endpoints.

---

## Notes

- All dates are in ISO 8601 format
- All IDs are MongoDB ObjectId strings
- Passwords must be at least 6 characters
- Email addresses must be valid and unique
- JWT tokens expire after 30 days by default
- File uploads (book covers) support JPG, PNG (max 5MB)

---

## Support

For API support or questions:
- **Email**: api-support@library.com
- **GitHub Issues**: [Report Issue](https://github.com/hibounashi/Library-Management-System/issues)
- **Documentation**: [Main README](../README.md)
