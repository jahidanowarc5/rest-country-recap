


const countryLoad = () => {
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data => displayCountry(data))
}

const displayCountry = countries =>{
    // console.log(countries);
const allCountriesHtml = countries.map(country =>getCountries(country));
console.log(allCountriesHtml);
const container = document.getElementById('countries');
container.innerHTML = allCountriesHtml.join(' ');
}


const getCountries = country =>{
    return `
    <div class="country col-md-6">
    <h3>${country.name.common}</h3>
    <img src="${country.flags.png}"
    </div>
    `
}






countryLoad();
