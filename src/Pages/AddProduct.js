import React from 'react'
import { db } from '../firebase-config';
import {query,collection,onSnapshot,updateDoc,doc,addDoc,deleteDoc,} from 'firebase/firestore';
import { useState } from 'react';
import styled from 'styled-components';
import { useEffect } from 'react';
import MyCard from '../Components/Card';
import ProductCard from '../Components/ProductCard';

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

    console.log(products)

    return (
        <Container>
            <div className='main-content'>
                <div className='page-content'>
                    <div className='container-fluid'>
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
                            <div className='cards'>
                                {products.map((product, index) => (
                                    <ProductCard key={index} title={product.product} price={product.price} description={product.description} available={product.available}/>
                                ))}
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

    .product-container{
        
        
        .cards{
            display: flex;
        }
    }
`;
