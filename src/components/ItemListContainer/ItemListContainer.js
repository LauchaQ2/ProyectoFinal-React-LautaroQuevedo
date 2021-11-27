import React from 'react';
import '../ItemListContainer/ItemListContainer.css';
import Card from '../Cards/Card.js';
import Container from 'react-bootstrap/Nav';

export default function ItemListContainer(){
    return(
        <Container fluid className="justify-content-center">
        <Card/>
        </Container>
    )
}