document.querySelector('.low').addEventListener('click', lowBudget);
document.querySelector('.mid').addEventListener('click', midBudget);
document.querySelector('.high').addEventListener('click', highBudget);
document.querySelector('#option1').addEventListener('click', chooseOption1);
document.querySelector('#option2').addEventListener('click', chooseOption2);


const lowBudgetOptions = ['Burger King', 'Aldi Pizza', 'Aldi Stroganoff', 'Aldi salad and chicken', 'Taco Bell', 'Aldi Sausage and Peppers', 'Aldi Pesto Pasta'];
const midBudgetOptions = ['Sarku', 'Charley\'s Cheesesteaks', 'Smash Burger', 'Eon\'s', 'Taqueria Los Gueros', 'Juicy Platters', 'Bahama Breeze', 'Chipotle'];
const highBudgetOptions = ['Mama Chicken', 'Katsune', 'Woodstone Pizza', 'Tavolino\'s Pizza', 'Blackbeard Ramen', 'Jim Bob\'s', 'Rebar'];
let foodOptions = [];

function lowBudget() {
    // Round one options
    foodOptions = lowBudgetOptions;
    console.log(foodOptions);
    document.querySelector('#option1Text').innerHTML = foodOptions[0];
    document.querySelector('#option2Text').innerHTML = foodOptions[foodOptions.length - 1];

}

function midBudget() {
    foodOptions = midBudgetOptions;
    document.querySelector('#option1Text').innerHTML = foodOptions[0];
    document.querySelector('#option2Text').innerHTML = foodOptions[foodOptions.length - 1];
}

function highBudget() {
    foodOptions = highBudgetOptions;
    document.querySelector('#option1Text').innerHTML = foodOptions[0];
    document.querySelector('#option2Text').innerHTML = foodOptions[foodOptions.length - 1];
}

function chooseOption1() {
    if (foodOptions.length === 2) {
        alert(`${foodOptions[0].toUpperCase()}! It's what's for dinner.`);
    } else {
        foodOptions.pop();
        console.log(foodOptions);
        document.querySelector('#option2Text').innerHTML = foodOptions[foodOptions.length - 1];
    }
}

function chooseOption2() {
    if (foodOptions.length === 2) {
        alert(`${foodOptions[1].toUpperCase()}! It's what's for dinner.`);
    } else {
        foodOptions.shift();
        console.log(foodOptions);
        document.querySelector('#option1Text').innerHTML = foodOptions[0];
    }
}
