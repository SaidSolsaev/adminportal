import React from 'react'
import { Card } from 'react-bootstrap'
import styled from 'styled-components';


export default function MyCard({title, text, icon}) {

    const price = parseInt(text);
    

    return (
        <Container>
            <Card style={{padding: "20px"}}>
                <Card.Body >
                    <div className='icon'>
                        <i>{icon}</i>
                    </div>
                    <div className='content'>
                        <h6>{title}</h6>
                        <p>{price.toFixed(2)} Kr</p>
                    </div>
                </Card.Body>
            </Card>
        </Container>
    );
}

const Container = styled.div`
    .card{
        animation-name: move;
        animation-duration: 3s;

        @keyframes move{
            0%{
                right: -1600px;
            }
            100%{
                right: 0px;
            }
            
        }
    }
    .card-body{
        display: flex;
        justify-content: space-between;
        align-items: center;
        
        h6{
            font-size: 28px;
            
        }
        p{
            font-size: 24px;
            
        }
        .icon{
            i{
                svg{
                    font-size: 50px;
                }
            }
        }
    }
`;
