myInfo = {
    name: "Brother T",
    photo: "images/photo.jpg",
    favoriteFoods: ["Fettucini", "Steak", "Chicken", "Shrimp", "Baked Potato"],
    hobbies: ["Reading", "Fishing", "Camping"],
    placesLived: [
      {
        place: "Rexburg, ID",
        length: "5 years",
      },
      {
        place: "Ammon, ID",
        length: "3 years",
      },
      {
        place: "Sandy, UT",
        length: "1 year",
      },
    ],
  };

//Activity 1
//   const foodsElement = document.querySelector('#favorite-foods');
  
//   function createandAppendFoodItem(food){
//     let favoriteFood = document.createElement("li");
//     favoriteFood.textContent = food;
//     foodsElement.appendChild(favoriteFood);
//     }

//   myInfo.favoriteFoods.forEach(createandAppendFoodItem);

//Activity 2

// const foodsElement = document.querySelector('#favorite-foods');

// function createandAppendFoodItem(food){
//     let favoriteFood = document.createElement("li");
//     favoriteFood.textContent = food;
//     return favoriteFood;
//     }

// elements = myInfo.favoriteFoods.map(createandAppendFoodItem);

// for(i=0;i<elements.length;i++){

//     foodsElement.appendChild(elements[i]);
// }

//Activity 3

//Create a function that will take a food string and return that string embedded in some html. (<li>food</li>)

function foodToHtml(food){

    return `<li>${food}</li>`;
}

//Create a function that will take a place string and return that string embedded in some html.
//The place is a bit more complex. We have the location and the length.
//You can use the following for the template: <dt>${place.place}</dt><dd>${place.length}</dd>)

function placeToHtml(place){

    return `<dt>${place.place}</dt><dd>${place.length}</dd>`;
}


//Create a function that will take a list, and a callback function to produce an HTML template.
//The function should transform our list by looping over it calling the template function
//once for each item in the list. The function should return all of the HTML strings
//flattened into one long string.

function generateListMarkup(list, templateCallback) {
    const htmlList = list.map(templateCallback);
    return htmlList.join("");
}


//Call the function above once for the placesLived list and again for the favoriteFoods list.
//Set the innerHTML of the appropriate HTML element to the results of the function call.

const foodsElement = document.querySelector("#favorite-foods");
const placesElement = document.querySelector("#places-lived");

foodsElement.innerHTML = generateListMarkup(
    myInfo.favoriteFoods,
    foodToHtml
  );
  placesElement.innerHTML = generateListMarkup(
    myInfo.placesLived,
    placeToHtml
  );

  const DAYS = 6;
  const LIMIT = 30;
  let studentReport = [11, 42, 33, 64, 29, 37, 44];

  for(i=0; i<studentReport.length; i++){

    if (studentReport[i] < LIMIT){

        console.log(studentReport[i]);
    }

  }

  let j = 0;
  while(j<studentReport.length){

    if (studentReport[j] < LIMIT){

        console.log(studentReport[j]);
    }
    j++;
  }

  studentReport.forEach(element => {
    if (element < LIMIT) console.log(element); 
  })


for(element in studentReport){
    if (studentReport[element] < LIMIT) console.log(studentReport[element]); 
}

const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

const d = new Date();


for(i = d.getDay(); i < d.getDay()+DAYS; i++ ){
    
    let day = weekday[i%7];
    console.log(day);
}



function calculate(a, b, callback) {

  callback(a + b);

}
  
function displayResult(result) {
   
  console.log('The result is: ' + result);
}

calculate(2, 3, displayResult)