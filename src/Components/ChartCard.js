import React, { useEffect } from 'react'
import { Card } from 'react-bootstrap'
import ApexCharts from 'apexcharts'




export default function ChartCard() {
    window.onload = function(){

        var options = {
            chart : {
                type: "bar"
            },
        
            series: [{
                data: [
                    {
                        x: "Jun",
                        y: 22042
                    },{
                        x: "Jul",
                        y: 50054
                    },{
                        x: "Aug",
                        y: 350555
                    }
                ]
            }]
        }
        
        var chart = new ApexCharts(document.querySelector("#chart") ,options)
        chart.render()
    }
    
    return (
        <Card style={{height: "600px"}}>
            <Card.Title style={{textAlign: "center", padding: "20px"}}>
                Salg
            </Card.Title>
            <Card.Body>
                <div id='chart'></div>
            </Card.Body>
        </Card>
    )
}
