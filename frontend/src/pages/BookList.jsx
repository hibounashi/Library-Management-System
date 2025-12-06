import { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import api from '../services/api';

const BookList = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        fetchBooks();
    }, []);

    const fetchBooks = async () => {
        try {
            const res = await api.get('/books');
            setBooks(res.data);
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <Container className="mt-4">
            <h2 className="mb-4">Library Catalogue</h2>
            <Row xs={1} md={2} lg={3} className="g-4">
                {books.map((book) => (
                    <Col key={book._id}>
                        <Card className="h-100 shadow-sm">
                            {book.imageUrl && (
                                <Card.Img variant="top" src={book.imageUrl} style={{ height: '200px', objectFit: 'cover' }} />
                            )}
                            <Card.Body>
                                <Card.Title>{book.title}</Card.Title>
                                <Card.Subtitle className="mb-2 text-muted">{book.author}</Card.Subtitle>
                                <Card.Text>
                                    <strong>Category:</strong> {book.category}<br />
                                    <strong>Available:</strong> {book.availableCopies}/{book.totalCopies}
                                </Card.Text>
                                <Button variant="primary" size="sm">View Details</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default BookList;
