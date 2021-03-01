// 'use strict';

// let productArray = ['bag', 'banana', 'bathroom', 'boots', 'breakfast',
//   'bubblegum', 'chair', 'cthulhu', 'god-duck', 'dragon', 'pen', 'pet-sweep',
//   'scissors', 'shark', 'sweep', 'tauntaun', 'unicorn', 'usb', 'water-can', 'wine-glass'];


// function randomNumber(min, max) {
//   return Math.floor(Math.random() * (max - min + 1)) + min;
// }


// //const imgSection =document.getElementById('imgSection');
// const firstPic = document.getElementById('firstPic');
// const secondPic = document.getElementById('secondPic');
// const thirdPic = document.getElementById('thirdPic');


// let firstProduct = 0;
// let secondProduct = 0;
// let thirdProduct = 0;



// Product.counter = 0;
// Product.all = [];


// function Product(name) {
//   this.name = name;
//   do {
//     this.img = `./img/${name}.jpg`;

//   } while (this.name === 'usb'); {
//     this.img = `./img/${name}.gif`;
//   }
//   this.clicks = 0;
//   this.shown = 0;
//   Product.all.push(this);
// }

// // console.log(Product.all);

// // for (let j = 0; j < productArray.length; j++) {
// //   new Product(productArray[j]);
// // }



// function renderProduct() {
//   let firstP = randomNumber(0, productArray.length - 1);
//   firstPic.src = Product.all[firstProduct].img;
//   firstPic.alt = Product.all[firstProduct].name;

//   firstProduct = firstP;

//   let secondP;
//   //   do {
//   secondP = randomNumber(0, Product.all.length - 1);

//   //   } while (firstProduct === secondProduct);
//   secondProduct = secondP;
//   secondPic.src = Product.all[secondProduct].img;
//   secondPic.alt = Product.all[secondProduct].name;

//   let thirdP;
//   //   do {
//   thirdP = randomNumber(0, Product.all.length - 1);

//   //   } while (firstProduct === thirdProduct || secondProduct === thirdProduct);
//   thirdProduct = thirdP;
//   thirdPic.src = Product.all[thirdProduct].img;
//   thirdPic.alt = Product.all[thirdProduct].name;

//   Product.all[firstPic].shown++;
//   Product.all[secondPic].shown++;
//   Product.all[thirdPic].shown++;

// }

// //console.log(Product.all);

// for (let i = 0; i < Product.all.length; i++) {

//   Product.all[i].renderProduct();
// }



'use strict';

let productArray = [
  'bag', 'banana', 'bathroom', 'boots', 'breakfast',
  'bubblegum', 'chair', 'cthulhu', 'dog-duck', 'dragon', 'pen', 'pet-sweep',
  'scissors', 'shark', 'sweep', 'tauntaun', 'unicorn', 'usb', 'water-can', 'wine-glass'
];

//const imageSection = document.getElementById( 'imgSection' );
const firstPic = document.getElementById( 'firstPic' );
const secondPic = document.getElementById( 'secondPic' );
const thirdPic = document.getElementById( 'thirdPic' );
const button=document.getElementById('button');

let leftPIndex = 0;
let midPIndex = 0;
let lastPIndex=0;
const clickCounter = 25;

function Product( name ) {
  this.name = name;
  this.image = `./img/${name}.jpg`; //.${path}
  this.clicks = 0;
  this.shown = 0;
  Product.all.push( this );
}
//let path='';
Product.all = [];
Product.counter = 0;

for( let i = 0; i < productArray.length; i++ ) {
  new Product( productArray[i] );
}

// function checkIndex(index){
//   if(index=== 14 ){
//     path='png';
//   }
//   if(index===17){
//     path ='gif';
//   }
//   else{
//     path='jpg';
//   }
// }

function renderNewProduct() {
  let index = randomNumber( 0, Product.all.length - 1 );
  //checkIndex(index);
  firstPic.src = Product.all[index].image;
  firstPic.alt = Product.all[index].name;
  leftPIndex = index;

  let rightIndex;
  do {
    rightIndex = randomNumber( 0, Product.all.length - 1 );
  } while( index === rightIndex );
  //checkIndex(rightIndex);
  secondPic.src = Product.all[rightIndex].image;
  secondPic.alt = Product.all[rightIndex].name;
  midPIndex = rightIndex;
  let lastIndex;
  do{
    lastIndex=randomNumber(0,Product.all.length-1);
  }while(index===lastIndex||rightIndex===lastIndex);
  //checkIndex(lastIndex);
  thirdPic.src=Product.all[lastIndex].image;
  thirdPic.alt=Product.all[lastIndex].name;
  lastPIndex=lastIndex;

  Product.all[index].shown++;
  Product.all[rightIndex].shown++;
  Product.all[lastIndex].shown++;

  // rightImage.src = Goat.all[0].image;
  //console.log(Product.all.shown);
}
//button.hidden;

function handelClick( event ) {

  if( Product.counter < clickCounter ) {
    const clickedElement = event.target;
    if( clickedElement.id === 'firstPic' || clickedElement.id === 'secondPic' || clickedElement.id ==='thirdPic' ) {
      if( clickedElement.id === 'firstPic' ) {
        Product.all[leftPIndex].clicks++;
      }

      if( clickedElement.id === 'secondPic' ) {
        Product.all[midPIndex].clicks++;
      }
      if(clickedElement.id==='thirdPic'){
        Product.all[lastPIndex].clicks++;
      }

      Product.counter++;
      renderNewProduct();

      //console.log( Product.all );
    }
  }removeEventListener('click',handelClick);

  button.addEventListener('click',handelButton);
}

function handelButton(event){
  const parentElement =document.getElementById('ul');
  //const ul=document.createElement('ul');
  //parentElement.appendChild(ul);
  for(let i=0;i<Product.all.length;i++){
    const li=document.createElement('li');
    parentElement.appendChild(li);
    li.textContent=`${Product.all.name} is clicked ${Product.all.clicks} and shown ${Product.all.shown}`;
  }



}


//imageSection.addEventListener( 'click', handelClick );
firstPic.addEventListener('click',handelClick);
secondPic.addEventListener('click',handelClick);
thirdPic.addEventListener('click',handelClick);
//console.log( Product.all );


// button.addEventListener('click',handelButton);


function randomNumber( min, max ) {
  return Math.floor( Math.random() * ( max - min + 1 ) ) + min;
}

renderNewProduct();

