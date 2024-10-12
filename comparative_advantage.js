var comparativeAdvantageGoodOne = '';
var comparativeAdvantageGoodTwo = '';

var worldPrice = '';

function calculateComparativeAdvantage() {

  var comparativeAdvantageMessage = '';


  if (countryOneMPLRatioGood1 > countryTwoMPLRatioGood1) {
      console.log(countryOneName + ' has a comparative advantage in ' + goodOneName + ' 1');
      comparativeAdvantageMessage += countryOneName + ' has a comparative advantage in ' + goodOneName + '.<br>'; //countryOneName + ' has a comparative advantage in producing ' + ' because it has a lower opportunity cost ('+ countryOneMPLRatioGood2 + ' units of '  + goodOneName + ')' + ' compared to the  ' + countryTwoName + '(' + countryTwoMPLRatioGood2 + ' units of ' + goodTwoName +')' + '.<br>'; //Home Country has a comparative advantage in producing Wheat because it has a lower opportunity cost (0.75 units of Rice) compared to the Foreign Country (2 units of Rice).
      comparativeAdvantageMessage += countryTwoName + ' has a comparative advantage in ' + goodTwoName +'.';
      comparativeAdvantageGoodOne = countryOneName;
      comparativeAdvantageGoodTwo = countryTwoName;

      document.querySelectorAll('[id^="hc_opc_good_one_compare"]').forEach(function(element) {
        element.textContent = ">";
      });
      document.querySelectorAll('[id^="hc_opc_good_two_compare"]').forEach(function(element) {
        element.textContent = "<";
      });

      calculateLaborCaseOne();
      worldPrice = (countryTwoLabor * MPLcountryTwoGoodTwo) /  (countryOneLabor * MPLcountryOneGoodOne);
      worldPrice = Math.round((worldPrice + Number.EPSILON) * 100) / 100;
      console.log("World price: ", worldPrice);
      
  } else {
    console.log(countryOneName + ' has a comparative advantage in ' + goodTwoName + ' 2')
      comparativeAdvantageMessage += countryOneName + ' has a comparative advantage in ' + goodTwoName + '.<br>';
      comparativeAdvantageMessage += countryTwoName + ' has a comparative advantage in ' + goodOneName +'.';
      comparativeAdvantageGoodOne = countryTwoName;
      comparativeAdvantageGoodTwo = countryOneName;
      calculateLaborCaseTwo();
      worldPrice = (countryTwoLabor * MPLcountryTwoGoodOne) /  (countryOneLabor * MPLcountryOneGoodTwo);       
      worldPrice = Math.round((worldPrice + Number.EPSILON) * 100) / 100;
      console.log("World price: ", worldPrice); 

      document.querySelectorAll('[id^="hc_opc_good_one_compare"]').forEach(function(element) {
        element.textContent = "<";
      });
      
      document.querySelectorAll('[id^="hc_opc_good_two_compare"]').forEach(function(element) {
        element.textContent = ">";
      });
  }

  //document.getElementById('comparativeAdvantageMessage').innerHTML = comparativeAdvantageMessage;
  //document.getElementById('comparativeAdvantage').style.display = 'block';

  ComparativeADvantageMessages();

}

function calculateLaborCaseOne() {
  let found = false;
  while (!found) {
      countryOneLabor = getRandomInt(1, 100); 
      countryTwoLabor = getRandomInt(1, 100); 

      
      // Calculate left side and right side of the inequality
      let leftSide = MPLcountryOneGoodTwo / MPLcountryOneGoodOne;
      let rightSide = MPLcountryTwoGoodTwo / MPLcountryTwoGoodOne;
      
      // Calculate middle term
      let middleTerm = (countryTwoLabor * MPLcountryTwoGoodTwo) / (countryOneLabor * MPLcountryOneGoodOne);
      
      // Check if the middle term is within the range
      if (leftSide < middleTerm && middleTerm < rightSide) {
          console.log("Labor", countryOneLabor);
          console.log("Labor", countryTwoLabor);
          found = true;
      }
  }

  if (countryOneLabor<20) {
    countryOneLabor *=10;
  }

  if (countryTwoLabor<20) {
    countryTwoLabor *=10;
  }
  //setLaborValues();
}

function calculateLaborCaseTwo() {
  let found = false;
  while (!found) {
      countryOneLabor = getRandomInt(1, 100); 
      countryTwoLabor = getRandomInt(1, 100);

      
      console.log("Country One Labor:", countryOneLabor);
      console.log("Country Two Labor:", countryTwoLabor);
      // Calculate left side and right side of the inequality
      let leftSide = MPLcountryOneGoodOne / MPLcountryOneGoodTwo;
      console.log("left side:", leftSide);
      let rightSide = MPLcountryTwoGoodOne / MPLcountryTwoGoodTwo;
      console.log("right side:", rightSide);
      
      // Calculate middle term
      let middleTerm = (countryTwoLabor * MPLcountryTwoGoodOne) / (countryOneLabor * MPLcountryOneGoodTwo);
      console.log("middleTerm:", middleTerm);
      
      // Check if the middle term is within the range
      if (leftSide < middleTerm && middleTerm < rightSide) {
          console.log("Labor", countryOneLabor);
          console.log("Labor", countryTwoLabor);
          found = true;
      }
  }
  if (countryOneLabor<20) {
    countryOneLabor *=10;
  }
  if (countryTwoLabor<20) {
    countryTwoLabor *=10;
  }
  //setLaborValues();
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}


//function setLaborValues() {
 // document.querySelectorAll('[id^="country_one_labor"]').forEach(function(element) {
  //  element.textContent = countryOneLabor;
  //});
 // document.querySelectorAll('[id^="country_two_labor"]').forEach(function(element) {
  //  element.textContent = countryTwoLabor;
 // });

//}
//countryOneName + ' has a comparative advantage in producing ' + ' because it has a lower opportunity cost ('+ countryOneMPLRatioGood2 + ' units of '  + goodOneName + ')' + ' compared to the  ' + countryTwoName + '(' + countryTwoMPLRatioGood2 + ' units of ' + goodTwoName +')' + '.<br>'; //Home Country has a comparative advantage in producing Wheat because it has a lower opportunity cost (0.75 units of Rice) compared to the Foreign Country (2 units of Rice). '.<br>'; //countryOneName + ' has a comparative advantage in producing ' + ' because it has a lower opportunity cost ('+ countryOneMPLRatioGood2 + ' units of '  + goodOneName + ')' + ' compared to the  ' + countryTwoName + '(' + countryTwoMPLRatioGood2 + ' units of ' + goodTwoName +')' + '.<br>'; //Home Country has a comparative advantage in producing Wheat because it has a lower opportunity cost (0.75 units of Rice) compared to the Foreign Country (2 units of Rice).
var CAcountryOneGoodOne = '';
var CAcountryOneGoodTwo = '';

var comparativeAdvLargeMessage = '';


function ComparativeADvantageMessages() {
  if (countryOneMPLRatioGood1 > countryTwoMPLRatioGood1) {
    CAcountryOneGoodOne = countryOneName + ' has a comparative advantage in producing ' + goodOneName + ' because it has a lower opportunity cost ('+ countryOneMPLRatioGood2 + ' units of '  + goodTwoName + ')' + ' compared to the  ' + countryTwoName + ' (' + countryTwoMPLRatioGood2 + ' units of ' + goodTwoName +')' + '.<br>'; //Home Country has a comparative advantage in producing Wheat because it has a lower opportunity cost (0.75 units of Rice) compared to the Foreign Country (2 units of Rice). '.<br>';
    CAcountryOneGoodTwo = countryTwoName + ' has a comparative advantage in producing ' + goodTwoName + ' because it has a lower opportunity cost ('+ countryTwoMPLRatioGood1 + ' units of '  + goodOneName + ')' + ' compared to the  ' + countryOneName + ' (' + countryOneMPLRatioGood1 + ' units of ' + goodOneName +')' + '.<br>';
    comparativeAdvLargeMessage += 'The opportunity cost of producing ' + goodOneName + ' in ' + countryOneName + ' is lower than in ' + countryTwoName + '.' + 
      ' Therefore, it is "easier" for ' + countryOneName + ' to produce ' + goodOneName + '. ' + countryOneName + ' should specialize in producing ' + goodOneName + '.' +
      ' The opposite is true for ' + countryTwoName + ': the opportunity cost of ' + goodTwoName + ' is lower, so they should specialize in producing ' + goodTwoName + '.<br>';
    }
  else if (countryOneMPLRatioGood1 < countryTwoMPLRatioGood1) {
    CAcountryOneGoodTwo = countryOneName + ' has a comparative advantage in ' + goodOneName + ', ' + countryTwoName + ' therefore has a comparative advantage in ' + goodTwoName + '.<br>';
    CAcountryOneGoodOne = countryTwoName + ' has a comparative advantage in ' + goodTwoName + ', ' + countryOneName + ' therefore has a comparative advantage in ' + goodOneName + '.<br>';
    
    comparativeAdvLargeMessage += 'The opportunity cost of producing ' + goodTwoName + ' in ' + countryOneName + ' is lower than in ' + countryTwoName + '.' + 
      ' Therefore, it is "easier" for ' + countryOneName + ' to produce ' + goodTwoName + '. ' + countryOneName + ' should specialize in producing ' + goodTwoName + '.' +
      ' The opposite is true for ' + countryTwoName + ': the opportunity cost of ' + goodOneName + ' is lower, so they should specialize in producing ' + goodOneName + '.<br>';
  }
  document.getElementById('CAcountryOneGoodOne').innerHTML = CAcountryOneGoodOne;
  document.getElementById('CAcountryOneGoodTwo').innerHTML = CAcountryOneGoodTwo;
  document.getElementById('comparativeAdvLargeMessage').innerHTML = comparativeAdvLargeMessage;
}

function caHomeCountryGoodTwo() {
  document.getElementById('ca_home_good_one').style.display = 'none';
  document.getElementById('ca_home_good_two').style.display = 'block';
}

function caHomeCountryGoodOne() {
  document.getElementById('ca_home_good_two').style.display = 'none';
  document.getElementById('ca_home_good_one').style.display = 'block';
}

