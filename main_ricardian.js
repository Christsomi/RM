


var countryOneName = ''; // Declare countryOneName globally
var countryTwoName = ''; // Declare countryTwoName globally

function setCountryNames() {
  var countryOneInput = document.getElementById('initial_country_one_name');
  var countryTwoInput = document.getElementById('initial_country_two_name');

  countryOneName = countryOneInput.value; // Update the global variable
  countryTwoName = countryTwoInput.value; // Update the global variable

  if (countryOneName === '') {
    countryOneName = 'Home Country';
  }

  if (countryTwoName === '') {
    countryTwoName = 'Foreign Country';
  }

  document.querySelectorAll('[id^="country_one_name"]').forEach(function(element) {
    element.textContent = countryOneName;
  });

  document.querySelectorAll('[id^="country_two_name"]').forEach(function(element) {
    element.textContent = countryTwoName;
  });
}

//Tutorials

function closeTutorial(id) {
  document.getElementById('tutorial_' + id).style.display = 'none';
}


function displayTutorial(id) {
  document.getElementById('tutorial_' + id).style.display = 'block';

}


var options_one = document.querySelectorAll("#goods-dropdowns .option_one");

var goodOneName = '';

options_one.forEach(function(option) {
  option.addEventListener("click", function() {
    if (this.style.backgroundColor === "black") {
      this.style.backgroundColor = "";
      this.style.color = "";
      goodOneName = null;
    } else {
      options_one.forEach(function(opt) {
        opt.style.backgroundColor = "";
        opt.style.color = "";
      });
      this.style.backgroundColor = "black";
      this.style.color = "white";
      goodOneName = this.textContent;
      document.querySelectorAll('[id^="good_one_name"]').forEach(function(element) {
        element.textContent = goodOneName;
      });
    }
  });
});

var options_two = document.querySelectorAll("#goods-dropdowns .option_two");

var goodTwoName = ''; 

options_two.forEach(function(option) {
  option.addEventListener("click", function() {
    if (this.style.backgroundColor === "black") {
      this.style.backgroundColor = "";
      this.style.color = "";
      goodTwoName = null; // Update the global variable
    } else {
      options_two.forEach(function(opt) {
        opt.style.backgroundColor = "";
        opt.style.color = "";
      });
      this.style.backgroundColor = "black";
      this.style.color = "white";
      goodTwoName = this.textContent; 
      document.querySelectorAll('[id^="good_two_name"]').forEach(function(element) {
        element.textContent = goodTwoName;
      });
    }
  });
});





function proceed() {

      setCountryNames ();
      if (countryOneName === countryTwoName) {
        document.getElementById('warningBlockSameNames').style.display = 'block';
      }

      else {
        document.getElementById('warningBlockLabor').style.display = 'none'; 
        document.getElementById('section_one').style.display = 'none';
        document.getElementById('section_two').style.display = 'block';
      }
  } 


function return2() {
  document.getElementById('section_two').style.display = 'none'; 
  document.getElementById('section_one').style.display = 'block';
  document.getElementById('warningBlockSameGoodNames').style.display = 'none';
}
 
function sameNameYes() {
  document.getElementById('warningBlockSameNames').style.display = 'none'; 
  document.getElementById('section_one').style.display = 'none';
  document.getElementById('section_two').style.display = 'block';
}

function sameNameNo() {
  document.getElementById('warningBlockSameNames').style.display = 'none'; 
}


function sameColorYes() {
  document.getElementById('warningBlockSameColors').style.display = 'none'; 
  document.getElementById('section_two').style.display = 'none';
  document.getElementById('section_three').style.display = 'block';
}

function sameColorNo() {
  document.getElementById('warningBlockSameColors').style.display = 'none'; 
}

function proceed2() {
  if (goodOneName === '' || goodTwoName === '') { // Use || instead of 'and'
    document.getElementById('warningBlockNoGoodNames').style.display = 'block';
  } else {
    if (goodOneName === goodTwoName) {
      document.getElementById('warningBlockSameGoodNames').style.display = 'block';
    }  
    
    else if (currentColorGoodOne === currentColorGoodTwo) {
    document.getElementById("warningBlockSameColors").style.display = "block";}
      
    else {
      document.getElementById('warningBlockSameGoodNames').style.display = 'none';
      document.getElementById("warningBlockSameColors").style.display = "none";
      displayMP4();
      setTimeout(function() {
        document.getElementById('section_two').style.display = 'none';
        document.getElementById('section_three').style.display = 'block';
      }, 1200);
    }
  }
  
  setGoodOneColorStyle()
}


function showTable(tableType) {

  var mplTable = document.getElementById('mpl-table');
  var priceTable = document.getElementById('price-table');
  mplTable.style.display = 'none';
  priceTable.style.display = 'none';

  if (tableType === 'mpl') {
      mplTable.style.display = 'table';
      priceTable.style.display = 'none';
      document.getElementById('both').style.display = 'none';
  } else if (tableType === 'prices') {
      priceTable.style.display = 'table';
      mplTable.style.display = 'none';
      document.getElementById('both').style.display = 'none';
  } else if (tableType === 'both') {
    priceTable.style.display = 'none';
    mplTable.style.display = 'none';
    document.getElementById('both').style.display = 'block';
  }
}


var MPLcountryOneGoodOne = '';
var MPLcountryOneGoodTwo = '';
var MPLcountryTwoGoodOne = '';
var MPLcountryTwoGoodTwo = '';

var PRICEcountryOneGoodOne = '';
var PRICEcountryOneGoodTwo = '';
var PRICEcountryTwoGoodOne = '';
var PRICEcountryTwoGoodTwo = '';

var countryOneMPLRatioGood1 = '';
var countryOneMPLRatioGood2 = '';
var countryTwoMPLRatioGood1 = '';
var countryTwoMPLRatioGood2 = '';

var countryOnePriceRatioGood1 = '';
var countryOnePriceRatioGood2 = '';
var countryTwoPriceRatioGood1 = '';
var countryTwoPriceRatioGood2 = '';

function proceed3() {

  var mplTable = document.getElementById('mpl-table');
  var priceTable = document.getElementById('price-table');
  var bothTables = document.getElementById('both');

  if (mplTable.style.display === 'table' && priceTable.style.display === 'none' && bothTables.style.display === 'none') {
    const inputs = document.querySelectorAll("#mpl-table input[type='number']");
    let isEmpty = false;
    let isOutOfRange = false;
  
    inputs.forEach(function(input) {
      if (input.value.trim() === "") {
        isEmpty = true;
      } else {
        const value = parseInt(input.value.trim());
        if (value < 1 || value > 20) {
          isOutOfRange = true;
        }
      }
    });
  
    let isSame = true;

    let isSame2 = true;

    // Check if input[0] equals input[1] and input[2] equals input[3]
    const condition1 = (inputs[0].value.trim() === inputs[1].value.trim() &&
                        inputs[2].value.trim() === inputs[3].value.trim());
    
    // Check if input[0] equals input[2] and input[1] equals input[3]
    const condition2 = (inputs[0].value.trim() === inputs[2].value.trim() &&
                        inputs[1].value.trim() === inputs[3].value.trim());
    
    // Set isSame2 to false if neither condition is true
    if (!condition1 && !condition2) {
      isSame2 = false;
    }
    
    

    const firstValue = inputs[0].value.trim();
    for (let i = 1; i < inputs.length; i++) {
      if (inputs[i].value.trim() !== firstValue) {
        isSame = false;
        break;
      }
    }
  
    if (isEmpty) {
      document.getElementById("warningBlockEmptyMPL").style.display = "block";
    } else if (isSame) {
      document.getElementById("warningBlockAllSameMPL").style.display = "block";
    } else if (isSame2) { 
      document.getElementById("warningBlockAllSameMPL").style.display = "block";
    } else if (isOutOfRange) {
      document.getElementById("warningBlockOutofRange").style.display = "block";
    } else {
      document.getElementById("warningBlockEmptyMPL").style.display = "none";
      document.getElementById("warningBlockAllSameMPL").style.display = "none";
  
      MPLcountryOneGoodOne = parseInt(document.getElementById("mpl_country_one_good_one").value);
      MPLcountryOneGoodTwo = parseInt(document.getElementById("mpl_country_one_good_two").value);
      MPLcountryTwoGoodOne = parseInt(document.getElementById("mpl_country_two_good_one").value);
      MPLcountryTwoGoodTwo = parseInt(document.getElementById("mpl_country_two_good_two").value);
  
      setMPLValues();
      setInitialPriceValues();
  
      countryOneMPLRatioGood1 = MPLcountryOneGoodOne / MPLcountryOneGoodTwo;
      countryOneMPLRatioGood2 = MPLcountryOneGoodTwo / MPLcountryOneGoodOne;
      countryTwoMPLRatioGood1 = MPLcountryTwoGoodOne / MPLcountryTwoGoodTwo;
      countryTwoMPLRatioGood2 = MPLcountryTwoGoodTwo / MPLcountryTwoGoodOne;
  
      countryOnePriceRatioGood1 = 1 / countryOneMPLRatioGood1;
      countryOnePriceRatioGood2 = 1 / countryOneMPLRatioGood2;
      countryTwoPriceRatioGood1 = 1 / countryTwoMPLRatioGood1;
      countryTwoPriceRatioGood2 = 1 / countryTwoMPLRatioGood2;

      countryOneMPLRatioGood1 = Math.round(countryOneMPLRatioGood1 * 100) / 100;
      countryOneMPLRatioGood2 = Math.round(countryOneMPLRatioGood2 * 100) / 100;
      countryTwoMPLRatioGood1 = Math.round(countryTwoMPLRatioGood1 * 100) / 100;
      countryTwoMPLRatioGood2 = Math.round(countryTwoMPLRatioGood2 * 100) / 100;

      setMPLratios();

      document.getElementById('section_three').style.display = 'none'; 
      document.getElementById('section_price_coefficient').style.display = 'block';
    }
  }

  else if (priceTable.style.display === 'table' && mplTable.style.display === 'none' && bothTables.style.display === 'none') {
    const inputs = document.querySelectorAll("#price-table input[type='number']");
    let isEmpty = false;
    let isOutOfRange = false;
  
    inputs.forEach(function(input) {
      if (input.value.trim() === "") {
        isEmpty = true;
      } else {
        const value = parseInt(input.value.trim());
        if (value < 1 || value > 20) {
          isOutOfRange = true;
        }
      }
    });

    let isSame2 = true;

    // Check if input[0] equals input[1] and input[2] equals input[3]
    const condition1 = (inputs[0].value.trim() === inputs[1].value.trim() &&
                        inputs[2].value.trim() === inputs[3].value.trim());
    
    // Check if input[0] equals input[2] and input[1] equals input[3]
    const condition2 = (inputs[0].value.trim() === inputs[2].value.trim() &&
                        inputs[1].value.trim() === inputs[3].value.trim());
    
    // Set isSame2 to false if neither condition is true
    if (!condition1 && !condition2) {
      isSame2 = false;
    }

    let isSame = true;
    const firstValue = inputs[0].value.trim();
    for (let i = 1; i < inputs.length; i++) {
        if (inputs[i].value.trim() !== firstValue) {
            isSame = false;
            break;
        }
    }

    if (isEmpty) {
        document.getElementById("warningBlockEmptyPrice").style.display = "block";
    } else if (isSame)  {
        document.getElementById("warningBlockAllSamePrice").style.display = "block"; 
    } else if (isSame2) { 
      document.getElementById("warningBlockAllSamePrice").style.display = "block";
    } else if (isOutOfRange) {
      document.getElementById("warningBlockOutofRange").style.display = "block";
    } else {
      document.getElementById("warningBlockEmptyPrice").style.display = "none";
      document.getElementById("warningBlockAllSamePrice").style.display = "none";

      PRICEcountryOneGoodOne = parseInt(document.getElementById("price_country_one_good_one").value);
      PRICEcountryOneGoodTwo = parseInt(document.getElementById("price_country_one_good_two").value);
      PRICEcountryTwoGoodOne = parseInt(document.getElementById("price_country_two_good_one").value);
      PRICEcountryTwoGoodTwo = parseInt(document.getElementById("price_country_two_good_two").value);

      setPriceValues();
      setInitialMPlValues();
      
      countryOnePriceRatioGood1 = PRICEcountryOneGoodOne / PRICEcountryOneGoodTwo;
      countryOnePriceRatioGood2 = PRICEcountryOneGoodTwo / PRICEcountryOneGoodOne;
      countryTwoPriceRatioGood1 = PRICEcountryTwoGoodOne / PRICEcountryTwoGoodTwo;
      countryTwoPriceRatioGood2 = PRICEcountryTwoGoodTwo / PRICEcountryTwoGoodOne;

      countryOneMPLRatioGood1 = 1 / countryOnePriceRatioGood1;
      countryOneMPLRatioGood2 = 1 / countryOnePriceRatioGood2;
      countryTwoMPLRatioGood1 = 1 / countryTwoPriceRatioGood1;
      countryTwoMPLRatioGood2 = 1/ countryTwoPriceRatioGood2;

      countryOneMPLRatioGood1 = Math.round(countryOneMPLRatioGood1 * 100) / 100;
      countryOneMPLRatioGood2 = Math.round(countryOneMPLRatioGood2 * 100) / 100;
      countryTwoMPLRatioGood1 = Math.round(countryTwoMPLRatioGood1 * 100) / 100;
      countryTwoMPLRatioGood2 = Math.round(countryTwoMPLRatioGood2 * 100) / 100;

      setMPLValues();
      setMPLratios();
    
      document.getElementById('section_three').style.display = 'none';
      document.getElementById('section_mpl_coefficient').style.display = 'block';

    }
  }

}

function showTextNoCompAdv() {
  document.getElementById('warningBlockAllSameMPL').style.display = 'none';
  document.getElementById('pdfContainerNoCompAdv').style.display = 'block';
}

function closePdf(index) {
  document.getElementById(`pdfContainer${index}`).style.display = 'none'; } 


function setMPLratios() {
  document.querySelectorAll('[id^="mpl_ratio_country_one_good_one"]').forEach(function(element) {
    element.textContent = countryOneMPLRatioGood1.toString();
  });

  document.querySelectorAll('[id^="mpl_ratio_country_one_good_two"]').forEach(function(element) {
    element.textContent = countryOneMPLRatioGood2.toString();
  });

  document.querySelectorAll('[id^="mpl_ratio_country_two_good_one"]').forEach(function(element) {
    element.textContent = countryTwoMPLRatioGood1.toString();
  });

  document.querySelectorAll('[id^="mpl_ratio_country_two_good_two"]').forEach(function(element) {
    element.textContent = countryTwoMPLRatioGood2.toString();
  });
}



function return3() {
  document.getElementById('section_three').style.display = 'none'; 
  document.getElementById('section_two').style.display = 'block';
  document.getElementById("warningBlockEmptyPrice").style.display = "none";
  document.getElementById("warningBlockAllSamePrice").style.display = "none";
  document.getElementById("warningBlockEmptyMPL").style.display = "none";
  document.getElementById("warningBlockAllSameMPL").style.display = "none";
  document.getElementById("warningBlockBothRatios").style.display = "none";
}

function startTradeGo(){
  document.getElementById('section_price_coefficient').style.display = 'none';
  document.getElementById('section_mpl_coefficient').style.display = 'none';
  document.getElementById('proceed_three_question').style.display = 'none';
  document.getElementById('my_email').style.display = 'none';
  setPriceValues();
  setMPLValues();
  decidePPF();
  //set_industries();
  wages();
  priceMessages();

  //setIndustries();
  document.getElementById('section_trade').style.display = 'flex';
  
}



function calculations(status) {
  document.getElementById('section_price_coefficient').style.display = 'none';
  document.getElementById('section_mpl_coefficient').style.display = 'none';
  document.getElementById('proceed_three_question').style.display = 'none';
  document.getElementById('my_email').style.display = 'none';
  document.getElementById('nav-buttons').style.display = 'block';
  document.getElementById(`absolute_advantage`).classList.add('active');
  absolute_advantage();
}


  const defaultA = 2;
  const defaultB = 2;

  const defaultC = 2;
  const defaultD = 2;

  
  function setInitialPriceValues() {
    PRICEcountryOneGoodOne = defaultA * MPLcountryOneGoodTwo;
    document.querySelectorAll('[id^="price_country_one_good_one"]').forEach(function(element) {
      element.textContent = PRICEcountryOneGoodOne;
    });

    PRICEcountryOneGoodTwo = defaultA * MPLcountryOneGoodOne;
    document.querySelectorAll('[id^="price_country_one_good_two"]').forEach(function(element) {
      element.textContent = PRICEcountryOneGoodTwo;
    });

    PRICEcountryTwoGoodOne = defaultB * MPLcountryTwoGoodTwo;
    document.querySelectorAll('[id^="price_country_two_good_one"]').forEach(function(element) {
      element.textContent = PRICEcountryTwoGoodOne;
    });

    PRICEcountryTwoGoodTwo = defaultB * MPLcountryTwoGoodOne;
    document.querySelectorAll('[id^="price_country_two_good_two"]').forEach(function(element) {
      element.textContent = PRICEcountryTwoGoodTwo;
    });

  }

  function setPriceValues() {
    document.querySelectorAll('[id^="price_country_one_good_one"]').forEach(function(element) {
      element.textContent = PRICEcountryOneGoodOne;
    });
    document.querySelectorAll('[id^="price_country_one_good_two"]').forEach(function(element) {
      element.textContent = PRICEcountryOneGoodTwo;
    });
    document.querySelectorAll('[id^="price_country_two_good_one"]').forEach(function(element) {
      element.textContent = PRICEcountryTwoGoodOne;
    });
    document.querySelectorAll('[id^="price_country_two_good_two"]').forEach(function(element) {
      element.textContent = PRICEcountryTwoGoodTwo;
    });
}

function setInitialMPlValues() {
  MPLcountryOneGoodOne = defaultA * PRICEcountryOneGoodTwo;
  document.querySelectorAll('[id^="mpl_country_one_good_one"]').forEach(function(element) {
    element.textContent = MPLcountryOneGoodOne;
  });

  MPLcountryOneGoodTwo = defaultA * PRICEcountryOneGoodOne;
  document.querySelectorAll('[id^="mpl_country_one_good_two"]').forEach(function(element) {
    element.textContent = MPLcountryOneGoodTwo;
  });

  MPLcountryTwoGoodOne = defaultB * PRICEcountryTwoGoodTwo;
  document.querySelectorAll('[id^="mpl_country_two_good_one"]').forEach(function(element) {
    element.textContent = MPLcountryTwoGoodOne;
  });

  MPLcountryTwoGoodTwo = defaultB * PRICEcountryTwoGoodOne;
  document.querySelectorAll('[id^="mpl_country_two_good_two"]').forEach(function(element) {
    element.textContent = MPLcountryTwoGoodTwo;
  });
}

function setMPLValues() {
  document.querySelectorAll('[id^="mpl_country_one_good_one"]').forEach(function(element) {
    element.textContent = MPLcountryOneGoodOne;
  });
  document.querySelectorAll('[id^="mpl_country_one_good_two"]').forEach(function(element) {
    element.textContent = MPLcountryOneGoodTwo;
  });
  document.querySelectorAll('[id^="mpl_country_two_good_one"]').forEach(function(element) {
    element.textContent = MPLcountryTwoGoodOne;
  });
  document.querySelectorAll('[id^="mpl_country_two_good_two"]').forEach(function(element) {
    element.textContent = MPLcountryTwoGoodTwo;
  });
}


const updateOutput = (input, output) => {
    output.textContent = input.value || input.placeholder;
    calculateResultA();
    calculateResultB();
}



const MupdateOutput = (input, output) => {
  output.textContent = input.value || input.placeholder;
  McalculateResultA();
  McalculateResultB();
}

const calculateResultA = () => {
  const valueA = parseFloat(numberInputA.value) || defaultA;
  const result = valueA * MPLcountryOneGoodTwo;
  const result2 = valueA * MPLcountryOneGoodOne;
  PRICEcountryOneGoodOne = result;
  PRICEcountryOneGoodTwo = result2;
  document.querySelectorAll('[id^="price_country_one_good_one"]').forEach(function(element) {
    element.textContent = PRICEcountryOneGoodOne;
  });  
  document.querySelectorAll('[id^="price_country_one_good_two"]').forEach(function(element) {
    element.textContent = PRICEcountryOneGoodTwo;
  });  
};


const calculateResultB = () => {
  const valueB = parseFloat(numberInputB.value) || defaultB;
  const result = valueB * MPLcountryTwoGoodTwo;
  const result2 = valueB * MPLcountryTwoGoodOne;
  PRICEcountryTwoGoodOne = result;
  PRICEcountryTwoGoodTwo = result2;
  document.querySelectorAll('[id^="price_country_two_good_one"]').forEach(function(element) {
    element.textContent = PRICEcountryTwoGoodOne;
  });  
  document.querySelectorAll('[id^="price_country_two_good_two"]').forEach(function(element) {
    element.textContent = PRICEcountryTwoGoodTwo;
  });  
}



const McalculateResultA = () => {
  const valueA = parseFloat(MnumberInputA.value) || defaultA;
  const result = valueA * PRICEcountryOneGoodTwo;
  const result2 = valueA * PRICEcountryOneGoodOne;
  MPLcountryOneGoodOne = result;
  MPLcountryOneGoodTwo= result2;
  document.querySelectorAll('[id^="mpl_country_one_good_one"]').forEach(function(element) {
    element.textContent = MPLcountryOneGoodOne;
  });  
  document.querySelectorAll('[id^="mpl_country_one_good_two"]').forEach(function(element) {
    element.textContent = MPLcountryOneGoodTwo;
  }); 
};

const McalculateResultB = () => {
  const valueB = parseFloat(MnumberInputB.value) || defaultB;
  const result = valueB * PRICEcountryTwoGoodTwo;
  const result2 = valueB * PRICEcountryTwoGoodOne;
  MPLcountryTwoGoodOne = result;
  MPLcountryTwoGoodTwo = result2;
  document.querySelectorAll('[id^="mpl_country_two_good_one"]').forEach(function(element) {
    element.textContent = MPLcountryTwoGoodOne;
  });  
  document.querySelectorAll('[id^="mpl_country_two_good_two"]').forEach(function(element) {
    element.textContent = MPLcountryTwoGoodTwo;
  }); 
}


const numberInputA = document.getElementById('numberInputA');
const numberOutputA = document.getElementById('numberOutputA');
const numberOutputA2 = document.getElementById('numberOutputA2');
numberInputA.addEventListener('input', function() {
    updateOutput(numberInputA, numberOutputA);
    updateOutput(numberInputA, numberOutputA2);
});

const numberInputB = document.getElementById('numberInputB');
const numberOutputB = document.getElementById('numberOutputB');
const numberOutputB2 = document.getElementById('numberOutputB2');
numberInputB.addEventListener('input', function() {
    updateOutput(numberInputB, numberOutputB);
    updateOutput(numberInputB, numberOutputB2);
});

const MnumberInputA = document.getElementById('MnumberInputA');
const MnumberOutputA = document.getElementById('MnumberOutputA');
const MnumberOutputA2 = document.getElementById('MnumberOutputA2');
MnumberInputA.addEventListener('input', function() {
    MupdateOutput(MnumberInputA, MnumberOutputA);
    MupdateOutput(MnumberInputA, MnumberOutputA2);
});

const MnumberInputB = document.getElementById('MnumberInputB');
const MnumberOutputB = document.getElementById('MnumberOutputB');
const MnumberOutputB2 = document.getElementById('MnumberOutputB2');
MnumberInputB.addEventListener('input', function() {
    MupdateOutput(MnumberInputB, MnumberOutputB);
    MupdateOutput(MnumberInputB, MnumberOutputB2);
});



function ForeignCountryPriceCoef() {
  document.getElementById('price_coefficient_home_country').style.display = 'none';
  document.getElementById('price_coefficient_foreign_country').style.display = 'block';
}

function HomeCountryPriceCoef() {
  document.getElementById('price_coefficient_foreign_country').style.display = 'none';
  document.getElementById('price_coefficient_home_country').style.display = 'block';
}

function ForeignCountryMPLCoef() {
  document.getElementById('mpl_coefficient_home_country').style.display = 'none';
  document.getElementById('mpl_coefficient_foreign_country').style.display = 'block';
}

function HomeCountryMPLCoef() {
  document.getElementById('mpl_coefficient_foreign_country').style.display = 'none';
  document.getElementById('mpl_coefficient_home_country').style.display = 'block';
}

function return4() {
  document.getElementById('section_price_coefficient').style.display = 'none';
  document.getElementById('section_three').style.display = 'block';
}

var priceBeforeTrade_CountryOneGoodOne = null;
var priceBeforeTrade_CountryOneGoodTwo = null;
var priceBeforeTrade_CountryTwoGoodOne = null;
var priceBeforeTrade_CountryTwoGoodTwo = null;

function storeInitialPrices() {
  // Only store initial prices if they haven't been set yet
  if (priceBeforeTrade_CountryOneGoodOne === null) {
    priceBeforeTrade_CountryOneGoodOne = PRICEcountryOneGoodOne;
    priceBeforeTrade_CountryOneGoodTwo = PRICEcountryOneGoodTwo;
    priceBeforeTrade_CountryTwoGoodOne = PRICEcountryTwoGoodOne;
    priceBeforeTrade_CountryTwoGoodTwo = PRICEcountryTwoGoodTwo;
  }
}

function displayInitialPrices() {
  document.querySelectorAll('[id^="before_trade_price_country_one_good_one"]').forEach(function(element) {
    element.textContent = priceBeforeTrade_CountryOneGoodOne;
  });

  document.querySelectorAll('[id^="before_trade_price_country_one_good_two"]').forEach(function(element) {
    element.textContent = priceBeforeTrade_CountryOneGoodTwo;
  });

  document.querySelectorAll('[id^="before_trade_price_country_two_good_one"]').forEach(function(element) {
    element.textContent = priceBeforeTrade_CountryTwoGoodOne;
  });

  document.querySelectorAll('[id^="before_trade_price_country_two_good_two"]').forEach(function(element) {
    element.textContent = priceBeforeTrade_CountryTwoGoodTwo;
  });
}

function proceed4() {
  document.getElementById('proceed_three_question').style.display = 'block';
  
  // Store initial prices before any calculations (only if not already stored)
  storeInitialPrices();
  
  // Perform calculations that may change current prices
  setPriceValues();
  setMPLValues();
  absolute_advantage();
  calculateComparativeAdvantage();
  wages();
  setIndustries();
  fillCanvas();
  
  // Display the stored initial prices
  displayInitialPrices();
}
