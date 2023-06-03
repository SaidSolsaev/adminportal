import React from 'react'
import { Card } from 'react-bootstrap'
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

export default function MyCard({title, text, precentage}) {


    return (
        <Card style={{padding: "20px", boxShadow: ""}}>
            
            <Card.Body style={{display: "flex"}}>
                <div>
                    {precentage && <CircularProgressbar value={precentage} text={`${precentage}%`} maxValue={100} minValue={0}/>}
                </div>
                {title}
                {text}
            </Card.Body>
        </Card>
    )
}
