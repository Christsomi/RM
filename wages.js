var wageCountryOneGoodOne = '';
var wageCountryOneGoodTwo = '';
var wageCountryTwoGoodOne = '';
var wageCountryTwoGoodTwo = '';

var prevWageCountryOneGoodOne = 0;
var prevWageCountryOneGoodTwo = 0;
var prevWageCountryTwoGoodOne = 0;
var prevWageCountryTwoGoodTwo = 0;
var wageMessageCountryOne = '';
var wageMessageCountryTwo = '';
var priceMessageCountryOne = '';
var priceMessageCountryTwo = '';

function wages() {
  // Calculate new wages
  wageCountryOneGoodOne = PRICEcountryOneGoodOne * MPLcountryOneGoodOne;
  wageCountryOneGoodTwo = PRICEcountryOneGoodTwo * MPLcountryOneGoodTwo;
  wageCountryTwoGoodOne = PRICEcountryTwoGoodOne * MPLcountryTwoGoodOne;
  wageCountryTwoGoodTwo = PRICEcountryTwoGoodTwo * MPLcountryTwoGoodTwo;

  // Update wage display with 2 decimal places
  document.querySelectorAll('[id^="wage_country_one_good_one"]').forEach(function(element) {
    element.textContent = wageCountryOneGoodOne.toFixed(2);
  });

  document.querySelectorAll('[id^="wage_country_one_good_two"]').forEach(function(element) {
    element.textContent = wageCountryOneGoodTwo.toFixed(2);
  });

  document.querySelectorAll('[id^="wage_country_two_good_one"]').forEach(function(element) {
    element.textContent = wageCountryTwoGoodOne.toFixed(2);
  });

  document.querySelectorAll('[id^="wage_country_two_good_two"]').forEach(function(element) {
    element.textContent = wageCountryTwoGoodTwo.toFixed(2);
  });

}


function wageArrows() {
  if (countryOneMPLRatioGood1 > countryTwoMPLRatioGood1) {
    document.getElementById("arrow_wage_country_one_good_one_green").style.display = "block";
    document.getElementById("arrow_wage_country_one_good_two_red").style.display = "block";
    document.getElementById("arrow_wage_country_two_good_two_green").style.display = "block";
    document.getElementById("arrow_wage_country_two_good_one_red").style.display = "block";
  } else {
    document.getElementById("arrow_wage_country_one_good_two_green").style.display = "block";
    document.getElementById("arrow_wage_country_one_good_one_red").style.display = "block";
    document.getElementById("arrow_wage_country_two_good_one_green").style.display = "block";
    document.getElementById("arrow_wage_country_two_good_two_red").style.display = "block";
  }
}


function wageMessages() {
  if (countryOneMPLRatioGood1 > countryTwoMPLRatioGood1) {
    wageMessageCountryOne += 'In ' + countryOneName + ', wages are increasing in the ' + goodOneName + ' industry and decreasing in the ' + goodTwoName + ' industry. Therefore, workers are moving from one industry to another.';
    wageMessageCountryTwo += 'In ' + countryTwoName + ', wages are increasing in the ' + goodTwoName + ' industry and decreasing in the ' + goodOneName + ' industry. Therefore, workers are moving from one industry to another.';
  } else {
    wageMessageCountryOne += 'In ' + countryOneName + ', wages are increasing in the ' + goodTwoName + ' industry and decreasing in the ' + goodOneName + ' industry. Therefore, workers are moving from one industry to another.';
    wageMessageCountryTwo += 'In ' + countryTwoName + ', wages are increasing in the ' + goodOneName + ' industry and decreasing in the ' + goodTwoName + ' industry. Therefore, workers are moving from one industry to another.';
  }

  document.getElementById('wageMessageCountryOne').innerHTML = wageMessageCountryOne;
  document.getElementById('wageMessageCountryTwo').innerHTML = wageMessageCountryTwo;
}

function priceMessages() {
  let exportGoodOne, importGoodOne, exportGoodTwo, importGoodTwo;
  let priceChangeGoodOne, priceChangeGoodTwo;

  if (countryOneMPLRatioGood1 > countryTwoMPLRatioGood1) {
    exportGoodOne = goodOneName;
    importGoodOne = goodTwoName;
    exportGoodTwo = goodTwoName;
    importGoodTwo = goodOneName;
    priceChangeGoodOne = "increase";
    priceChangeGoodTwo = "decrease";
  } else {
    exportGoodOne = goodTwoName;
    importGoodOne = goodOneName;
    exportGoodTwo = goodOneName;
    importGoodTwo = goodTwoName;
    priceChangeGoodOne = "decrease";
    priceChangeGoodTwo = "increase";
  }

  priceMessageCountryOne = `${countryOneName} exports ${exportGoodOne} and imports ${importGoodOne}. 
    Due to arbitrage, the price of ${exportGoodOne} will ${priceChangeGoodOne} in ${countryOneName} as traders buy it domestically and sell it abroad for higher prices. 
    Conversely, the price of ${importGoodOne} will ${priceChangeGoodTwo} as it's imported at lower prices from ${countryTwoName}.
    This process continues until prices equalize between the two countries, eliminating the opportunity for arbitrage.`;

  priceMessageCountryTwo = `${countryTwoName} exports ${exportGoodTwo} and imports ${importGoodTwo}. 
    Due to arbitrage, the price of ${exportGoodTwo} will ${priceChangeGoodOne} in ${countryTwoName} as traders buy it domestically and sell it abroad for higher prices. 
    Conversely, the price of ${importGoodTwo} will ${priceChangeGoodTwo} as it's imported at lower prices from ${countryOneName}.
    This process continues until prices equalize between the two countries, eliminating the opportunity for arbitrage.`;

  document.getElementById('priceMessageCountryOne').innerHTML = priceMessageCountryOne;
  document.getElementById('priceMessageCountryTwo').innerHTML = priceMessageCountryTwo;
}