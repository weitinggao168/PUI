let carts = document.querySelectorAll('.add-cart');
let selectors = document.querySelectorAll('.Price')

let products = [
  {
  name:'Cream Cheese Cinnamon Roll',
  tag:'Big',
  price:3.26,
  inCart:0
  },
  
  {
  name:'Cream Cheese Cinnamon Roll',
  tag:'Small',
  price:2.26,
  inCart:0
  }
  ];


for (let i=0; i<selectors.length; i++){
  selectors[i].addEventListener('click', () => {
    selectPrice();
  })
}

function selectPrice(){
  
}

carts.forEach(add => {
  add.addEventListener('click', () => {
  cartNumbers();
  });
});

function loadCartNumbers(){
  let productNumbers = localStorage.getItem('cartNumbers');
  
  if(productNumbers) {
    document.querySelector('#cart span').textContent = productNumbers;
  }
}


function cartNumbers() {
  let productNumbers = localStorage.getItem('cartNumbers');
  productNumbers = parseInt(productNumbers);
  
  
  if(productNumbers) {
    localStorage.setItem('cartNumbers', productNumbers + 1);
    document.querySelector('#cart span').textContent = productNumbers + 1;
  } else {
    localStorage.setItem('cartNumbers', 1);
    document.querySelector('#cart span').textContent = 1;
  }
}

loadCartNumbers();
