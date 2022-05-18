document.querySelector('.low').addEventListener('click', lowBudget);
document.querySelector('.mid').addEventListener('click', midBudget);
document.querySelector('.high').addEventListener('click', highBudget);


function lowBudget() {
    const lowBudgetOptions = ['Burger King', 'Aldi Pizza', 'Aldi Stroganoff', 'Aldi salad and chicken', 'Taco Bell'];
    const randomizeLowBudget = Math.floor(Math.random() * lowBudgetOptions.length);
    
    document.querySelector('.dinner').innerText = lowBudgetOptions[randomizeLowBudget];
}

function midBudget() {
    const midBudgetOptions = ['Sarku', 'Charley\'s Cheesesteaks', 'Smash Burger', 'Eon\'s', 'Juicy Platters', 'Bahama Breeze', 'Chipotle'];
    const randomizeMidBudget = Math.floor(Math.random() * midBudgetOptions.length);

    document.querySelector('.dinner').innerText = midBudgetOptions[randomizeMidBudget];
}

function highBudget() {
    const highBudgetOptions = ['Mama Chicken', 'Katsune', 'Woodstone Pizza', 'Tavolino\'s Pizza', 'Blackbeard Ramen', 'Jim Bob\'s', 'Rebar']
    const randomizeHighBudget = Math.floor(Math.random() * highBudgetOptions.length);

    document.querySelector('.dinner').innerText = highBudgetOptions[randomizeHighBudget]
}