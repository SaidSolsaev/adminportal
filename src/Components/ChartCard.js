import React from 'react'
import { Card } from 'react-bootstrap'
import ApexCharts from 'apexcharts'
import { TableData } from '../Data/TableData'
import { GetSoldSum } from '../Data/TableData'



export default function ChartCard() {
    const date = new Date().getMonth();
    console.log(date)
    var months = Array('Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec')
    var places = Array("Tåsen", "Marienlyst", "Ullevål")
    var sum1 = Array(GetSoldSum("Tåsen", date-1), GetSoldSum("Tåsen", date), GetSoldSum("Tåsen", date+1))
    var sum2 = GetSoldSum(places[1], date)

    

    window.onload = function(){

        var options = {
            chart : {
                type: "bar"
            },
        
            series: [{
                name: "Tåsen",
                data: sum1
            },{
                name: "Ullevål",
                data: sum1
            },{
                name: "Marienlyst",
                data: sum1
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
