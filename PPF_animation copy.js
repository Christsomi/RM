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
  
  
