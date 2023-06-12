import React from 'react'
import { Card } from 'react-bootstrap'
import ApexCharts from 'apexcharts'
import MyChart from './MyChart';




export default function ChartCard() {
    
    
    return (
        <Card style={{height: "600px"}}>
            <Card.Title style={{textAlign: "center", padding: "20px"}}>
                Salg
            </Card.Title>
            <Card.Body>
                <MyChart />
            </Card.Body>
        </Card>
    )
}
