
// This is assigning global variables for the section we are printing the images to, and the three img tags
// This is so we can have it globally declared in the scope so we can modify the content (src)


let container = document.querySelector("section");
let product1 = document.querySelector('section img:first-child');
let product2 = document.querySelector('section img:nth-child(2)');
let product3 = document.querySelector('section img:nth-child(3)');
let button = document.querySelector("button")

// assign a global variable for clicks, so when the program is run the variable is set to 0

let clicks = 0;

// Assigning global clicks, so I can break my loop if clicks == totalClicks

let totalClicks = 25;

let state = {
  duckArray : [],
}

// Forming constructor function to OOP code

function products(name,path,views){

  this.name = name;
  this.name = path;
  this.views = views;
  this.clicks = 0;
}
// Making a function so we can randomzie through our array of images to show three different images

function getRandom(){
  return Math.floor(Math.random() * state.duckArray.length);
}

// Setting a render function, and assigning variables that contain random numbers so we can randomize through our array and show random images

function render(){

  // These variables are only accessible in our function because of local scope

  let value1 = getRandom();
  let value2 = getRandom();
  let value3 = getRandom();

  //The products are the img tags in HTML, we are targetting the src and alt of each img tag to randomzie the img shown on each

  product1.src = state.duckArray[value1].src
  product2.src = state.duckArray[value2].src
  product3.src = state.duckArray[value3].src
  product1.alt = state.duckArray[value1].name
  product1.alt = state.duckArray[value2].name
  product1.alt = state.duckArray[value3].name

  // Setting the views for each randomized img to increment up once since it was viewed

  state.duckArray[value1] = views++;
  state.duckArray[value2] = views++;
  state.duckArray[value3] = views++;
}

// Assigning New objects through the constructor function

let bag = products('R2D2 Bag', './img/bag.jpg', 0);
let banana = products('Banana Cutter', './img/banana.jpg', 0);
let bathroom = products('Toilet Paper Stand', './img/bathroom.jpg', 0);
let boots = products('Rain Boots', './img/boots.jpg', 0);
let breakfast = products('Breakfast Appliance', './img/breakfast.jpg', 0);
let bubblegum = products('Meatball Gum', './img/bubblegum.jpg', 0);
let chair = products('Red Chair', './img/chair.jpg', 0);
let cthulhu = products('Cthulhu Figurine', './img/cthulhu.jpg', 0);
let dogduck = products('Dog Duck Mask', './img/dog-duck.jpg', 0);
let dragon = products('Dragon Meat', './img/dragon.jpg', 0);
let pen = products('Utensil Pens', './img/pen.jpg', 0);
let petsweep = products('Pet Feet Sweeper', './img/pet-sweep.jpg', 0);
let scissors = products('Pizza Scissors', './img/scissors.jpg', 0);
let shark = products('Shark Sleeping Bag', './img/shark.jpg', 0);
let sweep = products('Baby Sweeper', './img/sweep.jpg', 0);
let tauntaun = products('Tauntaun Sleeping Bag', './img/tauntaun.jpg', 0);
let unicorn = products('Unicorn Meat', './img/unicorn.jpg', 0);
let watercan = products('Watering Can', './img/watercan.jpg', 0);
let wineglass = products('Fancy Wine Glass', './img/wineglass.jpg', 0);


render();
state.duckArray.push(bag, banana, bathroom, boots, breakfast, bubblegum, chair, cthulhu. dogduck. dragon, pen, petsweep, scissors, shark, sweep, tauntaun, unicorn, watercan, wineglass);

