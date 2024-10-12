let myChart1; // Declare myChart1 as a global variable
let myChart2; // Declare myChart2 as a global variable

let myChart1; // Declare myChart1 as a global variable
let myChart2; // Declare myChart2 as a global variable
let myChart1Duplicate; // Duplicate for myChart1
let myChart2Duplicate; 


function decidePPF() {
    if (countryOneMPLRatioGood1 > countryTwoMPLRatioGood1) {
        plotPPF1();
        console.log('plotPPF1 ');
    } else {
        plotPPF2();
        console.log('plotPPF2 ');
    }

}



function plotPPF1() { // Here I have a case when country one has a comparative advantage in good One
    // Calculate the midpoints
    const midpoint1X = MPLcountryOneGoodOne * countryOneLabor / 2;
    const midpoint1Y = MPLcountryOneGoodTwo * countryOneLabor / 2;

    const midpoint2X = MPLcountryTwoGoodOne * countryTwoLabor / 2;
    const midpoint2Y = MPLcountryTwoGoodTwo * countryTwoLabor / 2;

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

    const config1Duplicate = {
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
                    display: true // Show legend for duplicate chart
                },
                tooltip: {
                    enabled: true, // Enable tooltips
                    callbacks: {
                        // Show x and y values when hovering over a point
                        label: function(context) {
                            const xValue = context.raw.x.toFixed(2);  // Format to two decimal places
                            const yValue = context.raw.y.toFixed(2);  // Format to two decimal places
                            return `(${xValue}, ${yValue})`; // Display as (x, y)
                        }
                    }
                }
            }
        }
    };

    const chartOneDuplicateElements = document.querySelectorAll('#myChartDuplicate1'); // Assuming you have a separate element for the duplicate
    chartOneDuplicateElements.forEach((chartElement, index) => {
        myChart1Duplicate = new Chart(chartElement, config1Duplicate);
    });

    const config2Duplicate = {
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
                    display: true // Show legend for duplicate chart
                }
            }
        }
    };

    const chartTwoDuplicateElements = document.querySelectorAll('#myChartDuplicate2'); // Assuming you have a separate element for the duplicate
    chartTwoDuplicateElements.forEach((chartElement, index) => {
        myChart2Duplicate = new Chart(chartElement, config2Duplicate);
    });


}



function plotPPF2() {  // Here I have a case when country one has a comparative advantage in good Two
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

    const config1Duplicate = {
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
                    display: true // Show legend for duplicate chart
                }
            }
        }
    };

    const chartOneDuplicateElements = document.querySelectorAll('#myChartDuplicate1'); // Assuming you have a separate element for the duplicate
    chartOneDuplicateElements.forEach((chartElement, index) => {
        myChart1Duplicate = new Chart(chartElement, config1Duplicate);
    });

    const config2Duplicate = {
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
                    display: true // Show legend for duplicate chart
                }
            }
        }
    };

    const chartTwoDuplicateElements = document.querySelectorAll('#myChartDuplicate2'); // Assuming you have a separate element for the duplicate
    chartTwoDuplicateElements.forEach((chartElement, index) => {
        myChart2Duplicate = new Chart(chartElement, config2Duplicate);
    });

}

function decidePPF_animation() {
  if (countryOneMPLRatioGood1 > countryTwoMPLRatioGood1) {
      PPF_animation1();
      
      console.log('PPF_animation1 ');
  } else {
      PPF_animation2();
    
      console.log('PPF_animation2 ');
  }
}


function calculateYIntercept(x1, y1) {
    slope = y1/x1;
    // Calculate the y-intercept using the formula: y = mx + b => b = y - mx
    const yIntercept = y1 + slope * x1;
    console.log(`The y-intercept is: ${yIntercept}`);
    return yIntercept;
}

function calculateXIntercept(x1, y1) {
    slope = x1/y1;
    console.log(`The slope is: ${slope}`);
    console.log(`The x1 is: ${x1}`);
    console.log(`The y1 is: ${y1}`);
    // Calculate the y-intercept using the formula: y = mx + b => b = y - mx
    const xIntercept = MPLcountryTwoGoodTwo * countryTwoLabor * slope;
    console.log(`The x-intercept is: ${xIntercept}`);
    return xIntercept;
}

function calculateXIntercept2(x1, y1) {
    slope = x1/y1;
    console.log(`The slope is: ${slope}`);
    console.log(`The x1 is: ${x1}`);
    console.log(`The y1 is: ${y1}`);
    // Calculate the y-intercept using the formula: y = mx + b => b = y - mx
    const xIntercept = MPLcountryTwoGoodOne * countryTwoLabor * slope;
    console.log(`The x-intercept is: ${xIntercept}`);
    return xIntercept;
}

function PPF_animation1() {

  const midpoint1X = MPLcountryOneGoodOne * countryOneLabor / 2;
  const midpoint1Y = (1/worldPrice) * countryOneLabor / 2;

  const midpoint2X = (1/worldPrice) * countryTwoLabor  / 2;
  const midpoint2Y = MPLcountryTwoGoodTwo * countryTwoLabor / 2;

  //const differenceCountryOne = midpoint1Y1 - midpoint1Y;
  //const differenceCountryTwo = midpoint2X1 - midpoint2X;

  const yIntercept = calculateYIntercept(midpoint1X, midpoint2Y);

  const steps = 0.1;
  // Define the data for the PPF after trade (green line) for both charts

  const ppfAfterTradeData1 = [
      { x: 0, y: yIntercept}, // Example points
      { x: midpoint1X, y: midpoint2Y },
      { x: MPLcountryOneGoodOne * countryOneLabor, y: 0 }
  ];

  const curveData1AfterTrade = [];

  const c1 = yIntercept / 2;
  const c2_initial = (MPLcountryOneGoodOne * countryOneLabor) / 2;
  const U = Math.sqrt(c1) * Math.sqrt(c2_initial);
  const a = (midpoint1X - 1)/2;
  
  for (let i = a; i <= (MPLcountryOneGoodOne * countryOneLabor) - 1; i += steps) {
      const x = i;
      const c2 = Math.pow(U / Math.sqrt(x), 2);
      curveData1AfterTrade.push({ x: x, y: c2 });
  }


  const xIntercept = calculateXIntercept(midpoint1X, midpoint2Y);


  const ppfAfterTradeData2 = [
      { x: 0, y: MPLcountryTwoGoodTwo * countryTwoLabor},
      { x: midpoint1X, y: midpoint2Y }, // Example points
      { x: xIntercept, y: 0 }
  ];

  const curveData2AfterTrade = [];

  const c1_star = (MPLcountryTwoGoodTwo * countryTwoLabor) / 2;
  const c2_star_initial = xIntercept / 2;
  const U_star = Math.sqrt(c1_star) * Math.sqrt(c2_star_initial);
  const a_star = (xIntercept - xIntercept*3/4);
  
  for (let i = a_star; i <= (xIntercept) - 1; i += steps) {
      const x = i;
      const c2_star = Math.pow(U_star / Math.sqrt(x), 2);
      curveData2AfterTrade.push({ x: x, y: c2_star });
  }

  // Add the green line to the first chart
  myChart1.data.datasets.push({
      label: countryOneName + ' PPF After Trade',
      data: ppfAfterTradeData1,
      fill: false,
      borderColor: '#7B2EDF',
      tension: 0.1,
      pointBackgroundColor: ['#7B2EDF', 'red', '#7B2EDF'] 
  });

  myChart1.data.datasets.push({
      label: countryTwoName + ' Indifference Curve',
      data: curveData1AfterTrade,
      fill: false,
      borderColor: 'rgba(192, 75, 75, 0.5)',
      tension: 0.1,
      pointRadius: 0
       // Remove the points on the curve
  });
  // Add the green line to the second chart
  myChart2.data.datasets.push({
      label: countryTwoName + ' PPF After Trade',
      data: ppfAfterTradeData2,
      fill: false,
      borderColor: '#7B2EDF',
      tension: 0.1,
      pointBackgroundColor: ['#7B2EDF', 'red', '#7B2EDF'] 
  });

  myChart2.data.datasets.push({
      label: countryTwoName + ' Indifference Curve',
      data: curveData2AfterTrade,
      fill: false,
      borderColor: 'rgba(192, 75, 75, 0.5)',
      tension: 0.1,
      pointRadius: 0
       // Remove the points on the curve
  });
  

  
  // Update both charts to display the new datasets
  myChart1.update();
  myChart2.update();
}



function PPF_animation2() {

  const midpoint1X = MPLcountryOneGoodTwo * countryOneLabor / 2;
  const midpoint1Y = (1/worldPrice) * countryOneLabor / 2;

  const midpoint2X = (1/worldPrice) * countryTwoLabor  / 2;
  const midpoint2Y = MPLcountryTwoGoodOne * countryTwoLabor / 2;


  const yIntercept = calculateYIntercept(midpoint1X, midpoint2Y);

  const steps = 0.1;
  // Define the data for the PPF after trade (green line) for both charts

  const ppfAfterTradeData1 = [
      { x: 0, y: yIntercept}, // Example points
      { x: midpoint1X, y: midpoint2Y },
      { x: MPLcountryOneGoodTwo * countryOneLabor, y: 0 }
  ];

  const curveData1AfterTrade = [];

  const c1 = yIntercept / 2;
  const c2_initial = (MPLcountryOneGoodTwo * countryOneLabor) / 2;
  const U = Math.sqrt(c1) * Math.sqrt(c2_initial);
  const a = (midpoint1X - 1)/2;
  
  for (let i = a; i <= (MPLcountryOneGoodTwo * countryOneLabor) - 1; i += steps) {
      const x = i;
      const c2 = Math.pow(U / Math.sqrt(x), 2);
      curveData1AfterTrade.push({ x: x, y: c2 });
  }


  const xIntercept = calculateXIntercept2(midpoint1X, midpoint2Y);


  const ppfAfterTradeData2 = [
      { x: 0, y: MPLcountryTwoGoodOne * countryTwoLabor},
      { x: midpoint1X, y: midpoint2Y }, // Example points
      { x: xIntercept, y: 0 }
  ];

  const curveData2AfterTrade = [];

  const c1_star = (MPLcountryTwoGoodOne * countryTwoLabor) / 2;
  const c2_star_initial = xIntercept / 2;
  const U_star = Math.sqrt(c1_star) * Math.sqrt(c2_star_initial);
  const a_star = xIntercept - xIntercept*3/4;
  
  for (let i = a_star; i <= (xIntercept) - 1; i += steps) {
      const x = i;
      const c2_star = Math.pow(U_star / Math.sqrt(x), 2);
      curveData2AfterTrade.push({ x: x, y: c2_star });
  }

  // Add the green line to the first chart
  myChart1.data.datasets.push({
      label: countryOneName + ' PPF After Trade',
      data: ppfAfterTradeData1,
      fill: false,
      borderColor: '#7B2EDF',
      tension: 0.1,
      pointBackgroundColor: ['#7B2EDF', 'red', '#7B2EDF'] 
  });

  myChart1.data.datasets.push({
      label: countryTwoName + ' Indifference Curve',
      data: curveData1AfterTrade,
      fill: false,
      borderColor: 'rgba(192, 75, 75, 0.5)',
      tension: 0.1,
      pointRadius: 0
       // Remove the points on the curve
  });
  // Add the green line to the second chart
  myChart2.data.datasets.push({
      label: countryTwoName + ' PPF After Trade',
      data: ppfAfterTradeData2,
      fill: false,
      borderColor: '#7B2EDF',
      tension: 0.1,
      pointBackgroundColor: ['#7B2EDF', 'red', '#7B2EDF'] 
  });

  myChart2.data.datasets.push({
      label: countryTwoName + ' Indifference Curve',
      data: curveData2AfterTrade,
      fill: false,
      borderColor: 'rgba(192, 75, 75, 0.5)',
      tension: 0.1,
      pointRadius: 0
       // Remove the points on the curve
  });
  

  
  // Update both charts to display the new datasets
  myChart1.update();
  myChart2.update();
}


