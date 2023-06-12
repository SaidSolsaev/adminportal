import React from 'react'
import Chart from "react-apexcharts";
import { GetSoldSum } from '../Data/TableData';

const MyChart = () => {
    const date = new Date().getMonth();
    var months = Array('Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec')
    var places = Array("Tåsen", "Marienlyst", "Ullevål")
    console.log(date-1, "chart date")
    const series = [
        {
            name: "Tåsen",
            data: [GetSoldSum("Tåsen", date-1),GetSoldSum("Tåsen", date), GetSoldSum("Tåsen", date+1)]
        },
        {
            name: "Marienlyst",
            data: [GetSoldSum("Marienlyst", date-1),GetSoldSum("Marienlyst", date), GetSoldSum("Marienlyst", date+1)]
        },
        {
            name: "Ullevål",
            data: [GetSoldSum("Ullevål", date-1),GetSoldSum("Ullevål", date), GetSoldSum("Ullevål", date+1)]
        }

    ];

    const options = {
        
        chart : {id: "bar-chart"},
        xaxis: {
            categories: [months[date -2],months[date-1], months[date]]
        }
        
    }
        
    
    return (
        <div>
            <Chart options={options} series={series} type='bar' />
        </div>
    )
}

export default MyChart;