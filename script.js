
// This is assigning global variables for the section we are printing the images to, and the three img tags
// This is so we can have it globally declared in the scope so we can modify the content (src)

let container = document.querySelector('section');
let product1 = document.querySelector('section img:first-child');
let product2 = document.querySelector('section img:nth-child(2)');
let product3 = document.querySelector('section img:nth-child(3)');
let button = document.getElementById('button');

// assign a global variable for clicks, so when the program is run the variable is set to 0

let clickcount = 0;

// Assigning global clicks, so I can break my loop if clicks == totalClicks

let totalClicks = 25;

let state = {
  duckArray : [],
};



// Forming constructor function to OOP code

function Products(name,path,views){

  this.name = name;
  this.path = path;
  this.views = views;
  this.clicks = 0;
}
// Making a function so we can randomzie through our array of images to show three different images

function getRandom(){
  return Math.floor(Math.random() * state.duckArray.length);
}

// Setting the values to get random so its a global scope and so it can be defined in other functions
var value1 = getRandom();
var value2 = getRandom();
var value3 = getRandom();

let valueArray = [value1, value2, value3];
let a = valueArray[0];
let b = valueArray[1];
let c = valueArray[2];

// Setting a render function, and assigning variables that contain random numbers so we can randomize through our array and show random images
function render(){
  value1 = getRandom();
  value2 = getRandom();
  value3 = getRandom();

  while (value1 === a){
    value1 = getRandom();
  }

  while (value2 === b){
    value2 = getRandom();
  }

  while (value3 === c){
    value3 = getRandom();
  }
  product1.src = state.duckArray[value1].path;
  product2.src = state.duckArray[value2].path;
  product3.src = state.duckArray[value3].path;
  product1.alt = state.duckArray[value1].name;
  product2.alt = state.duckArray[value2].name;
  product3.alt = state.duckArray[value3].name;

  // Setting the views for each randomized img to increment up once since it was viewed

  state.duckArray[value1].views++;
  state.duckArray[value2].views++;
  state.duckArray[value3].views++;
}
function duckDisplay() {
  container.addEventListener('click', function(event){
    if (clickcount === totalClicks){
      product1.remove();
      product2.remove();
      product3.remove();
      breakEvent();
    }
    else if(event.target === product1){
      //console.log(state.duckArray[value1].clicks);
      state.duckArray[value1].clicks++;
      //console.log(state.duckArray[value1].clicks);
      clickcount++;
      render();
      return;
    } else if (event.target === product2){
      state.duckArray[value2].clicks++;
      clickcount++;
      render();
      return;
    }else if(event.target === product3){
      state.duckArray[value3].clicks++;
      clickcount++;
      render();
      return;
    }

  });


}

function breakEvent(){
  container.removeEventListener('click', duckDisplay());
  results();
  return;
}

let existingViews = [];
let existingClicks = [];

let existingViewStorage = localStorage.getItem('')

function results(){
  document.getElementById('button').style.cursor = 'pointer';
  let ul = document.querySelector('ul');
  button.addEventListener('click', function(){
    for (let x = 0; x < state.duckArray.length; x++){
      let li = document.createElement('li');
      li.innerHTML = `${state.duckArray[x].name} has ${state.duckArray[x].views} views and ${state.duckArray[x].clicks} clicks.`;
      ul.append(li);
    }

    const ctx = document.getElementById('myChart');

    let clicksArray = [];
    for (let x = 0; x < state.duckArray.length;x++){
      let clicks = state.duckArray[x].clicks
      clicksArray.push(clicks) 
    }
    let viewsArray = [];
    for (let x = 0; x < state.duckArray.length;x++){
      let views = state.duckArray[x].views
      viewsArray.push(views) 
    }
    let nameArray = [];
    for (let x = 0; x < state.duckArray.length;x++){
      let names = state.duckArray[x].name
      nameArray.push(names) 
    }
    console.log(clicksArray)
    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: nameArray,
        datasets: [{
          label: '# of Views',
          data: viewsArray,
          borderWidth: 1
        },
        {
          label: '# of Clicks',
          data: clicksArray,
          borderWidth:1,
        },
      ],
      },
      options: {
        animations:{
          x: {
            duration: 5000,
            from: 0
          },
          y: {
            duration: 3000,
            from: 500
        
        }
          }
        }
    });

    button.remove();
  });
}


// Assigning New objects through the constructor function

let bag = new Products('R2D2 Bag', './img/bag.jpg', 0);
let banana = new Products('Banana Cutter', './img/banana.jpg', 0);
let bathroom = new Products('Toilet Paper Stand', './img/bathroom.jpg', 0);
let boots = new Products('Rain Boots', './img/boots.jpg', 0);
let breakfast = new Products('Breakfast Appliance', './img/breakfast.jpg', 0);
let bubblegum = new Products('Meatball Gum', './img/bubblegum.jpg', 0);
let chair = new Products('Red Chair', './img/chair.jpg', 0);
let cthulhu = new Products('Cthulhu Figurine', './img/cthulhu.jpg', 0);
let dogduck = new Products('Dog Duck Mask', './img/dog-duck.jpg', 0);
let dragon = new Products('Dragon Meat', './img/dragon.jpg', 0);
let pen = new Products('Utensil Pens', './img/pen.jpg', 0);
let petsweep = new Products('Pet Feet Sweeper', './img/pet-sweep.jpg', 0);
let scissors = new Products('Pizza Scissors', './img/scissors.jpg', 0);
let shark = new Products('Shark Sleeping Bag', './img/shark.jpg', 0);
let sweep = new Products('Baby Sweeper', './img/sweep.png', 0);
let tauntaun = new Products('Tauntaun Sleeping Bag', './img/tauntaun.jpg', 0);
let unicorn = new Products('Unicorn Meat', './img/unicorn.jpg', 0);
let watercan = new Products('Watering Can', './img/water-can.jpg', 0);
let wineglass = new Products('Fancy Wine Glass', './img/wine-glass.jpg', 0);



state.duckArray.push(bag, banana, bathroom, boots, breakfast, bubblegum, chair, cthulhu, dogduck, dragon, pen, petsweep, scissors, shark, sweep, tauntaun, unicorn, watercan, wineglass);

render();
duckDisplay();
