
// Creating constructor function for products
// This declares 3 properties, the name of the prod., its file path, and how many times its shown

function productDisplay(name,path,shown){

  this.name = name;
  this.name = path;
  this.shown = shown;
  this.render = function(){
    let img = document.createElement("img");
    
  }
}




let bag = new productDisplay('Bag',"/img/bag.jpg", //no number yet)
