import React from 'react'
import { Card } from 'react-bootstrap'
import ApexCharts from 'apexcharts'




export default function ChartCard() {
    const date = new Date().getMonth();
    var months = Array('Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec')
    var places = Array("Tåsen", "Marienlyst", "Ullevål")
    //funker ikke?
    
    window.onload = function(){
        var options = {
            chart : {
                type: "bar"
            },
        
            series: [{
                name: "Tåsen",
                data: [200, 400, 600]
            },{
                name: "Ullevål",
                data: [200, 400, 600]
            },{
                name: "Marienlyst",
                data: [200, 400, 600]
            }],
    
            dataLabels:{
                enabled: false
            },
    
            stroke:{
                show: true,
                width: 2
            },
    
            xaxis:{
                categories: [months[date -2],months[date-1], months[date]]
            }
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
