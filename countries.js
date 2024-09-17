// Function to toggle dropdown menu visibility

// Define the list of country names
const countryNames = [
  { name: "United States of America", image: "united-states-of-america.png" },
  { name: "Afghanistan", image: "afghanistan.png" },
  { name: "Albania", image: "albania.png" },
  { name: "Algeria", image: "algeria.png" },
  { name: "Andorra", image: "andorra.png" },
  { name: "Angola", image: "angola.png" },
  { name: "Antigua and Barbuda", image: "antigua-and-barbuda.png" },
  { name: "Argentina", image: "argentina.png" },
  { name: "Armenia", image: "armenia.png" },
  { name: "Australia", image: "australia.png" },
  { name: "Austria", image: "austria.jpg" },
  { name: "Azerbaijan", image: "azerbaijan.jpg" },
  { name: "Bahamas", image: "bahamas.jpg" },
  { name: "Bahrain", image: "bahrain.jpg" },
  { name: "Bangladesh", image: "bangladesh.jpg" },
  { name: "Barbados", image: "barbados.jpg" },
  { name: "Belarus", image: "belarus.jpg" },
  { name: "Belgium", image: "belgium.jpg" },
  { name: "Belize", image: "belize.jpg" },
  { name: "Benin", image: "benin.jpg" },
  { name: "Bhutan", image: "bhutan.jpg" },
  { name: "Bolivia", image: "bolivia.jpg" },
  { name: "Bosnia and Herzegovina", image: "bosnia_and_herzegovina.jpg" },
  { name: "Botswana", image: "botswana.jpg" },
  { name: "Brazil", image: "brazil.jpg" },
  { name: "Brunei", image: "brunei.jpg" },
  { name: "Bulgaria", image: "bulgaria.jpg" },
  { name: "Burkina Faso", image: "burkina_faso.jpg" },
  { name: "Burundi", image: "burundi.jpg" },
  { name: "Cabo Verde", image: "cabo_verde.jpg" },
  { name: "Cambodia", image: "cambodia.jpg" },
  { name: "Cameroon", image: "cameroon.jpg" },
  { name: "Canada", image: "canada.jpg" },
  { name: "Central African Republic", image: "central_african_republic.jpg" },
  { name: "Chad", image: "chad.jpg" },
  { name: "Chile", image: "chile.jpg" },
  { name: "China", image: "china.jpg" },
  { name: "Colombia", image: "colombia.jpg" },
  { name: "Comoros", image: "comoros.jpg" },
  { name: "Congo (Congo-Brazzaville)", image: "congo_brazzaville.jpg" },
  { name: "Costa Rica", image: "costa_rica.jpg" },
  { name: "Croatia", image: "croatia.jpg" },
  { name: "Cuba", image: "cuba.jpg" },
  { name: "Cyprus", image: "cyprus.jpg" },
  { name: "Czechia (Czech Republic)", image: "czech_republic.jpg" },
  { name: "Denmark", image: "denmark.jpg" },
  { name: "Djibouti", image: "djibouti.jpg" },
  { name: "Dominica", image: "dominica.jpg" },
  { name: "Dominican Republic", image: "dominican_republic.jpg" },
  { name: "Ecuador", image: "ecuador.jpg" },
  { name: "Egypt", image: "egypt.jpg" },
  { name: "El Salvador", image: "el_salvador.jpg" },
  { name: "Equatorial Guinea", image: "equatorial_guinea.jpg" },
  { name: "Eritrea", image: "eritrea.jpg" },
  { name: "Estonia", image: "estonia.jpg" },
  { name: "Eswatini", image: "eswatini.jpg" },
  { name: "Ethiopia", image: "ethiopia.jpg" },
  { name: "Fiji", image: "fiji.jpg" },
  { name: "Finland", image: "finland.jpg" },
  { name: "France", image: "france.jpg" },
  { name: "Gabon", image: "gabon.jpg" },
  { name: "Gambia", image: "gambia.jpg" },
  { name: "Georgia", image: "georgia.jpg" },
  { name: "Germany", image: "germany.jpg" },
  { name: "Ghana", image: "ghana.jpg" },
  { name: "Greece", image: "greece.jpg" },
  { name: "Grenada", image: "grenada.jpg" },
  { name: "Guatemala", image: "guatemala.jpg" },
  { name: "Guinea", image: "guinea.jpg" },
  { name: "Guinea-Bissau", image: "guinea_bissau.jpg" },
  { name: "Guyana", image: "guyana.jpg" },
  { name: "Haiti", image: "haiti.jpg" },
  { name: "Holy See", image: "holy_see.jpg" },
  { name: "Honduras", image: "honduras.jpg" },
  { name: "Hungary", image: "hungary.jpg" },
  { name: "Iceland", image: "iceland.jpg" },
  { name: "India", image: "india.jpg" },
  { name: "Indonesia", image: "indonesia.jpg" },
  { name: "Iran", image: "iran.jpg" },
  { name: "Iraq", image: "iraq.jpg" },
  { name: "Ireland", image: "ireland.jpg" },
  { name: "Israel", image: "israel.jpg" },
  { name: "Italy", image: "italy.jpg" },
  { name: "Jamaica", image: "jamaica.jpg" },
  { name: "Japan", image: "japan.jpg" },
  { name: "Jordan", image: "jordan.jpg" },
  { name: "Kazakhstan", image: "kazakhstan.jpg" },
  { name: "Kenya", image: "kenya.jpg" },
  { name: "Kiribati", image: "kiribati.jpg" },
  { name: "Kuwait", image: "kuwait.jpg" },
  { name: "Kyrgyzstan", image: "kyrgyzstan.jpg" },
  { name: "Laos", image: "laos.jpg" },
  { name: "Latvia", image: "latvia.jpg" },
  { name: "Lebanon", image: "lebanon.jpg" },
  { name: "Lesotho", image: "lesotho.jpg" },
  { name: "Liberia", image: "liberia.jpg" },
  { name: "Libya", image: "libya.jpg" },
  { name: "Liechtenstein", image: "liechtenstein.jpg" },
  { name: "Lithuania", image: "lithuania.jpg" },
  { name: "Luxembourg", image: "luxembourg.jpg" },
  { name: "Madagascar", image: "madagascar.jpg" },
  { name: "Malawi", image: "malawi.jpg" },
  { name: "Malaysia", image: "malaysia.jpg" },
  { name: "Maldives", image: "maldives.jpg" },
  { name: "Mali", image: "mali.jpg" },
  { name: "Malta", image: "malta.jpg" },
  { name: "Marshall Islands", image: "marshall_islands.jpg" },
  { name: "Mauritania", image: "mauritania.jpg" },
  { name: "Mauritius", image: "mauritius.jpg" },
  { name: "Mexico", image: "mexico.jpg" },
  { name: "Micronesia", image: "micronesia.jpg" },
  { name: "Moldova", image: "moldova.jpg" },
  { name: "Monaco", image: "monaco.jpg" },
  { name: "Mongolia", image: "mongolia.jpg" },
  { name: "Montenegro", image: "montenegro.jpg" },
  { name: "Morocco", image: "morocco.jpg" },
  { name: "Mozambique", image: "mozambique.jpg" },
  { name: "Myanmar (formerly Burma)", image: "myanmar.jpg" },
  { name: "Namibia", image: "namibia.jpg" },
  { name: "Nauru", image: "nauru.jpg" },
  { name: "Nepal", image: "nepal.jpg" },
  { name: "Netherlands", image: "netherlands.jpg" },
  { name: "New Zealand", image: "new_zealand.jpg" },
  { name: "Nicaragua", image: "nicaragua.jpg" },
  { name: "Niger", image: "niger.jpg" },
  { name: "Nigeria", image: "nigeria.jpg" },
  { name: "North Korea", image: "north_korea.jpg" },
  { name: "North Macedonia", image: "north_macedonia.jpg" },
  { name: "Norway", image: "norway.jpg" },
  { name: "Oman", image: "oman.jpg" },
  { name: "Pakistan", image: "pakistan.jpg" },
  { name: "Palau", image: "palau.jpg" },
  { name: "Palestine State", image: "palestine.jpg" },
  { name: "Panama", image: "panama.jpg" },
  { name: "Papua New Guinea", image: "papua_new_guinea.jpg" },
  { name: "Paraguay", image: "paraguay.jpg" },
  { name: "Peru", image: "peru.jpg" },
  { name: "Philippines", image: "philippines.jpg" },
  { name: "Poland", image: "poland.jpg" },
  { name: "Portugal", image: "portugal.jpg" },
  { name: "Qatar", image: "qatar.jpg" },
  { name: "Romania", image: "romania.jpg" },
  { name: "Russia", image: "russia.jpg" },
  { name: "Rwanda", image: "rwanda.jpg" },
  { name: "Saint Kitts and Nevis", image: "saint_kitts_and_nevis.jpg" },
  { name: "Saint Lucia", image: "saint_lucia.jpg" },
  { name: "Saint Vincent and the Grenadines", image: "saint_vincent_and_the_grenadines.jpg" },
  { name: "Samoa", image: "samoa.jpg" },
  { name: "San Marino", image: "san_marino.jpg" },
  { name: "Sao Tome and Principe", image: "sao_tome_and_principe.jpg" },
  { name: "Saudi Arabia", image: "saudi_arabia.jpg" },
  { name: "Senegal", image: "senegal.jpg" },
  { name: "Serbia", image: "serbia.jpg" },
  { name: "Seychelles", image: "seychelles.jpg" },
  { name: "Sierra Leone", image: "sierra_leone.jpg" },
  { name: "Singapore", image: "singapore.jpg" },
  { name: "Slovakia", image: "slovakia.jpg" },
  { name: "Slovenia", image: "slovenia.jpg" },
  { name: "Solomon Islands", image: "solomon_islands.jpg" },
  { name: "Somalia", image: "somalia.jpg" },
  { name: "South Africa", image: "south_africa.jpg" },
  { name: "South Korea", image: "south_korea.jpg" },
  { name: "South Sudan", image: "south_sudan.jpg" },
  { name: "Spain", image: "spain.jpg" },
  { name: "Sri Lanka", image: "sri_lanka.jpg" },
  { name: "Sudan", image: "sudan.jpg" },
  { name: "Suriname", image: "suriname.jpg" },
  { name: "Sweden", image: "sweden.jpg" },
  { name: "Switzerland", image: "switzerland.jpg" },
  { name: "Syria", image: "syria.jpg" },
  { name: "Tajikistan", image: "tajikistan.jpg" },
  { name: "Tanzania", image: "tanzania.jpg" },
  { name: "Thailand", image: "thailand.jpg" },
  { name: "Timor-Leste", image: "timor_leste.jpg" },
  { name: "Togo", image: "togo.jpg" },
  { name: "Tonga", image: "tonga.jpg" },
  { name: "Trinidad and Tobago", image: "trinidad_and_tobago.jpg" },
  { name: "Tunisia", image: "tunisia.jpg" },
  { name: "Turkey", image: "turkey.jpg" },
  { name: "Turkmenistan", image: "turkmenistan.jpg" },
  { name: "Tuvalu", image: "tuvalu.jpg" },
  { name: "Uganda", image: "uganda.jpg" },
  { name: "Ukraine", image: "ukraine.jpg" },
  { name: "United Arab Emirates", image: "united_arab_emirates.jpg" },
  { name: "United Kingdom", image: "united_kingdom.jpg" },
  { name: "Uruguay", image: "uruguay.jpg" },
  { name: "Uzbekistan", image: "uzbekistan.jpg" },
  { name: "Vanuatu", image: "vanuatu.jpg" },
  { name: "Venezuela", image: "venezuela.jpg" },
  { name: "Vietnam", image: "vietnam.jpg" },
  { name: "Yemen", image: "yemen.jpg" },
  { name: "Zambia", image: "zambia.jpg" },
  { name: "Zimbabwe", image: "zimbabwe.jpg" }
  // Add more countries as needed
];

// Function to populate the dropdown menus
function populateDropdown() {
  const dropdownMenuOne = document.getElementById("dropdownMenuone");
  const dropdownMenuTwo = document.getElementById("dropdownMenutwo");

  countryNames.forEach(country => {
    const optionOne = document.createElement("a");
    optionOne.href = "#";
    optionOne.textContent = country.name;
    optionOne.onclick = function() {
      selectCountry(country.name, country.image, 'one');
    };
    dropdownMenuOne.appendChild(optionOne);

    const optionTwo = document.createElement("a");
    optionTwo.href = "#";
    optionTwo.textContent = country.name;
    optionTwo.onclick = function() {
      selectCountry(country.name, country.image, 'two');
    };
    dropdownMenuTwo.appendChild(optionTwo);
  });
}

// Call the function to populate the dropdown menus
populateDropdown();


function toggleDropdown(countryId) {
  document.getElementById("dropdownMenu" + countryId).style.display = "block";
}



// Function to filter countries based on search input
function filterCountries(countryId) {
  var input, filter, dropdown, countries, a, i, txtValue;
  input = document.getElementById("initial_country_" + countryId + "_name");
  filter = input.value.toUpperCase();
  dropdown = document.getElementById("dropdownMenu" + countryId);
  countries = dropdown.getElementsByTagName("a");

  // Show the dropdown menu
  toggleDropdown(countryId);

  // Filter and display countries based on user input
  for (i = 0; i < countries.length; i++) {
    a = countries[i];
    txtValue = a.textContent || a.innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      countries[i].style.display = "";
    } else {
      countries[i].style.display = "none";
    }
  }
}


// Function to select a country, populate the search input field, and display the corresponding image
function selectCountry(country, imageName, countryId) {
  document.getElementById("dropdownMenu" + countryId).style.display = "none";
  document.getElementById("initial_country_" + countryId + "_name").value = country;
  /*document.getElementById("country_" + countryId + "_image").src = "countries/" + imageName; // Set the image source
  document.getElementById("countryImage").alt = "Flag of " + country; // Set alternative text */
 // Close the dropdown after selection
}

