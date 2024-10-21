let myCountires = ['Afghanistan', 'Albania', 'Algeria', 'Andorra', 'Angola', 'Antigua and Barbuda', 'Argentina',
    'Armenia', 'Australia', 'Austria', 'Azerbaijan', 'The Bahamas', 'Bahrain', 'Bangladesh', 'Barbados', 'Belarus', 
    'Belgium', 'Belize', 'Benin', 'Bhutan', 'Bolivia', 'Bosnia and Herzegovina', 'Botswana', 'Brazil', 'Brunei', 
    'Bulgaria', 'Burkina Faso', 'Burundi', 'Cabo Verde', 'Cambodia', 'Cameroon', 'Canada', ' Central African Republic', 
    'Chad', 'Chile', 'China', 'Colombia', 'Comoros', 'Congo',' Democratic Republic of the Congo',
    'Republic of the Costa Rica', 'Côte d’Ivoire', 'Croatia', 'Cuba', 'Cyprus', 'Czech Republic', 'Denmark', 'Djibouti', 
    'Dominica', ' Dominican Republic', 'East Timor', 'Ecuador', 'Egypt', 'El Salvador', 'Equatorial Guinea', 'Eritrea',
    'Estonia', 'Eswatini', 'Ethiopia', 'Fiji', 'Finland', 'France', 'Gabon', 'The Gambia', 'Georgia', 'Germany',
    'Ghana', 'Greece', 'Grenada', 'Guatemala', 'Guinea', 'Guinea-Bissau', 'Guyana', 'Haiti', 'Honduras', 'Hungary',
    'Iceland', 'India', 'Indonesia', 'Iran', 'Iraq', 'Ireland', 'Israel', 'Italy', 'Jamaica', 'Japan', 'Jordan',
    'Kazakhstan', 'Kenya', 'Kiribati', 'North Korea', 'South Korea', 'Kosovo', 'Kuwait', 'Kyrgyzstan', 'Laos', 'Latvia',
    'Lebanon', 'Lesotho', 'Liberia', 'Libya', 'Liechtenstein', 'Lithuania', 'Luxembourg', 'Madagascar', 'Malawi',
    'Malaysia', 'Maldives', 'Mali', 'Malta', 'Marshall Islands', 'Mauritania', 'Mauritius', 'Mexico', 'Micronesia', 
    'Federated States of Moldova', 'Monaco', 'Mongolia', 'Montenegro', 'Morocco', 'Mozambique', 'Myanmar', 'Namibia',
    'Nauru', 'Nepal', 'Netherlands', 'New Zealand', 'Nicaragua', 'Niger', 'Nigeria', 'North Macedonia', 'Norway', 
    'Oman', 'Pakistan', 'Palau', 'Panama', 'Papua New Guinea', 'Paraguay', 'Peru', 'Philippines', 'Poland', 'Portugal',
    'Qatar', 'Romania', 'Russia', 'Rwanda', 'Saint Kitts and Nevis', 'Saint Lucia', 'Saint Vincent and the Grenadines',
    'Samoa', 'San Marino', 'Sao Tome and Principe', 'Saudi Arabia', 'Senegal', 'Serbia', 'Seychelles', 'Sierra Leone',
    'Singapore', 'Slovakia', 'Slovenia', 'Solomon Islands', 'Somalia', 'South Africa', 'Spain', 'Sri Lanka', 'Sudan',
    'South Sudan', 'Suriname', 'Sweden', 'Switzerland', 'Syria', 'Taiwan', 'Tajikistan', 'Tanzania', 'Thailand', 
    'Togo', 'Tonga', 'Trinidad and Tobago', 'Tunisia', 'Turkey', 'Turkmenistan', 'Tuvalu', 'Uganda', 'Ukraine',
    'United Arab Emirates', 'United Kingdom', 'United States', 'Uruguay', 'Uzbekistan', 'Vanuatu', 'Vatican City',
    'Venezuela', 'Vietnam', 'Yemen', 'Zambia', 'Zimbabwe'];
   
 const section = document.getElementById('section'); //selected the section element
//display country
function displayContries() { // i created a function to display the countries
    myCountires.forEach(function(country){ // i looped through the array of countries 
        const para = document.createElement('p'); //i created a ptag element
        para.textContent = country; // i gave it a text content of each country that was looped 
        section.appendChild(para); //i appended the p tag to the section element
     })
}
displayContries(); // i called the function to display element

//search bar
const searchBar = document.forms['search'].querySelector('input'); //i selected the input element
searchBar.addEventListener('keyup', function(e){ // i added a key up event to it: When never you release the key of your keybord, it is triggered
    const numberOfCountires = document.getElementById('display'); // i selected the h3 element that will display the number of countries
    const listedCountries = []; // i created an empty array to put the countries to be displayed inside
    const value = e.target.value.toLowerCase(); // i targetted the value of what is typed in the input field
    const countries = section.getElementsByTagName('p'); // i selected all the countries in the ptag
    Array.from(countries).forEach(function(country){ // i converted the html collections of ptags to array
        let eachCountry = country.textContent; // i put the text content of ptags in a variable
        if (eachCountry.toLowerCase().indexOf(value) != -1) { //converted the text content to lowercase and checked if what is typed is the index of any country
            listedCountries.push(eachCountry) //i pushed each country with the index of what is typed to an array
            country.style.display = 'block';// if what is typed has an index, it should be displayed
        } else {
            country.style.display = 'none'; //else it should be hidden
        }  
    })
        
    numberOfCountires.textContent = `${listedCountries.length} Countries with the keyword ${value}`; //the textcontent of the h3 element should be the length of the array
    numberOfCountires.style.display = 'block'; //i styled the h3 element
    numberOfCountires.style.textAlign = 'center';
    numberOfCountires.style.padding = '10px';
    numberOfCountires.style.borderBottom= '1px solid #E9EED9';
})



 