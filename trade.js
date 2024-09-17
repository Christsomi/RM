let time = 1000;
var time2 = 500;
var time3 = 1000;
let intervalId1, intervalId2, intervalId3, intervalId4, intervalId5, intervalId6, intervalcanvas; 
let countryOneLaborGoodOne;
let countryOneLaborGoodTwo;
let countryTwoLaborGoodOne;
let countryTwoLaborGoodTwo;

function displayGif() {
//document.getElementById('gif-trade').style.display = 'block';
fillCanvasWithColorTransition();    
decidePPF_animation();
document.getElementById('start-trade-button').style.display = 'none';
wageArrows();
wageMessages();
 }


let difference;
let steps;
let difference2;
let steps2;

function calculateDifference() {
  difference = Math.abs(worldPrice - countryOnePriceRatioGood1);
  steps = Math.round(difference / 0.01); // Ensure positive steps
  console.log("steps", steps);

  difference2 = Math.abs(countryTwoPriceRatioGood1 - worldPrice);
  steps2 = Math.round(difference2 / 0.01); // Ensure positive steps
  console.log("steps2", steps2);
}


let totalLabor;

function setIndustries() {
  countryOneLaborGoodOne = countryOneLabor % 2 === 0 ? countryOneLabor / 2 : (countryOneLabor + 1) / 2;
  countryOneLaborGoodTwo = countryOneLabor % 2 === 0 ? countryOneLabor / 2 : (countryOneLabor - 1) / 2;
  countryTwoLaborGoodOne = countryTwoLabor % 2 === 0 ? countryTwoLabor / 2 : (countryTwoLabor - 1) / 2;
  countryTwoLaborGoodTwo = countryTwoLabor % 2 === 0 ? countryTwoLabor / 2 : (countryTwoLabor + 1) / 2;

  totalLabor = countryOneLaborGoodOne + countryOneLaborGoodTwo;
  console.log("totalLabor", totalLabor);
} 

function displayIndustriesCountryOne() {
  document.querySelectorAll('[id^="industries_country_one"]').forEach(function(element) {
    element.style.display = 'block'});
}
function hideIndustriesCountryOne() {
  document.querySelectorAll('[id^="industries_country_one"]').forEach(function(element) {
    element.style.display = 'none'});
}

function displayIndustriesCountryTwo() {
  document.querySelectorAll('[id^="industries_country_two"]').forEach(function(element) {
    element.style.display = 'block'});
}
function hideIndustriesCountryTwo() {
  document.querySelectorAll('[id^="industries_country_two"]').forEach(function(element) {
    element.style.display = 'none'});
}

function adjustPrices() {
  if (countryOneMPLRatioGood1 > countryTwoMPLRatioGood1) {
    calculateDifference();
    document.querySelectorAll('[id^="arrow_price_country_one_good_one_green"]').forEach(function(element) {
      element.style.display = 'block'});
    
    document.querySelectorAll('[id^="arrow_price_country_one_good_two_red"]').forEach(function(element) {
      element.style.display = 'block'});

    document.querySelectorAll('[id^="arrow_price_country_two_good_two_green"]').forEach(function(element) {
      element.style.display = 'block'});
      
    document.querySelectorAll('[id^="arrow_price_country_two_good_one_red"]').forEach(function(element) {
      element.style.display = 'block'});

          document.querySelectorAll('[id^="arrow_labor_country_one_good_one_green"]').forEach(function(element) {
      element.style.display = 'block'});
        
    document.querySelectorAll('[id^="arrow_labor_country_one_good_two_red"]').forEach(function(element) {
      element.style.display = 'block'});
    

  } else if (countryTwoMPLRatioGood1 > countryOneMPLRatioGood1) {
    calculateDifference();

    document.querySelectorAll('[id^="arrow_price_country_one_good_one_red"]').forEach(function(element) {
      element.style.display = 'block'});
    
    document.querySelectorAll('[id^="arrow_price_country_one_good_two_green"]').forEach(function(element) {
      element.style.display = 'block'})

    document.querySelectorAll('[id^="arrow_price_country_two_good_two_red"]').forEach(function(element) {
      element.style.display = 'block'})
      
    document.querySelectorAll('[id^="arrow_price_country_two_good_one_green"]').forEach(function(element) {
      element.style.display = 'block'})

    document.querySelectorAll('[id^="arrow_labor_country_two_good_one_red"]').forEach(function(element) {
      element.style.display = 'block'})

    document.querySelectorAll('[id^="arrow_labor_country_two_good_two_green"]').forEach(function(element) {
      element.style.display = 'block'})
  } 
 
}


let CountryOnelaborStep;
let CountryTwoLaborStep;


function anotherGood() {
  document.getElementById('price-equalization-one').style.display = 'none';
  document.getElementById('price-st-good-one').style.display = 'none';
  document.getElementById('price-equalization-container-one').style.display = 'none';
  document.getElementById('price-equalization-two').style.display = 'block';
  document.getElementById('price-equalization-container-two').style.display = 'flex';
  document.getElementById('price-st-good-two').style.display = 'table';
}

function anotherGood2() {
  document.getElementById('price-equalization-two').style.display = 'none';
  document.getElementById('price-st-good-two').style.display = 'none';
  document.getElementById('price-equalization-container-two').style.display = 'none';
  document.getElementById('price-equalization-one').style.display = 'block';
  document.getElementById('price-equalization-container-one').style.display = 'flex';
  document.getElementById('price-st-good-one').style.display = 'table';
}


let speedValue = document.getElementById('speed-value');

function increaseSpeed() {
  clearInterval(intervalId1);
  clearInterval(intervalId2);
  clearInterval(intervalId3);
  clearInterval(intervalId4);
  if (time > 100) {
    time -= 50;
    console.log('Time:', time); // Log the updated time
    let currentValue = parseInt(speedValue.textContent);
    speedValue.textContent = currentValue + 1;
    adjustPrices(); // Restart the intervals with the new time value
  } else if (time <= 100) { 
    time -= 10;
    console.log('Time:', time); // Log the updated time
    let currentValue = parseInt(speedValue.textContent);
    speedValue.textContent = currentValue + 1;
    adjustPrices();
  } else if (time <= 50) { 
    time -= 5;
    console.log('Time:', time); // Log the updated time
    let currentValue = parseInt(speedValue.textContent);
    speedValue.textContent = currentValue + 1;
    adjustPrices();
  } else if (time <=0) {
    clearInterval(intervalId1);
    clearInterval(intervalId2);
    clearInterval(intervalId3);
    clearInterval(intervalId4);
    speedValue.textContent = "max"; // Update speed value to 0
  } // Restart the intervals with the new time value
}

function increaseSpeed2() {
  canvasSpeed += 2;
}


function decreaseSpeed() {
  // Clear all intervals
  clearInterval(intervalId1);
  clearInterval(intervalId2);
  clearInterval(intervalId3);
  clearInterval(intervalId4);

  // Increment time by 50 (assuming time represents milliseconds)
  time += 50;
  console.log('Time:', time); // Log the updated time

  // Get the current speed value and update the display
  let currentValue = parseInt(speedValue.textContent);
  speedValue.textContent = Math.max(currentValue - 1, 0);
  
  adjustPrices();// Ensure speed value doesn't go below 0

  // Check if speed is now 0
  if (speedValue.textContent == 0) {
    clearInterval(intervalId1);
    clearInterval(intervalId2);
    clearInterval(intervalId3);
    clearInterval(intervalId4);
    clearInterval(intervalId4);// Assuming adjustPrices() restarts intervals or performs other actions
     // Restart the intervals with the new time value or perform other actions
  }
}

function decreaseSpeed2() {
  canvasSpeed -= 1;
}

function fillCanvas() {
  // Get the first canvas element
  var canvas1 = document.getElementById('canvas_country_one');
  var ctx1 = canvas1.getContext("2d");

  // Get the second canvas element
  var canvas2 = document.getElementById('canvas_country_two');
  var ctx2 = canvas2.getContext("2d");

  // Get the dimensions of the canvases
  var canvasWidth = canvas1.width;
  var canvasHeight = canvas1.height;

  // Calculate the midpoint of the canvases
  var midpointX = canvasWidth / 2;

  // Fill the left half of the first canvas with good one color
  ctx1.fillStyle = currentColorGoodOne;
  ctx1.fillRect(0, 0, midpointX, canvasHeight);

  // Fill the right half of the first canvas with good two color
  ctx1.fillStyle = currentColorGoodTwo;
  ctx1.fillRect(midpointX, 0, midpointX, canvasHeight);

  // Fill the left half of the second canvas with good two color
  ctx2.fillStyle = currentColorGoodOne;
  ctx2.fillRect(0, 0, midpointX, canvasHeight);

  // Fill the right half of the second canvas with good one color
  ctx2.fillStyle = currentColorGoodTwo;
  ctx2.fillRect(midpointX, 0, midpointX, canvasHeight);
}

function fillCanvasWithColorTransition() {
  calculateDifference(); // Ensure this is called to set up steps and steps2
  if (countryOneMPLRatioGood1 > countryTwoMPLRatioGood1) {
    animatePriceLaborCanvas('canvas_country_one', 'canvas_country_two', currentColorGoodOne, currentColorGoodTwo, 1, -1);
  } else if (countryOneMPLRatioGood1 < countryTwoMPLRatioGood1) {
    animatePriceLaborCanvas('canvas_country_one', 'canvas_country_two', currentColorGoodTwo, currentColorGoodOne, -1, 1);
  }
}

function animatePriceLaborCanvas(canvasId1, canvasId2, color1, color2, direction1, direction2) {
  var canvas1 = document.getElementById(canvasId1);
  var ctx1 = canvas1.getContext("2d");
  var canvas2 = document.getElementById(canvasId2);
  var ctx2 = canvas2.getContext("2d");
  var canvasWidth = canvas1.width;
  var canvasHeight = canvas1.height;

  var initialPriceRatio1 = countryOnePriceRatioGood1;
  var initialPriceRatio2 = countryTwoPriceRatioGood1;
  var totalSteps = Math.max(steps, steps2);

  var initialLabor1GoodOne = countryOneLaborGoodOne;
  var initialLabor2GoodTwo = countryTwoLaborGoodTwo;

  var initialPRICEcountryOneGoodOne = PRICEcountryOneGoodOne;
  var initialPRICEcountryOneGoodTwo = PRICEcountryOneGoodTwo;
  var initialPRICEcountryTwoGoodOne = PRICEcountryTwoGoodOne;
  var initialPRICEcountryTwoGoodTwo = PRICEcountryTwoGoodTwo;

  function updatePricesAndLabor(step) {
    // Update prices
    if (direction1 > 0) {
      // Country One: Good One price increases, Good Two price decreases
      countryOnePriceRatioGood1 = initialPriceRatio1 + (worldPrice - initialPriceRatio1) * (step / totalSteps);
      let adjustmentFactor1 = Math.sqrt(countryOnePriceRatioGood1 / initialPriceRatio1);
      PRICEcountryOneGoodOne = initialPRICEcountryOneGoodOne * adjustmentFactor1;
      PRICEcountryOneGoodTwo = initialPRICEcountryOneGoodTwo / adjustmentFactor1;
    
      // Country Two: Good One price decreases, Good Two price increases
      countryTwoPriceRatioGood1 = initialPriceRatio2 - (initialPriceRatio2 - worldPrice) * (step / totalSteps);
      let adjustmentFactor2 = Math.sqrt(countryTwoPriceRatioGood1 / initialPriceRatio2);
      PRICEcountryTwoGoodOne = initialPRICEcountryTwoGoodOne * adjustmentFactor2;
      PRICEcountryTwoGoodTwo = initialPRICEcountryTwoGoodTwo / adjustmentFactor2;
    } else {
      // Country One: Good One price decreases, Good Two price increases
      countryOnePriceRatioGood1 = initialPriceRatio1 - (initialPriceRatio1 - worldPrice) * (step / totalSteps);
      let adjustmentFactor1 = Math.sqrt(countryOnePriceRatioGood1 / initialPriceRatio1);
      PRICEcountryOneGoodOne = initialPRICEcountryOneGoodOne * adjustmentFactor1;
      PRICEcountryOneGoodTwo = initialPRICEcountryOneGoodTwo / adjustmentFactor1;
    
      // Country Two: Good One price increases, Good Two price decreases
      countryTwoPriceRatioGood1 = initialPriceRatio2 + (worldPrice - initialPriceRatio2) * (step / totalSteps);
      let adjustmentFactor2 = Math.sqrt(countryTwoPriceRatioGood1 / initialPriceRatio2);
      PRICEcountryTwoGoodOne = initialPRICEcountryTwoGoodOne * adjustmentFactor2;
      PRICEcountryTwoGoodTwo = initialPRICEcountryTwoGoodTwo / adjustmentFactor2;
    }
    
    wages();
    PRICEcountryOneGoodOne = Math.round(PRICEcountryOneGoodOne * 100) / 100;
    PRICEcountryOneGoodTwo = Math.round(PRICEcountryOneGoodTwo * 100) / 100;
    PRICEcountryTwoGoodOne = Math.round(PRICEcountryTwoGoodOne * 100) / 100;
    PRICEcountryTwoGoodTwo = Math.round(PRICEcountryTwoGoodTwo * 100) / 100;
    countryOnePriceRatioGood1 = Math.round(countryOnePriceRatioGood1 * 100) / 100;
    countryTwoPriceRatioGood1 = Math.round(countryTwoPriceRatioGood1 * 100) / 100;

    // Update labor based on price changes
    var laborProgress1 = (countryOnePriceRatioGood1 - initialPriceRatio1) / (worldPrice - initialPriceRatio1);
    var laborProgress2 = (countryTwoPriceRatioGood1 - initialPriceRatio2) / (worldPrice - initialPriceRatio2);

    if (direction1 > 0) {
      countryOneLaborGoodOne = initialLabor1GoodOne + (countryOneLabor - initialLabor1GoodOne) * laborProgress1;
      countryOneLaborGoodTwo = countryOneLabor - countryOneLaborGoodOne;
      
      countryTwoLaborGoodTwo = initialLabor2GoodTwo + (countryTwoLabor - initialLabor2GoodTwo) * laborProgress2;
      countryTwoLaborGoodOne = countryTwoLabor - countryTwoLaborGoodTwo;
      document.querySelectorAll('[id^="sign_relative_price_good_one"]').forEach(function(element) {
        element.textContent = ">";
      });
      document.querySelectorAll('[id^="sign_relative_price_good_two"]').forEach(function(element) {
        element.textContent = ">";
      });

    } else {
      countryOneLaborGoodTwo = initialLabor1GoodOne + (countryOneLabor - initialLabor1GoodOne) * laborProgress1;
      countryOneLaborGoodOne = countryOneLabor - countryOneLaborGoodTwo;
      
      countryTwoLaborGoodOne = initialLabor2GoodTwo + (countryTwoLabor - initialLabor2GoodTwo) * laborProgress2;
      countryTwoLaborGoodTwo = countryTwoLabor - countryTwoLaborGoodOne;

      document.querySelectorAll('[id^="sign_relative_price_good_one"]').forEach(function(element) {
        element.textContent = "<";
      });
      document.querySelectorAll('[id^="sign_relative_price_good_two"]').forEach(function(element) {
        element.textContent = "<";
      });
    }

    updatePriceDisplay();
    updateLaborDisplay();
  }

  function updateCanvas() {
    ctx1.clearRect(0, 0, canvasWidth, canvasHeight);
    ctx2.clearRect(0, 0, canvasWidth, canvasHeight);

    var fillWidth1 = (countryOneLaborGoodOne / countryOneLabor) * canvasWidth;
    var fillWidth2 = (countryTwoLaborGoodTwo / countryTwoLabor) * canvasWidth;

    ctx1.fillStyle = color1;
    ctx1.fillRect(0, 0, fillWidth1, canvasHeight);
    ctx1.fillStyle = color2;
    ctx1.fillRect(fillWidth1, 0, canvasWidth - fillWidth1, canvasHeight);

    ctx2.fillStyle = color2;
    ctx2.fillRect(0, 0, fillWidth2, canvasHeight);
    ctx2.fillStyle = color1;
    ctx2.fillRect(fillWidth2, 0, canvasWidth - fillWidth2, canvasHeight);
  }

  var step = 0;
  var intervalId = setInterval(function() {
    step++;
    updatePricesAndLabor(step);
    updateCanvas();

    if (step >= totalSteps) {
      clearInterval(intervalId);
      // Ensure final values are set correctly
      countryOnePriceRatioGood1 = worldPrice;
      countryTwoPriceRatioGood1 = worldPrice;
      updatePricesAndLabor(totalSteps);
      updateCanvas();

      document.querySelectorAll('[id^="sign_relative_price_good_one"]').forEach(function(element) {
        element.textContent = "="; });
      document.querySelectorAll('[id^="sign_relative_price_good_two"]').forEach(function(element) {
        element.textContent = "="; });
    }
  }, time);
}

function updatePriceDisplay() {
  // Update price ratios
  document.querySelectorAll('[id^="price_ratio_country_one_good_one"]').forEach(function(element) {
    element.textContent = countryOnePriceRatioGood1.toFixed(2);
  });
  document.querySelectorAll('[id^="price_ratio_country_two_good_one"]').forEach(function(element) {
    element.textContent = countryTwoPriceRatioGood1.toFixed(2);
  });
  document.querySelectorAll('[id^="price_ratio_country_one_good_two"]').forEach(function(element) {
    element.textContent = (1 /countryOnePriceRatioGood1).toFixed(2);
  });
  document.querySelectorAll('[id^="price_ratio_country_two_good_two"]').forEach(function(element) {
    element.textContent = (1 / countryTwoPriceRatioGood1).toFixed(2);
  });

  // Update absolute prices
  document.querySelectorAll('[id^="price_country_one_good_one"]').forEach(function(element) {
    element.textContent = PRICEcountryOneGoodOne.toFixed(2);
  });
  document.querySelectorAll('[id^="price_country_one_good_two"]').forEach(function(element) {
    element.textContent = PRICEcountryOneGoodTwo.toFixed(2);
  });
  document.querySelectorAll('[id^="price_country_two_good_one"]').forEach(function(element) {
    element.textContent = PRICEcountryTwoGoodOne.toFixed(2);
  });
  document.querySelectorAll('[id^="price_country_two_good_two"]').forEach(function(element) {
    element.textContent = PRICEcountryTwoGoodTwo.toFixed(2);
  });

}

function updateLaborDisplay() {
  document.querySelectorAll('[id^="country_one_labor_good_one"]').forEach(function(element) {
    element.textContent = Math.round(countryOneLaborGoodOne);
  });
  document.querySelectorAll('[id^="country_one_labor_good_two"]').forEach(function(element) {
    element.textContent = Math.round(countryOneLaborGoodTwo);
  });
  document.querySelectorAll('[id^="country_two_labor_good_one"]').forEach(function(element) {
    element.textContent = Math.round(countryTwoLaborGoodOne);
  });
  document.querySelectorAll('[id^="country_two_labor_good_two"]').forEach(function(element) {
    element.textContent = Math.round(countryTwoLaborGoodTwo);
  });
}

function displayEqualSign() {
if (countryOnePriceRatioGood1 === countryTwoPriceRatioGood1 && countryOnePriceRatioGood2 === countryTwoPriceRatioGood2) {
  document.querySelectorAll('[id^="sign_relative_price_good_one"]').forEach(function(element) {
    element.textContent = "=";
  }); 

  document.querySelectorAll('[id^="sign_relative_price_good_two"]').forEach(function(element) {
    element.textContent = "=";
  });
}
}