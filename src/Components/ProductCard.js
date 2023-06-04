import React from 'react'
import { Card } from 'react-bootstrap'
import 'react-circular-progressbar/dist/styles.css';

export default function ProductCard({product, deleteProduct}) {


    return (
            
        <Card style={{padding: "20px"}}>
            <Card.Title>
                {product.title}
            </Card.Title>
            <Card.Body style={{display: "flex"}}>
                <p>{product.description}</p>
                {product.price}kr
                {product.available ? "ja" : "nei"}
                <button onClick={() => deleteProduct(product.id)}>
                    delete
                </button>
            </Card.Body>
        </Card>
           
    )
}
