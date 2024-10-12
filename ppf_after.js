let myChart1; // Declare myChart1 as a global variable
let myChart2; // Declare myChart2 as a global variable

let movLine;

function plot_mov(chart, initialData, finalData, steps) {
    // Remove existing mov line if it exists
    if (movLine) {
        chart.data.datasets = chart.data.datasets.filter(dataset => dataset.label !== 'MOV Line');
    }

    // Add initial mov line (same as PPF)
    movLine = {
        label: 'MOV Line',
        data: initialData,
        fill: false,
        borderColor: 'rgb(255, 99, 132)',
        tension: 0.1,
        borderDash: [5, 5] // Make the line dashed
    };

    chart.data.datasets.push(movLine);
    chart.update();
}

function anim(chart, initialData, finalData, steps) {
    let currentStep = 0;

    function animate() {
        if (currentStep < steps) {
            // Calculate intermediate points
            const newData = initialData.map((point, index) => ({
                x: point.x + (finalData[index].x - point.x) * (currentStep / steps),
                y: point.y + (finalData[index].y - point.y) * (currentStep / steps)
            }));

            // Update mov line data
            movLine.data = newData;
            chart.update();

            currentStep++;
            requestAnimationFrame(animate);
        }
    }

    animate();
}



function decidePPFat() {
    if (countryOneMPLRatioGood1 > countryTwoMPLRatioGood1) {
        plotPPF1at();
        const initialData = [
            { x: 0, y: MPLcountryOneGoodTwo * countryOneLabor },
            { x: midpoint1X, y: midpoint1Y },
            { x: MPLcountryOneGoodOne * countryOneLabor, y: 0 }
        ];
        const finalData = [
            { x: 0, y: newYIntercept },
            { x: newMidpointX, y: newMidpointY },
            { x: newXIntercept, y: 0 }
        ];
        
        plot_mov(myChart1, initialData, initialData, 60);
        anim(myChart1, initialData, finalData, 60);

        console.log('plotPPF1 ');
    } else {
        plotPPF2at();
        console.log('plotPPF2 ');
    }

}

function calculateYIntercept(x1, y1, slope) {
    // Calculate the y-intercept using the formula: y = mx + b => b = y - mx
    const yIntercept = y1 - (slope * x1);
    console.log(`The y-intercept is: ${yIntercept}`);
    return yIntercept;
}


function plotPPF1at() { // Here I have a case when country one has a comparative advantage in good One
    // Calculate the midpoints
    const midpoint1X = MPLcountryOneGoodOne * countryOneLabor / 2;
    const midpoint1Y = MPLcountryOneGoodTwo * countryOneLabor / 2;

    const midpoint2X = MPLcountryTwoGoodOne * countryTwoLabor / 2;
    const midpoint2Y = MPLcountryTwoGoodTwo * countryTwoLabor / 2;

    calculateYIntercept(midpoint1X, midpoint2Y , worldPrice)

    // Calculate the quadratic curve points for the first country
    const curveData1 = [];
    const steps = 0.1; // Number of points on the curve
    
    const c1 = (MPLcountryOneGoodTwo * countryOneLabor) / 2;
    const c2_initial = (MPLcountryOneGoodOne * countryOneLabor) / 2;
    const U = Math.sqrt(c1) * Math.sqrt(c2_initial);
    const a = (midpoint1X - 1)/2;
    
    for (let i = a; i <= (MPLcountryOneGoodOne * countryOneLabor) - 1; i += steps) {
        const x = i;
        const c2 = Math.pow(U / Math.sqrt(x), 2);
        curveData1.push({ x: x, y: c2 });
    }

    // Data for the first chart
    const data1 = {
        labels: [0, midpoint1X, MPLcountryOneGoodOne * countryOneLabor],
        datasets: [{
            label: countryOneName + ' PPF Line',
            data: [
                { x: 0, y: MPLcountryOneGoodTwo * countryOneLabor },
                { x: midpoint1X, y: midpoint1Y }, // Midpoint
                { x: MPLcountryOneGoodOne * countryOneLabor, y: 0 }
            ],
            fill: false,
            borderColor: 'rgb(75, 192, 192)',
            tension: 0.1,
            pointBackgroundColor: ['rgb(75, 192, 192)', 'red', 'rgb(75, 192, 192)'] // Color for midpoint
        }, {
            label: countryOneName + ' Indifference Curve',
            data: curveData1,
            fill: false,
            borderColor: 'rgba(192, 75, 75, 0.5)',
            tension: 0.1,
            pointRadius: 0 // Remove the points on the curve
        }]
    };

    // Configuration options for the first chart
    const config1 = {
        type: 'line',
        data: data1,
        options: {
            scales: {
                x: {
                    type: 'linear',
                    position: 'bottom',
                    ticks: {
                        stepSize: 1
                    }
                },
                y: {
                    type: 'linear',
                    position: 'left'
                }
            },
            plugins: {
                legend: {
                    display: false // Hide the legend
                }
            }
        }
    };

    // Create the first chart
    const chartOneElements = document.querySelectorAll('#myChart');
    chartOneElements.forEach((chartElement, index) => {
        myChart1 = new Chart(chartElement, config1);
    });

    // Calculate the quadratic curve points for the second country
    const curveData2 = [];

    const c1_star = (MPLcountryTwoGoodTwo * countryTwoLabor) / 2;
    const c2_star_initial = (MPLcountryTwoGoodOne * countryTwoLabor) / 2;
    const U_star = Math.sqrt(c1_star) * Math.sqrt(c2_star_initial);
    const a_star = (midpoint2X - 1)/2;
    
    for (let i = a_star; i <= (MPLcountryTwoGoodOne * countryTwoLabor) - 1; i += steps) {
        const x = i;
        const c2_star = Math.pow(U_star / Math.sqrt(x), 2);
        curveData2.push({ x: x, y: c2_star });
    }

    // Data for the second chart
    const data2 = {
        labels: [0, midpoint2X, MPLcountryTwoGoodOne * countryTwoLabor],
        datasets: [{
            label: countryTwoName + ' PPF Line',
            data: [
                { x: 0, y: MPLcountryTwoGoodTwo * countryTwoLabor },
                { x: midpoint2X, y: midpoint2Y }, // Midpoint
                { x: MPLcountryTwoGoodOne * countryTwoLabor, y: 0 }
            ],
            fill: false,
            borderColor: 'rgb(75, 192, 192)',
            tension: 0.1,
            pointBackgroundColor: ['rgb(75, 192, 192)', 'red', 'rgb(75, 192, 192)'] // Color for midpoint
        }, {
            label: countryTwoName + ' Indifference Curve',
            data: curveData2,
            fill: false,
            borderColor: 'rgba(192, 75, 75, 0.5)',
            tension: 0.1,
            pointRadius: 0 // Remove the points on the curve
        }]
    };

    // Configuration options for the second chart
    const config2 = {
        type: 'line',
        data: data2,
        options: {
            scales: {
                x: {
                    type: 'linear',
                    position: 'bottom',
                    ticks: {
                        stepSize: 1
                    }
                },
                y: {
                    type: 'linear',
                    position: 'left'
                }
            },
            plugins: {
                legend: {
                    display: false // Hide the legend
                }
            }
        }
    };

    // Create the second chart
    const chartTwoElements = document.querySelectorAll('#myChart2');
    chartTwoElements.forEach((chartElement, index) => {
        myChart2 = new Chart(chartElement, config2);
    });

}


function plotPPF2at() {  // Here I have a case when country one has a comparative advantage in good Two
    // Calculate the midpoints
    const midpoint1X = MPLcountryOneGoodTwo * countryOneLabor / 2;
    const midpoint1Y = MPLcountryOneGoodOne * countryOneLabor / 2;

    const midpoint2X = MPLcountryTwoGoodTwo * countryTwoLabor / 2;
    const midpoint2Y = MPLcountryTwoGoodOne * countryTwoLabor / 2;

    // Calculate the quadratic curve points for the first country
    const curveData1 = [];
    const steps = 0.1; // Number of points on the curve
    
    const c1 = (MPLcountryOneGoodOne * countryOneLabor) / 2;
    const c2_initial = (MPLcountryOneGoodTwo * countryOneLabor) / 2;
    const U = Math.sqrt(c1) * Math.sqrt(c2_initial);
    const a = (midpoint1X - 1)/2;
    
    for (let i = a; i <= (MPLcountryOneGoodTwo * countryOneLabor) - 1; i += steps) {
        const x = i;
        const c2 = Math.pow(U / Math.sqrt(x), 2);
        curveData1.push({ x: x, y: c2 });
    }

    // Data for the first chart
    const data1 = {
        labels: [0, midpoint1X, MPLcountryOneGoodTwo * countryOneLabor],
        datasets: [{
            label: countryOneName + ' PPF Line',
            data: [
                { x: 0, y: MPLcountryOneGoodOne * countryOneLabor },
                { x: midpoint1X, y: midpoint1Y }, // Midpoint
                { x: MPLcountryOneGoodTwo * countryOneLabor, y: 0 }
            ],
            fill: false,
            borderColor: 'rgb(75, 192, 192)',
            tension: 0.1,
            pointBackgroundColor: ['rgb(75, 192, 192)', 'red', 'rgb(75, 192, 192)'] // Color for midpoint
        }, {
            label: countryOneName + ' Indifference Curve',
            data: curveData1,
            fill: false,
            borderColor: 'rgba(192, 75, 75, 0.5)',
            tension: 0.1,
            pointRadius: 0 // Remove the points on the curve
        }]
    };

    // Configuration options for the first chart
    const config1 = {
        type: 'line',
        data: data1,
        options: {
            scales: {
                x: {
                    type: 'linear',
                    position: 'bottom',
                    ticks: {
                        stepSize: 1
                    }
                },
                y: {
                    type: 'linear',
                    position: 'left'
                }
            }
        }
    };

    // Create the first chart
    const chartOneElements = document.querySelectorAll('#myChart');
    chartOneElements.forEach((chartElement, index) => {
        myChart1 = new Chart(chartElement, config1);
    });

    // Calculate the quadratic curve points for the second country
    const curveData2 = [];

    const c1_star = (MPLcountryTwoGoodOne * countryTwoLabor) / 2;
    const c2_star_initial = (MPLcountryTwoGoodTwo * countryTwoLabor) / 2;
    const U_star = Math.sqrt(c1_star) * Math.sqrt(c2_star_initial);
    const a_star = (midpoint2X - 1)/2;
    
    for (let i = a_star; i <= (MPLcountryTwoGoodTwo * countryTwoLabor) - 1; i += steps) {
        const x = i;
        const c2_star = Math.pow(U_star / Math.sqrt(x), 2);
        curveData2.push({ x: x, y: c2_star });
    }

    // Data for the second chart
    const data2 = {
        labels: [0, midpoint2X, MPLcountryTwoGoodTwo * countryTwoLabor],
        datasets: [{
            label: countryTwoName + ' PPF Line',
            data: [
                { x: 0, y: MPLcountryTwoGoodOne * countryTwoLabor },
                { x: midpoint2X, y: midpoint2Y }, // Midpoint
                { x: MPLcountryTwoGoodTwo * countryTwoLabor, y: 0 }
            ],
            fill: false,
            borderColor: 'rgb(75, 192, 192)',
            tension: 0.1,
            pointBackgroundColor: ['rgb(75, 192, 192)', 'red', 'rgb(75, 192, 192)'] // Color for midpoint
        }, {
            label: countryTwoName + ' Indifference Curve',
            data: curveData2,
            fill: false,
            borderColor: 'rgba(192, 75, 75, 0.5)',
            tension: 0.1,
            pointRadius: 0 // Remove the points on the curve
        }]
    };

    // Configuration options for the second chart
    const config2 = {
        type: 'line',
        data: data2,
        options: {
            scales: {
                x: {
                    type: 'linear',
                    position: 'bottom',
                    ticks: {
                        stepSize: 1
                    }
                },
                y: {
                    type: 'linear',
                    position: 'left'
                }
            }
        }
    };

    // Create the second chart
    const chartTwoElements = document.querySelectorAll('#myChart2');
    chartTwoElements.forEach((chartElement, index) => {
        myChart2 = new Chart(chartElement, config2);
    });

}

