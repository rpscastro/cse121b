/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
let fullname = 'Rafael Pereira de Souza Castro';
let currentYear = 2024;
let profilePicture = 'images/rafael_castro.jpg';

/* Step 3 - Element Variables */
const nameElement = document.getElementById('name');
const foodElement = document.getElementById('food');
let yearElement = document.querySelector('#year');
let imageElement = document.querySelector('img');



/* Step 4 - Adding Content */
nameElement.innerHTML = `<strong>${fullname}</strong>`;
yearElement.textContent = currentYear;
imageElement.setAttribute('src', profilePicture);
imageElement.setAttribute('alt', `Profile image of ${fullname}`);



/* Step 5 - Array */
let foods  = ['Fried Fish', 'Feijoada', 'Fruits', 'Rice and Beans', 'Churrasco'];
foodElement.textContent = foods;
let anotherFood =  'Ice Cream';
foods.push(anotherFood);
foodElement.innerHTML += `<br>${foods}`;
foods.shift();
foodElement.innerHTML += `<br>${foods}`;
foods.pop();
foodElement.innerHTML += `<br>${foods}`;






