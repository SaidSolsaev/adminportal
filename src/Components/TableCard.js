import React from 'react'
import { Card } from 'react-bootstrap'
import MyTable from './MyTable'

export default function TableCard() {
    return (
        <Card>
            <Card.Title>
                Last Transactions
            </Card.Title>
            <Card.Body>
                <MyTable />
            </Card.Body>
        </Card>
    )
}
