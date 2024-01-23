
//Activity 1 - Map

const array = ['one', 'two', 'three'];

const new_array = array.map(number => `<li>${number}</li>`) ;

console.log(new_array);

document.getElementById("myList").innerHTML =  new_array.join();

//Activity 2 - Map 
const letterGrades = ['A', 'B', 'A'];

const gpaPoints = letterGrades.map(function (letter){
    let gpaPoints = 0;
    switch (letter) {
    case "A":
        gpaPoints = 4;
        break;
    case "B":
        gpaPoints = 3;
        break;
    default:
        gpaPoints = -1;

    }
    
    return gpaPoints;
});

console.log(gpaPoints);

//Activity 3 - Reduce

const initialValue = 0;
const GPA = gpaPoints.reduce(
    (accumulator, currentValue) => accumulator + currentValue, initialValue,
) / gpaPoints.length;

console.log(GPA)


//Activity 4 - Filter
const fruits = ['watermelon', 'peach', 'apple', 'tomato', 'grape'];

const newFruits = fruits.filter(fruit => fruit.length > 6);

console.log(newFruits);

// Activity 5 - indexOf 

const numbers = [12, 34, 21, 54];

luckNumber = 21;


console.log(numbers.indexOf(luckNumber));