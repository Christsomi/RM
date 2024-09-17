
function absolute_advantage() {

  var absoluteAdvantageGoodOneMessage = '';

  var absoluteAdvantageGoodOneMessageMore = '';
  // GOOD ONE
 if (MPLcountryOneGoodOne > MPLcountryTwoGoodOne) {
     document.querySelectorAll('[id^="good_one_compare"]').forEach(function(element) {
       element.textContent = ">";
   });

   absoluteAdvantageGoodOneMessage += countryOneName + ' has an absolute advantage in ' + goodOneName, '.<br>' 
   absoluteAdvantageGoodOneMessageMore += countryOneName + ' has an absolute advantage in producing ' + goodOneName + ' because it can produce ' + MPLcountryOneGoodOne + ' units of ' + goodOneName + ' per labor unit, compared to ' + MPLcountryTwoGoodOne + ' units per labor unit in ' + countryTwoName + '.<br>'}

 else if (MPLcountryOneGoodOne < MPLcountryTwoGoodOne){
   document.querySelectorAll('[id^="good_one_compare"]').forEach(function(element) {
     element.textContent = "<";
   }); 
   
   absoluteAdvantageGoodOneMessage += countryTwoName + ' has an absolute advantage in ' + goodOneName, '.<br>'; 
   absoluteAdvantageGoodOneMessageMore += countryTwoName + ' has an absolute advantage in producing ' + goodOneName + ' because it can produce ' + MPLcountryTwoGoodOne + ' units of ' + goodOneName + ' per labor unit, compared to ' + MPLcountryOneGoodOne + ' units per labor unit in ' + countryOneName + '.<br>'}

 else if (MPLcountryOneGoodOne == MPLcountryTwoGoodOne) {
   document.querySelectorAll('[id^="good_one_compare"]').forEach(function(element) {
     element.textContent = "=";
   });

   absoluteAdvantageGoodOneMessage += 'No one has an absolute advantage in ' + goodOneName, '.<br>'; 
   absoluteAdvantageGoodOneMessageMore += 'No one has an absolute advantage in ' + goodOneName, '.<br>'; }
 

   document.getElementById('absoluteAdvantageGoodOneMessage').innerHTML = absoluteAdvantageGoodOneMessage;
   document.getElementById('absoluteAdvantageGoodOneMessageMore').innerHTML = absoluteAdvantageGoodOneMessageMore;

 //GOOD TWO

 var absoluteAdvantageGoodTwoMessage = '';
 
 var absoluteAdvantageGoodTwoMessageMore = '';

 if (MPLcountryOneGoodTwo > MPLcountryTwoGoodTwo) {
     document.querySelectorAll('[id^="good_two_compare"]').forEach(function(element) {
       element.textContent = ">";
   });
  absoluteAdvantageGoodTwoMessage += countryOneName + ' has an absolute advantage in ' + goodTwoName, '.<br>' 
   absoluteAdvantageGoodTwoMessageMore += countryOneName + ' has an absolute advantage in producing ' + goodTwoName + ' because it can produce ' + MPLcountryOneGoodTwo + ' units of ' + goodTwoName + ' per labor unit, compared to ' + MPLcountryTwoGoodTwo + ' units per labor unit in ' + countryTwoName + '.<br>'}

 else if (MPLcountryOneGoodTwo < MPLcountryTwoGoodTwo){
   document.querySelectorAll('[id^="good_two_compare"]').forEach(function(element) {
     element.textContent = "<";
   }); 
   
   absoluteAdvantageGoodTwoMessage += countryTwoName + ' has an absolute advantage in ' + goodTwoName, '.<br>'; 
   absoluteAdvantageGoodTwoMessageMore += countryTwoName + ' has an absolute advantage in producing ' + goodTwoName + ' because it can produce ' + MPLcountryTwoGoodTwo + ' units of ' + goodTwoName + ' per labor unit, compared to ' + MPLcountryOneGoodTwo + ' units per labor unit in ' + countryOneName + '.<br>'}

 else if (MPLcountryOneGoodTwo == MPLcountryTwoGoodTwo) {
   document.querySelectorAll('[id^="good_two_compare"]').forEach(function(element) {
     element.textContent = "=";
   });
   absoluteAdvantageGoodTwoMessage += 'No one has an absolute advantage in ' + goodTwoName, '.<br>'; 
   absoluteAdvantageGoodTwoMessageMore += 'No one has an absolute advantage in ' + goodTwoName, '.<br>'; }


   document.getElementById('absoluteAdvantageGoodTwoMessage').innerHTML = absoluteAdvantageGoodTwoMessage;
   document.getElementById('absoluteAdvantageGoodTwoMessageMore').innerHTML = absoluteAdvantageGoodTwoMessageMore;
 var absoluteAdvantageMessage = '';

 if (MPLcountryOneGoodOne > MPLcountryTwoGoodOne && MPLcountryOneGoodTwo > MPLcountryTwoGoodTwo) {
     absoluteAdvantageMessage += countryOneName + ' has an absolute advantage in both ' +
     goodOneName + ' and ' +
     goodTwoName + '.<br>';
 }
 // Case 2: Country 2 has an absolute advantage in both goods
 else if (MPLcountryTwoGoodOne > MPLcountryOneGoodOne && MPLcountryTwoGoodTwo > MPLcountryOneGoodTwo) {
     absoluteAdvantageMessage += countryTwoName + ' has an absolute advantage in both ' +
     goodOneName + ' and ' +
     goodTwoName + '.<br>';
 }
 // Case 3: Country 1 has an absolute advantage in good 1, and Country 2 has an absolute advantage in good 2
 else if (MPLcountryOneGoodOne > MPLcountryTwoGoodOne && MPLcountryTwoGoodTwo > MPLcountryOneGoodTwo) {
     absoluteAdvantageMessage += countryOneName + ' has an absolute advantage in ' +
     goodOneName + ', and ' +
         countryTwoName + ' has an absolute advantage in ' +
         goodTwoName + '.<br>';
 }
 // Case 4: Country 1 has an absolute advantage in good 2, and Country 2 has an absolute advantage in good 1
 else if (MPLcountryOneGoodTwo > MPLcountryTwoGoodTwo && MPLcountryTwoGoodOne > MPLcountryOneGoodOne) {
     absoluteAdvantageMessage += countryOneName + ' has an absolute advantage in ' +
     goodTwoName + ', and ' +
         countryTwoName + ' has an absolute advantage in ' +
         goodOneName + '.<br>';
 }

 //Case 5: No absolute advantage in good 1 but Country 1 has an absolute advantage in good 2
 else if (MPLcountryOneGoodOne == MPLcountryTwoGoodOne && MPLcountryOneGoodTwo > MPLcountryTwoGoodTwo) {
     absoluteAdvantageMessage += 'No one has an absolute advantage in ' +
     goodOneName + ' and ' + countryOneName + ' has an absolute advantage in ' +
     goodTwoName + '.<br>';
 }

 //Case 6: No absolute advantage in good 1 but Country 2 has an absolute advantage in good 2
 else if (MPLcountryOneGoodOne == MPLcountryTwoGoodOne && MPLcountryTwoGoodTwo > MPLcountryOneGoodTwo) {
     absoluteAdvantageMessage += 'No one has an absolute advantage in ' +
     goodOneName + ' and ' + countryTwoName + ' has an absolute advantage in ' +
     goodTwoName + '.<br>';
 }

 //Case 7: No absolute advantage in good 2 but Country 1 has an absolute advantage in good 1
 else if (MPLcountryOneGoodTwo == MPLcountryTwoGoodTwo && MPLcountryOneGoodOne > MPLcountryTwoGoodOne) {
     absoluteAdvantageMessage += countryOneName + ' has an absolute advantage in ' +
     goodOneName + ' and no one has an absolute advantage in ' +
     goodTwoName + '.<br>';
 }

 //Case 8: No absolute advantage in good 1 but Country 2 has an absolute advantage in good 1
 else if (MPLcountryOneGoodTwo == MPLcountryTwoGoodTwo && MPLcountryTwoGoodOne > MPLcountryOneGoodOne) {
     absoluteAdvantageMessage += countryTwoName + ' has an absolute advantage in ' +
     goodOneName+ ' and no one has an absolute advantage in ' +
     goodTwoName + '.<br>';
 }

 //Case 8: No absolute advantage 
 else if (MPLcountryOneGoodTwo == MPLcountryTwoGoodTwo && MPLcountryTwoGoodOne == MPLcountryOneGoodOne) {
     absoluteAdvantageMessage += ' No one has an absolute advantage .<br>';
 }

 document.getElementById('absoluteAdvantageMessage').innerHTML = absoluteAdvantageMessage;
 document.getElementById('absoluteAdvantage').style.display = 'block';

}
