const express = require('express');
const router = express.Router();
const { getAllBooks, getBookById, addBook, updateBook, deleteBook } = require('../controllers/bookController');
const verifyToken = require('../middleware/authMiddleware');
const verifyRole = require('../middleware/roleMiddleware');
const upload = require('../middleware/uploadMiddleware');

// Public routes
router.get('/', getAllBooks);
router.get('/:id', getBookById);

// Protected routes (Librarian/Admin only)
router.post('/', verifyToken, verifyRole(['librarian', 'admin']), upload.single('image'), addBook);
router.put('/:id', verifyToken, verifyRole(['librarian', 'admin']), updateBook);
router.delete('/:id', verifyToken, verifyRole(['librarian', 'admin']), deleteBook);

module.exports = router;
