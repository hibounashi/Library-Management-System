import { useState } from 'react';
import { Form, Button, Container, Card, Alert, Row, Col } from 'react-bootstrap';
import api from '../services/api';
import { useNavigate } from 'react-router-dom';

const AddBook = () => {
    const [formData, setFormData] = useState({
        title: '',
        author: '',
        isbn: '',
        category: '',
        description: '',
        totalCopies: 1
    });
    const [image, setImage] = useState(null);
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleImageChange = (e) => {
        setImage(e.target.files[0]);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');

        const data = new FormData();
        Object.keys(formData).forEach(key => data.append(key, formData[key]));
        if (image) data.append('image', image);

        try {
            await api.post('/books', data, {
                headers: { 'Content-Type': 'multipart/form-data' }
            });
            navigate('/');
        } catch (err) {
            setError(err.response?.data?.error || 'Failed to add book');
        }
    };

    return (
        <Container className="mt-5" style={{ maxWidth: '600px' }}>
            <Card>
                <Card.Body>
                    <h2 className="text-center mb-4">Add New Book</h2>
                    {error && <Alert variant="danger">{error}</Alert>}
                    <Form onSubmit={handleSubmit}>
                        <Row>
                            <Col md={6}>
                                <Form.Group className="mb-3">
                                    <Form.Label>Title</Form.Label>
                                    <Form.Control name="title" required onChange={handleChange} />
                                </Form.Group>
                            </Col>
                            <Col md={6}>
                                <Form.Group className="mb-3">
                                    <Form.Label>Author</Form.Label>
                                    <Form.Control name="author" required onChange={handleChange} />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Form.Group className="mb-3">
                            <Form.Label>ISBN</Form.Label>
                            <Form.Control name="isbn" required onChange={handleChange} />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Category</Form.Label>
                            <Form.Control name="category" required onChange={handleChange} />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Description</Form.Label>
                            <Form.Control as="textarea" rows={3} name="description" onChange={handleChange} />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Total Copies</Form.Label>
                            <Form.Control type="number" name="totalCopies" min="1" value={formData.totalCopies} onChange={handleChange} />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Cover Image</Form.Label>
                            <Form.Control type="file" onChange={handleImageChange} />
                        </Form.Group>
                        <Button className="w-100" type="submit">Add Book</Button>
                    </Form>
                </Card.Body>
            </Card>
        </Container>
    );
};

export default AddBook;
