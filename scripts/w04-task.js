/* LESSON 3 - Programming Tasks */

/* Profile Object  */
let myProfile = {
    name: "Rafael Pereira de Souza Castro",
    photo: "images/rafael_castro.jpg",
    favoriteFoods: [
        "Fried Fish",
        "Feijoada",
        "Fruits",
        "Rice and Beans",
        "Churrasco"
    ],
    hobbies: [
        "Play Retro Video Games",
        "Ride Bike",
        "Watch Movies and Series",
        "Play Soccer"
    ],
    placesLived: []

};


/* Populate Profile Object with placesLive objects */
myProfile.placesLived.push({
    place: "São Paulo, Brazil",
    length: "More than 30 years"
});

myProfile.placesLived.push({
    place: "Pará, Brazil",
    length: "1,5 years"
});

myProfile.placesLived.push({
    place: "Maranhão, Brazil",
    length: "6 months"
});

myProfile.placesLived.push({
    place: "Brasília, Brazil",
    length: "2 years"
});




/* DOM Manipulation - Output */
/* Name */
const nameText = document.querySelector("#name");
nameText.textContent = myProfile.name;

/* Photo with attributes */
const photo = document.querySelector("#photo");
photo.src = myProfile.photo;
photo.alt = myProfile.name;

/* Favorite Foods List*/
myProfile.favoriteFoods.forEach(
    (food)=>{

        let foodsItem = document.createElement("li");
        foodsItem.textContent = food;
        document.querySelector("#favorite-foods").appendChild(foodsItem);
    }
)

/* Hobbies List */
myProfile.hobbies.forEach(
    (hobby)=>{

        let hobbyItem = document.createElement("li");
        hobbyItem.textContent = hobby;
        document.querySelector("#hobbies").appendChild(hobbyItem);
    }
)

/* Places Lived DataList */
myProfile.placesLived.forEach(

    (place)=>{

        let dt = document.createElement("dt");
        dt.textContent = place.place;
        let dd = document.createElement("dd");
        dd.textContent = place.length;
        document.querySelector("#places-lived").appendChild(dt);
        document.querySelector("#places-lived").appendChild(dd);

    }

)

