import React from 'react'
import { Card } from 'react-bootstrap'
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

export default function ProductCard({title, price, description, available}) {


    return (
        <Card style={{padding: "20px"}}>
            <Card.Title>
                {title}
            </Card.Title>
            <Card.Body style={{display: "flex"}}>
                {description}
                {price}kr
                {available}
            </Card.Body>
        </Card>
    )
}
