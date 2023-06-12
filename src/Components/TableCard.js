import React from 'react'
import { Card } from 'react-bootstrap'
import MyTable from './MyTable'

export default function TableCard() {
    return (
        <Card style={{justifyContent: "center"}}>
            <Card.Title style={{textAlign: "center", padding: "20px"}}>
                Last Transactions
            </Card.Title>
            <Card.Body>
                <MyTable />
            </Card.Body>
        </Card>
    )
}
