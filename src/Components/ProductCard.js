import React from 'react'
import { Card } from 'react-bootstrap'
import 'react-circular-progressbar/dist/styles.css';
import styled from 'styled-components';
import CircleIcon from '@mui/icons-material/Circle';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

export default function ProductCard({product, deleteProduct, toggleAvailable}) {
    let price = parseInt(product.price);

    
    return (
        <Container>
            <Card style={{padding: "20px"}}>
                <div className='btnContainer'>
                    <button className='outBtn' onClick={() => toggleAvailable(product)}>
                        {product.available ? "Sold out?" : "In stock"}
                    </button>

                    <button className='deleteBtn' onClick={() => deleteProduct(product.id)}>
                            <DeleteForeverIcon/>
                    </button>  
                </div>
                <Card.Title>
                    {product.title}
                </Card.Title>
                <Card.Body>
                    
                    <p>{product.description}</p>
                    <p>{price.toFixed(2)} Kr</p>
                    <div className='available'>
                        <p>Available</p>
                        <i>{product.available ? 
                            <CircleIcon sx={{color: "green", width: "15px", marginLeft: "10px"}}/> 
                            : <CircleIcon sx={{color: "red", width: "15px", marginLeft: "10px"}}/>}
                        </i>
                    </div>
                    
                </Card.Body>
            </Card>
        </Container>
    );
}

const Container = styled.div`
    .card{
        .card-body{
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center; 
        }
    }

    .btnContainer{
        display: flex;
        justify-content: space-between;
    }

    .available{
        display: flex;
        justify-content: center;
    }

    .deleteBtn{
        position: absolute;
        top: 2px;
        right: 0px;
        border: none;
        background: none;
        color: red;
    }

    .outBtn{
        position: absolute;
        top: 2px;
        left: 0px;
        border: none;
        background: none;
        color: blue;
    }
`;