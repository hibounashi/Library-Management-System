const mongoose = require('mongoose');

const returnRequestSchema = new mongoose.Schema({
    issuedBookId: { type: mongoose.Schema.Types.ObjectId, ref: 'IssuedBook', required: true },
    requestDate: { type: Date, default: Date.now },
    status: { type: String, enum: ['pending', 'completed'], default: 'pending' }
});

module.exports = mongoose.model('ReturnRequest', returnRequestSchema);
