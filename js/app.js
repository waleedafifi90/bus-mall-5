
'use strict';

let productArray = [
  'bag.jpg', 'banana.jpg', 'bathroom.jpg', 'boots.jpg', 'breakfast.jpg',
  'bubblegum.jpg', 'chair.jpg', 'cthulhu.jpg', 'dog-duck.jpg', 'dragon.jpg', 'pen.jpg', 'pet-sweep.jpg',
  'scissors.jpg', 'shark.jpg', 'sweep.png', 'tauntaun.jpg', 'unicorn.jpg', 'usb.gif', 'water-can.jpg', 'wine-glass.jpg'
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

function Product( name ,image) {
  this.name = name;
  this.image = `./img/${image}`;
  this.clicks = 0;
  this.shown = 0;
  Product.all.push( this );
}

Product.all = [];
Product.counter = 0;

function getName( fileName ) {
  return fileName.split( '.' ).slice( 0, -1 ).join( '.' );
}


for( let i = 0; i < productArray.length; i++ ) {
  new Product( getName( productArray[i] ), productArray[i] );


}



function renderNewProduct() {
  let index = randomNumber( 0, Product.all.length - 1 );

  firstPic.src = Product.all[index].image;
  firstPic.alt = Product.all[index].name;
  leftPIndex = index;

  let rightIndex;
  do {
    rightIndex = randomNumber( 0, Product.all.length - 1 );
  } while( index === rightIndex );

  secondPic.src = Product.all[rightIndex].image;
  secondPic.alt = Product.all[rightIndex].name;
  midPIndex = rightIndex;
  let lastIndex;
  do{
    lastIndex=randomNumber(0,Product.all.length-1);
  }while(index===lastIndex||rightIndex===lastIndex);

  thirdPic.src=Product.all[lastIndex].image;
  thirdPic.alt=Product.all[lastIndex].name;
  lastPIndex=lastIndex;

  Product.all[index].shown++;
  Product.all[rightIndex].shown++;
  Product.all[lastIndex].shown++;

}


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


    }
  }removeEventListener('click',handelClick);

  button.addEventListener('click',handelButton);
}

function handelButton( ){
  const parentElement =document.getElementById('ol');
  //const ul=document.createElement('ul');
  //parentElement.appendChild(ul);
  for(let i=0;i<Product.all.length;i++){
    const li=document.createElement('li');
    parentElement.appendChild(li);
    li.textContent=`${Product.all[i].name} is clicked ${Product.all[i].clicks} and shown ${Product.all[i].shown}`;
  }



  button.removeEventListener('click',handelButton);
  button.innerText='reset';
  button.onclick=function(){
    location.reload();
  };
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

