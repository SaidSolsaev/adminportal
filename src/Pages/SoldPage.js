import React from 'react'
import styled from 'styled-components'
import { Form, Button, Table } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import { db } from '../firebase-config';
import {query,collection,onSnapshot,doc,addDoc,deleteDoc,} from 'firebase/firestore';
import DeleteIcon from '@mui/icons-material/Delete';

export default function SoldPage() {
    const [product, setProduct] = useState("");
    const [qty, setQty] = useState("");
    const [price, setPrice] = useState("");
    const [date, setDate] = useState("");
    const [place, setPlace] = useState("");
    const[soldArr, setSoldArr] = useState([]);

    
    const createSoldItem = async (e) => {
        e.preventDefault(e);
        if (product === '' || qty === "" || price === "" || date === "" || place === "") {
          alert('Fill in all fields!');
          return;
        }

        await addDoc(collection(db, 'soldItems'), {
          product: product,
          qty: qty,
          price: price,
          date: date,
          place: place,
        });

        setProduct("");
        setQty("");
        setPrice("");
        setDate("");
        setPlace(" ");
    };

    const deleteItem = async (id) => {
        await deleteDoc(doc(db, 'soldItems', id));
    };

    useEffect(() => {
        const q = query(collection(db, 'soldItems'));
        const unsubscribe = onSnapshot(q, (querySnapshot) => {
          let arr = [];
          querySnapshot.forEach((doc) => {
            arr.push({ ...doc.data(), id: doc.id });
          });
          setSoldArr(arr);
        });
        return () => unsubscribe();
    }, []);
    

    return (
        <Container>
            <div className='main-content'>
                <div className='page-content'>
                    <div className='container-fluid'>
                        <Form className='form'>
                            <Form.Group>
                                <Form.Label>Product</Form.Label>
                                <Form.Select value={product} onChange={(e) => setProduct(e.target.value)}>
                                    <option></option>
                                    <option >Korona</option>
                                    <option >Saga</option>
                                    <option >Svenske</option>
                                </Form.Select>
                            </Form.Group>
                            
                            <Form.Group>
                                <Form.Label>Qty</Form.Label>
                                <Form.Control placeholder='Qty...' type='number' value={qty} onChange={(e) => setQty(e.target.value)}/>
                            </Form.Group>
                            
                            <Form.Group>
                                <Form.Label>Price</Form.Label>
                                <Form.Control placeholder='Price...' type='number' value={price} onChange={(e) => setPrice(e.target.value)}/>
                            </Form.Group>
                            
                            <Form.Group>
                                <Form.Label>Place</Form.Label>
                                <Form.Select value={place} onChange={(e) => setPlace(e.target.value)}>
                                    <option></option>
                                    <option>Tåsen</option>
                                    <option>Ullevål</option>
                                    <option>Marienlyst</option>
                                </Form.Select>
                            </Form.Group>

                            <Form.Group>
                                <Form.Label>Date</Form.Label>
                                <Form.Control placeholder='Qty...' type='date' value={date} onChange={(e) => setDate(e.target.value)}/>
                            </Form.Group>
                        </Form>
                        
                        <div className='button-row'>
                            <div className='button-container'>
                                <Button onClick={createSoldItem}>Add</Button>
                            </div>
                        </div>

                        <div className='table-row'>
                            <h4 style={{textAlign: "center", paddingBottom: "40px"}}>History</h4>
                            <div className='table-container'>
                                <Table style={{border: "1px solid black", width:"75%"}}>
                                    <thead>
                                        <tr>
                                            <th>Date</th>
                                            <th>Product</th>
                                            <th>Place</th>
                                            <th>Price</th>
                                            <th>Qty</th>
                                            <th></th>
                                        </tr>
                                    </thead>

                                    <tbody>
                                        {soldArr.sort((a,b) => new Date(a.date).getTime()-new Date(b.date).getTime()).map((obj, index) => (
                                            <tr key={index}>
                                                <td>{obj.date}</td>
                                                <td>{obj.product}</td>
                                                <td>{obj.place}</td>
                                                <td>{obj.price}</td>
                                                <td>{obj.qty}</td>
                                                <td><i onClick={() => deleteItem(obj.id)}><DeleteIcon sx={{color: "red", cursor: "pointer"}}/></i></td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </Table>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </Container>
    )
}

const Container = styled.div`
    width: 100%;
    
    background-color: grey;

    .main-content{
        margin-left: 250px;
        overflow: hidden;

        .page-content{
            padding: 94px 12px 60px;
        }
    }

    .form{
        display: flex;
        margin-top: 150px;
        justify-content: center;
        
        div{
            padding: 20px;
        }
    }

    .button-container{
        display: flex;
        justify-content: center;
    }

    .table-row{
        padding: 20px;
        margin-top: 150px;
        .table-container{
            display: flex;
            justify-content: center;
        }
    }
`;
