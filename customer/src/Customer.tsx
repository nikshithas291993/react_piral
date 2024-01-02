import React, { useState } from 'react';
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import 'bootstrap/dist/css/bootstrap.min.css';
import { data } from './data.js';

export default function Customer() {
    const [contacts, setContacts] = useState(data);
    const [search, setSearch] = useState('');
  
    return (
        <div>
        <Container>
            <h1 className='text-center mt-4'>Employee Data</h1>
            <Form>
            <InputGroup className='my-3'>

                {/* onChange for search */}
                <Form.Control
                onChange={(e) => setSearch(e.target.value)}
                placeholder='Search employee by name, email or phone'
                />
            </InputGroup>
            </Form>
            <Table striped bordered hover>
            <thead>
                <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
                <th>Phone</th>
                </tr>
            </thead>
            <tbody>
                {data
                .filter((item) => {
                    return search.toLowerCase() === ''
                    ? item
                    : item.first_name.toLowerCase().includes(search);  
                })
                .map((item, index) => (
                    <tr key={index}>
                    <td>{item.first_name}</td>
                    <td>{item.last_name}</td>
                    <td>{item.email}</td>
                    <td>{item.phone}</td>
                    </tr>
                ))}
                {data
                .filter((item) => {
                    return search.toLowerCase() === ''
                    ? item
                    : item.last_name.toLowerCase().includes(search);
                })
                .map((item, index) => (
                    <tr key={index}>
                    <td>{item.first_name}</td>
                    <td>{item.last_name}</td>
                    <td>{item.email}</td>
                    <td>{item.phone}</td>
                    </tr>
                ))}
                {data
                .filter((item) => {
                    return search.toLowerCase() === ''
                    ? item
                    : item.email.toLowerCase().includes(search);
                })
                .map((item, index) => (
                    <tr key={index}>
                    <td>{item.first_name}</td>
                    <td>{item.last_name}</td>
                    <td>{item.email}</td>
                    <td>{item.phone}</td>
                    </tr>
                ))}
                {data
                .filter((item) => {
                    return search.toLowerCase() === ''
                    ? item
                    : item.phone.toLowerCase().includes(search);
                })
                .map((item, index) => (
                    <tr key={index}>
                    <td>{item.first_name}</td>
                    <td>{item.last_name}</td>
                    <td>{item.email}</td>
                    <td>{item.phone}</td>
                    </tr>
                ))}
            </tbody>
            </Table>
        </Container>
        </div>
        )
}