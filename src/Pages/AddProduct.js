import React from 'react'
import { db } from '../firebase-config';
import {query,collection,onSnapshot,doc,addDoc,deleteDoc,} from 'firebase/firestore';
import { useState } from 'react';
import styled from 'styled-components';
import { useEffect } from 'react';

import ProductCard from '../Components/ProductCard';
import { Col, Row } from 'react-bootstrap';

export default function AddProduct() {
    const [productInput, setProductInput] = useState("");
    const [price, setPrice] = useState(0);
    const [description, setDescription] = useState("");
    const [products, setProducts] = useState([]);
    
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

    const deleteProduct = async (id) => {
        await deleteDoc(doc(db, 'products', id));
    };

    useEffect(() => {
        const q = query(collection(db, 'products'));
        const unsubscribe = onSnapshot(q, (querySnapshot) => {
          let arr = [];
          querySnapshot.forEach((doc) => {
            arr.push({ ...doc.data(), id: doc.id });
          });
          setProducts(arr);
        });
        return () => unsubscribe();
    }, []);

    

    return (
        <Container>
            <div className='main-content'>
                <div className='page-content'>
                    <div className='container-fluid'>
                        
                        <div className='title' style={{textAlign: "center"}}>
                            <h2>Add products</h2>
                        </div>
                        
                        <form onSubmit={createProduct} className="form">
                            <input
                                value={productInput}
                                onChange={(e) => setProductInput(e.target.value)}
                                type='text'
                                placeholder='Product name...'
                            />
                            <input
                                value={price}
                                onChange={(e) => setPrice(e.target.value)}
                                type='number'
                                placeholder='Price...'
                            />
                            <input
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                                type='text'
                                placeholder='Description...'
                            />
            
                            <button>
                                add
                            </button>
                        </form>

                        <div className='product-container'>
                            <h2 style={{textAlign: "center", padding: "20px"}}>Products in store</h2>
                            <div className='cards'>
                                <Row className='g-4' xs={1} md={4}>
                                    {products.map((product, index) => (
                                        <Col key={index} align="center">
                                            <ProductCard product={product} deleteProduct={deleteProduct}/>
                                        </Col>
                                    ))}
                                </Row>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </Container>
    );
};

const Container = styled.div`
    width: 100%;
    height: 100vh;
    
    .main-content{
        margin-left: 250px;
        overflow: hidden;
        
        .page-content{
            padding: 94px 12px 60px;
        }
    }

    .form{
        display: flex;
        padding: 20px;
        justify-content: center;

        input{
            
        }
    }

    .product-container{
        width: 100%;
        padding-top: 200px;
        
    }
`;
