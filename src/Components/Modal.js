import React from 'react'
import { Modal, Button } from 'react-bootstrap';
import { db } from '../firebase-config';
import {query,collection,addDoc} from 'firebase/firestore';
import { useState } from 'react';
import styled from 'styled-components';

export default function MyModal(props) {
    const [productInput, setProductInput] = useState("");
    const [price, setPrice] = useState();
    const [description, setDescription] = useState("");
    
    const createProduct = async (e) => {
        e.preventDefault(e);
        if (productInput === '') {
          alert('Skriv inn noe!');
          return;
        }
        await addDoc(collection(db, 'products'), {
          product: productInput,
          available: true,
          price: price,
          description: description,
        });

        setProductInput('');
        setPrice(0);
        setDescription("");
    };

    return (
        <Container>
            <Modal {...props} size="lg" centered style={{display: "flex"}}>
                <Modal.Header closeButton>
                    <Modal.Title >
                        {props.heading}
                    </Modal.Title>
                </Modal.Header>
                
                <Modal.Body style={{display: "flex", flexDirection: "column"}}>
                    <div className='title' style={{textAlign: "center"}}>
                        <h2>Add products</h2>
                    </div>

                    <form onSubmit={createProduct} className="form" style={{display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column"}}>
                        <input
                            value={productInput}
                            onChange={(e) => setProductInput(e.target.value)}
                            type='text'
                            placeholder='Product name...'
                            style={{padding: "8px", margin: "15px", borderRadius: "10px"}}
                        />
                        <input
                            value={price}
                            onChange={(e) => setPrice(e.target.value)}
                            type='number'
                            placeholder="Price..."
                            style={{padding: "8px", margin: "15px", borderRadius: "10px"}}
                        />
                        <input
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            type='text'
                            placeholder='Description...'
                            style={{padding: "8px", margin: "15px", borderRadius: "10px"}}
                        />
        
                        <button>
                            ADD
                        </button>
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={props.onHide}>Close</Button>
                </Modal.Footer>
            </Modal>
        </Container>
    );
}

const Container = styled.div`
    .modal-content{
        .modal-body{
            input{
                padding: 5px;
                margin: 20px;
                border-radius: 1em;
                border: 1px solid green;
            }
        }
    }
    
`;
