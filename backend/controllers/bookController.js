const Book = require('../models/Book');
const cloudinary = require('../config/cloudinary');

const getAllBooks = async (req, res) => {
    try {
        const books = await Book.find();
        res.json(books);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

const getBookById = async (req, res) => {
    try {
        const book = await Book.findById(req.params.id);
        if (!book) return res.status(404).json({ error: 'Book not found' });
        res.json(book);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

const addBook = async (req, res) => {
    try {
        const { title, author, isbn, category, description, totalCopies } = req.body;
        let imageUrl = '';
        let cloudinaryPublicId = '';

        if (req.file) {
            // Upload to Cloudinary
            const result = await new Promise((resolve, reject) => {
                const uploadStream = cloudinary.uploader.upload_stream(
                    { folder: 'library-books' },
                    (error, result) => {
                        if (error) reject(error);
                        else resolve(result);
                    }
                );
                uploadStream.end(req.file.buffer);
            });

            imageUrl = result.secure_url;
            cloudinaryPublicId = result.public_id;
        }

        const book = new Book({
            title,
            author,
            isbn,
            category,
            description,
            totalCopies,
            availableCopies: totalCopies,
            imageUrl,
            cloudinaryPublicId
        });

        await book.save();
        res.status(201).json(book);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

const updateBook = async (req, res) => {
    try {
        const book = await Book.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!book) return res.status(404).json({ error: 'Book not found' });
        res.json(book);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

const deleteBook = async (req, res) => {
    try {
        const book = await Book.findByIdAndDelete(req.params.id);
        if (!book) return res.status(404).json({ error: 'Book not found' });

        // Delete image from Cloudinary if exists
        if (book.cloudinaryPublicId) {
            await cloudinary.uploader.destroy(book.cloudinaryPublicId);
        }

        res.json({ message: 'Book deleted' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

module.exports = { getAllBooks, getBookById, addBook, updateBook, deleteBook };
