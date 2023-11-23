// Write your code on this file. Please don't change the existing code
// unless absolutely needed.

//Initial price of the burger
var wholeWheatBun = 20;
// var Patty = 80;
// var Cheese = 10;
// var Tomatoes = 20;
// var Onions = 20;

//Ingredients of the burger along with the price
// Clue: the name is same as the textcontent of the button. Will be useful later on :)
var ingredients = {
  Patty: 80,
  Cheese: 10,
  Tomatoes: 20,
  Onions: 20,
  Lettuce: 20
};

//Current state of the ingredients in the burger
var state = {
  Patty: true,
  Cheese: true,
  Tomatoes: true,
  Onions: true,
  Lettuce: true
};

// This function renders the entire screen everytime the state changes accordingly
function renderAll() {
  renderPatty();
  renderCheese();
  renderTomatoes();
  renderOnions();
  renderLettuce();
  renderButtons();
  renderIngredientsBoard();
  renderPrice();
}

function renderPatty() {
  let patty = document.querySelector("#patty");
  //you can also use getElementById
  if (state.Patty) {
    patty.style.display = "inherit";
  } else {
    patty.style.display = "none";
  }
}

function renderCheese() {
  //Trial 1 - Change the visibility of cheese based on state by manipulating the DOM
  let cheese = document.querySelector("#cheese");
  //you can also use getElementById
  if (state.Cheese) {
    cheese.style.display = "inherit";
  } else {
    cheese.style.display = "none";
  }
}

function renderTomatoes() {
  //Trial 1 - Change the visibility of Tomatoes based on state by manipulating the DOM
  let Tomato = document.querySelector("#tomato");
  //you can also use getElementById
  if (state.Tomatoes) {
    Tomato.style.display = "inherit";
  } else {
    Tomato.style.display = "none";
  }
}

function renderOnions() {
  //Trial 1 - Change the visibility of Onions based on state by manipulating the DOM
  let  tomato = document.querySelector("#onion");
  //you can also use getElementById
  if (state.Onions) {
    tomato.style.display = "block";
  } else {
    tomato.style.display = "none";
  }
}

function renderLettuce() {
  //Trial 1 - Change the visibility of Lettuce based on state by manipulating the DOM
  let  lettuce = document.querySelector("#lettuce");
  //you can also use getElementById
  if (state.Lettuce) {
    lettuce.style.display = "block";
  } else {
    lettuce.style.display = "none";
  } 
}

document.querySelector(".btn-patty").onclick = function () {
  state.Patty = !state.Patty;
  renderAll();
};

// Trial 2 - Setup event listener for the cheese button
document.querySelector(".btn-cheese").onclick = function () {
  state.Cheese = !state.Cheese;
  renderAll();
};

// Trial 2 - Setup event listener for the tomatoes button
document.querySelector(".btn-tomatoes").onclick = function () {
  state.Tomatoes = !state.Tomatoes;
  renderAll();
};

// Trial 2 - Setup event listener for the onion button
document.querySelector(".btn-onions").onclick = function () {
  state.Onions = !state.Onions;
  renderAll();
};

// Trial 2 - Setup event listener for the lettuce button
document.querySelector(".btn-lettuce").onclick = function () {
  state.Lettuce = !state.Lettuce;
  renderAll();
};

//Challenge 1 - Add/Remove the class active to the buttons based on state
function renderButtons() {
  for (let ingredient in state) {
    let button = document.querySelector(`.btn-${ingredient.toLowerCase()}`);
    if (state[ingredient]) {
      button.classList.add('active');
    } else {
      button.classList.remove('active');
    }
  }
}

// Challenge 2 - Render only the items selected in the ingredients board based on the state
function renderIngredientsBoard() {
  const iB = document.querySelector(".menu-container");
  iB.innerHTML = `
    <h3>Ingredients</h3>
    ${Object.keys(state)
      .filter(ingredient => state[ingredient])
      .map(ingredient => `<p class="items">${ingredient}</p>`)
      .join("")}
  `;
}


// Judgement 1 - Display the calculated price based on ingredients
function renderPrice() {
  let total = wholeWheatBun;
  for (let ingredient in state) {
    if (state[ingredient]) {
      total += ingredients[ingredient];
    }
  }
  document.querySelector(".price-details").textContent = `INR ${total}`;
}

