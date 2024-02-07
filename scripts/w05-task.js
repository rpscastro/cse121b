/* W05: Programming Tasks */

/* Declare and initialize global variables */
const templesElement = document.querySelector("#temples");
let templeList = [];

/* async displayTemples Function */
const displayTemples = (temples) => {
    temples.forEach(temple => {
        const article = document.createElement("article");
        const name = document.createElement("h3");
        name.textContent = temple.templeName;
        const image = document.createElement("img");
        image.src = temple.imageUrl;
        image.alt = temple.location;

        article.appendChild(name);
        article.appendChild(image);

        templesElement.appendChild(article);
    });
};

/* async getTemples Function using fetch()*/

const getTemples = async () => {
    const response = await fetch("https://byui-cse.github.io/cse121b-ww-course/resources/temples.json");
    //check to see if the fetch was successful
    if (response.ok) {
        // the API will send us JSON...but we have to convert the response before we can use it
        // .json() also returns a promise...so we await it as well.
        templeList = await response.json();
        displayTemples(templeList);
    }
};

/* reset Function */
function reset(){
    while(templesElement.firstChild){
        templesElement.removeChild(templesElement.firstChild);
    }
}

/* filterTemples Function */
function filterTemples(temples){
    this.reset();
    
    let filter = document.querySelector("#filtered").value;

    console.log(filter);
    
    switch(filter){
        case "utah":
            displayTemples(temples.filter(temple=>(temple.location.indexOf("Utah")>=0)));
            break;
        case "notutah":
            displayTemples(temples.filter(temple=>(temple.location.indexOf("Utah")<0)));
            break;
        case "older":
            displayTemples(temples.filter(temple=>(new Date(temple.dedicated) < new Date(1950, 0, 1))));
            break;
        case "all":
            displayTemples(temples);
            break;

    }


}

getTemples();

/* Event Listener */
document.querySelector("#filtered").addEventListener("change", () => {filterTemples(templeList)});


