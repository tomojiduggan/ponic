import React from "react"
import Chart from 'chart.js';

class Graph extends React.Component{
    load(){
        let ctx = document.getElementById("graph").getContext("2d")
        var graph = new Chart(ctx, {
            type: 'line',
            data: {
                labels: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
                maintainAspectRatio: false,
                datasets: [{
                label: 'Nitrates',
                data: [12, 19, 3, 17, 6, 3, 7],
                backgroundColor: "rgba(153,255,51,0.0)",
                borderColor: "rgba(0,255,255,1)"
                }, {
                label: 'Nitrites',
                data: [2, 29, 5, 5, 2, 3, 10],
                backgroundColor: "rgba(0,0,0,0)",
                borderColor: "rgba(255,255,0,1)"

                }]
            }
        });
        
    }
    componentDidMount(){
        this.load()
    }
    render(){
        return(
            <div id="graph-parent">
                <canvas id="graph" aria-label="Hello ARIA World" role="img"></canvas>
            </div>
        )
    }
}

export default Graph;