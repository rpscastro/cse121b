/* Project : Programming Tasks */

/* Declare and initialize global variables */
const countriesElement = document.querySelector("#countries");
let countryList = [];

/* async displayCountries Function */
const displayCountries = (countries) => {
    countries.forEach(country => {
        const article = document.createElement("article");
        const name = document.createElement("h3");
        const capital = document.createElement("h4");
        capital.textContent = `Capital: ${country.capital}`;
        name.textContent = country.name.common;
        const image = document.createElement("img");
        image.src = country.flags.png;
        image.alt = country.flags.alt;

        article.appendChild(name);
        article.appendChild(capital);
        article.appendChild(image);

        countriesElement.appendChild(article);
    });
};

/* async getCountries Function using fetch()*/

const getCountries = async () => {
    const response = await fetch("https://restcountries.com/v3.1/all");
    //check to see if the fetch was successful
    if (response.ok) {
        // the API will send us JSON...but we have to convert the response before we can use it
        // .json() also returns a promise...so we await it as well.
        countryList = await response.json();
        displayCountries(countryList);
    }
};

/* reset Function */
function reset(){
    while(countriesElement.firstChild){
        countriesElement.removeChild(countriesElement.firstChild);
    }
}

/* filterCountries Function */
function filterCountries(countries) {
    this.reset();

    let filter = document.querySelector("#filtered").value;


    switch (filter) {
        case "Africa":
            displayCountries(countries.filter(country => (country.region.indexOf("Africa") >= 0)));
            break;
        case "Americas":
            displayCountries(countries.filter(country => (country.region.indexOf("Americas") >= 0)));
            break;
        case "Antarctic":
            displayCountries(countries.filter(country => (country.region.indexOf("Antarctic") >= 0)));
            break;
        case "Asia":
            displayCountries(countries.filter(country => (country.region.indexOf("Asia") >= 0)));
            break;
        case "Europe":
            displayCountries(countries.filter(country => (country.region.indexOf("Europe") >= 0)));
            break;
        case "Oceania":
            displayCountries(countries.filter(country => (country.region.indexOf("Oceania") >= 0)));
            break;
        case "Independent":
            displayCountries(countries.filter(country => (country.independent)));
            break;
        case "NotIndependent":
            displayCountries(countries.filter(country => (!country.independent)));
            break;
        case "all":
            displayCountries(countries);
            break;

    }


}


getCountries();

/* Event Listener */
document.querySelector("#filtered").addEventListener("change", () => {filterCountries(countryList)});



