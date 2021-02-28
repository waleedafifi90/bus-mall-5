'use strict';

let productArray = ['bag','banana' ,'bathroom', 'boots', 'breakfast',
  'bubblegum', 'chair', 'cthulhu', 'god-duck', 'dragon', 'pen', 'pet-sweep',
  'scissors', 'shark', 'sweep', 'tauntaun', 'unicorn', 'usb', 'water-can', 'wine-glass'];


function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log(randomNumber(5,20));

//const imgSection =document.getElementById('imgSection');
const firstPic = document.getElementById('firstPic');
const secondPic = document.getElementById('secondPic');
const thirdPic = document.getElementById('thirdPic');

let firstProduct = 0;
let secondProduct = 0;
let thirdProduct = 0;



function Product(name) {
  this.name = name;
  do {
    this.img = `./img/${name}.jpg`;

  } while (this.name === 'usb'); {
    this.img = `./img/${name}.gif`;
  }
  this.clicks = 0;
  this.shown = 0;
  Product.all.push(this);
}

Product.all = [];
Product.counter = 0;

for (let j= 0; j<productArray.length; j++) {
  new Product(productArray[j]);
}
// console.log(Product.all);

function renderProduct() {
  let firstP = randomNumber(0, productArray.length - 1);
  firstPic.src = Product.all[firstProduct].img;
  firstPic.alt = Product.all[firstProduct].name;

  firstProduct = firstP;

  let secondP;
  //   do {
  secondP = randomNumber(0, Product.all.length - 1);

  //   } while (firstProduct === secondProduct);
  secondProduct = secondP;
  secondPic.src = Product.all[secondProduct].img;
  secondPic.alt = Product.all[secondProduct].name;

  let thirdP;
  //   do {
  thirdP = randomNumber(0, Product.all.length - 1);

  //   } while (firstProduct === thirdProduct || secondProduct === thirdProduct);
  thirdProduct = thirdP;
  thirdPic.src = Product.all[thirdProduct].img;
  thirdPic.alt = Product.all[thirdProduct].name;

  Product.all[firstPic].shown++;
  Product.all[secondPic].shown++;
  Product.all[thirdPic].shown++;

}

//console.log(Product.all);

for (let i=0;i<Product.all.length;i++){

  Product.all[i].renderProduct();
}

