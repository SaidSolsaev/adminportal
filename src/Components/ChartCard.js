import React from 'react'
import { Card } from 'react-bootstrap'
import ApexCharts from 'apexcharts'
import MyChart from './MyChart';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';



export default function ChartCard() {
    
    
    return (
        <Card>
            <Card.Title style={{textAlign: "center", padding: "20px"}}>
                Salg
            </Card.Title>
            <Card.Body>
                <MyChart />
                <div style={{display: "flex", justifyContent: "space-between"}}>
                    <i style={{cursor: "pointer"}}><ArrowBackIosNewIcon /></i>
                    <i style={{cursor: "pointer"}}><ArrowForwardIosIcon /></i>
                </div>
            </Card.Body>
        </Card>
    )
}
