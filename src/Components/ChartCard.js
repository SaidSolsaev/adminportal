import React, { useEffect } from 'react'
import { Card } from 'react-bootstrap'
import ApexCharts from 'apexcharts'

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


export default function ChartCard() {
    
    
    return (
        <Card>
            <Card.Title>
                Salg
            </Card.Title>
            <Card.Body>
                <div id='chart'></div>
            </Card.Body>
        </Card>
    )
}
