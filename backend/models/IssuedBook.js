const mongoose = require('mongoose');

const issuedBookSchema = new mongoose.Schema({
    studentId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    bookId: { type: mongoose.Schema.Types.ObjectId, ref: 'Book', required: true },
    issueDate: { type: Date, default: Date.now },
    dueDate: { type: Date, required: true },
    returnDate: { type: Date },
    status: { type: String, enum: ['issued', 'returned'], default: 'issued' },
    fine: { type: Number, default: 0 }
});

module.exports = mongoose.model('IssuedBook', issuedBookSchema);
