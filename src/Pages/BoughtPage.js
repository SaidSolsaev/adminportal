import React from 'react'
import styled from 'styled-components'
import { Form, Button, Table} from 'react-bootstrap';
import { useState, useEffect } from 'react';
import { db } from '../firebase-config';
import {query,collection,onSnapshot,doc,addDoc,deleteDoc,} from 'firebase/firestore';
import MyModal from '../Components/Modal';
import { toast } from 'react-toastify';
import { ToastContainer } from 'react-toastify';
import DeleteIcon from '@mui/icons-material/Delete';


export default function BoughtPage({showSidebar}) {
    const dato = new Date().toISOString().slice(0, 10)
    
    const [product, setProduct] = useState("");
    const [qty, setQty] = useState("");
    const [price, setPrice] = useState("");
    const [place, setPlace] = useState("");
    const [date, setDate] = useState(dato);
    const[boughtArr, setBoughtArr] = useState([]);

    const createSoldItem = async (e) => {
        e.preventDefault(e);
        if (product === '' || qty === "" || price === "" || date === "" ) {
            toast.error(`Fill in all fields`, {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            })
          return;
        }

        await addDoc(collection(db, 'bought'), {
          product: product,
          qty: qty,
          price: price,
          date: date,
          place: place,
        });
        setPlace("");
        setProduct("");
        setQty("");
        setPrice("");
        setDate(dato);

        toast.success(`Product successfully added`, {
            position: "top-center",
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
        })
    };

    const deleteItem = async (id) => {
        await deleteDoc(doc(db, 'soldItems', id));
    };

    useEffect(() => {
        const q = query(collection(db, 'bought'));
        const unsubscribe = onSnapshot(q, (querySnapshot) => {
          let arr = [];
          querySnapshot.forEach((doc) => {
            arr.push({ ...doc.data(), id: doc.id });
          });
          setBoughtArr(arr);
        });
        return () => unsubscribe();
    }, []);


    const [productArr, setProductArr] = useState([]);
    const [prodPrice, setProdPrice] = useState();

    useEffect(() => {
        const q = query(collection(db, 'products'));
        const unsubscribe = onSnapshot(q, (querySnapshot) => {
          let arr = [];
          querySnapshot.forEach((doc) => {
            arr.push({ ...doc.data(), id: doc.id });
          });
          setProductArr(arr);
        });
        return () => unsubscribe();
    }, [])

    useEffect(() =>{ 
        productArr.forEach((x) => {
            if (product === x.product){
                setProdPrice(x.price)
            }
        })
    }, [product])

    const [modalShow, setModalShow] = useState(false);

    return (
        <Container>
            <div className={showSidebar ? 'main-content' : "bigSide"}>
                <div className='page-content'>
                    <div className='container-fluid'>
                        <div className='heading'>
                            <h2 style={{textAlign: "center", marginTop: "150px"}}>Add bought products here</h2>
                        </div>
                        <Form className='form'>
                            <div className='inpContainer'>
                                <Form.Group>
                                    <Form.Label>Product</Form.Label>
                                    <Form.Select value={product} onChange={(e) => e.target.value === "newProduct" ? setModalShow(true) : setProduct(e.target.value)}>
                                        <option>Choose product...</option>
                                        {productArr.map((prd, index) => (
                                            prd.available ? 
                                            <option key={index}>{prd.product}</option> : null 
                                        ))}
                                        <option value="newProduct">Add new...</option>
                                    </Form.Select>
                                </Form.Group>
                                
                                <Form.Group>
                                    <Form.Label>Qty</Form.Label>
                                    <Form.Control placeholder='Qty...' type='number' value={qty} onChange={(e) => setQty(e.target.value)}/>
                                </Form.Group>
                                
                                <Form.Group>
                                    <Form.Label>Price</Form.Label>
                                    <Form.Control placeholder={prodPrice} type='number' value={price} onChange={(e) => setPrice(e.target.value)}/>
                                </Form.Group>

                                <Form.Group>
                                    <Form.Label>Place</Form.Label>
                                    <Form.Select value={place} onChange={(e) => setPlace(e.target.value)} placeholder='Choose place...'>
                                        <option></option>
                                        <option>Tåsen</option>
                                        <option>Ullevål</option>
                                        <option>Marienlyst</option>
                                    </Form.Select>
                                </Form.Group>

                                <Form.Group>
                                    <Form.Label>Date</Form.Label>
                                    <Form.Control placeholder='Date...' type='date' value={date} onChange={(e) => setDate(e.target.value)}/>
                                </Form.Group>
                            </div>
                            
                            <Button onClick={createSoldItem}>Add</Button>
                                
                        </Form>

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
                                        {boughtArr.sort((a,b) => new Date(a.date).getTime()-new Date(b.date).getTime()).map((obj, index) => (
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

            <MyModal show={modalShow} onHide={() => setModalShow(false)} 
                heading="Add the new product"
            />

            <ToastContainer />
        </Container>
    )
}

const Container = styled.div`
    width: 100%;
    background: grey;

    .main-content{
        margin-left: 250px;
        overflow: hidden;

        .page-content{
            padding: 94px 12px 60px;
        }
    }

    .bigSide{
        margin-left: 100px;
        overflow:hidden;

        .page-content{
            padding: 94px 12px 60px;    
        }
    }

    .form{
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 20px;
        justify-content: center;
        
        .inpContainer{
            div{
                padding: 5px;
                margin: 20px;
                
            }
        }
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


