import React from 'react'
import { Card } from 'react-bootstrap'
import ApexCharts from 'apexcharts'




export default function ChartCard() {
    window.onload = function(){

        var options = {
            chart : {
                type: "bar"
            },
        
            series: [{
                name: "Tåsen",
                data: [4452,6685,10025,12554,12205]
            },{
                name: "Ullevål",
                data: [1425,4144,25541,2554,3351]
            },{
                name: "Marienlyst",
                data: [22545,4414,22414,25414,25514]
            }],

            dataLabels:{
                enabled: false
            },

            stroke:{
                show: true,
                width: 2
            },

            xaxis:{
                categories: ["Mai", "Jun", "Jul", "Aug", "Sep"],
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
