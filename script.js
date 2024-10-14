const products = document.querySelectorAll('.products');
const cart = document.querySelector('#cart');
const main = document.querySelector('#main');
const button = document.querySelector('#button');
let current,
  counter = 0,
  offsetX,
  offsetY;

products.forEach(function (product) {
  product.addEventListener('dragstart', function (e) {
    current = this;
  });
});

cart.addEventListener('dragover', function (e) {
  e.preventDefault();
});

cart.addEventListener('drop', function addProduct() {
  this.appendChild(current);
  current.classList.add('inCart');
  counter++;
  if (counter >= 3) {
    button.style.display = 'block';
    this.removeEventListener('drop', addProduct);
  }
});

elem1.addEventListener('touchstart', function (e) {
  offsetX = e.offsetX;
  offsetY = e.offsetY;
});
elem1.addEventListener('touchend', function (e) {
  elem1.style.top = e.pageY - offsetY + 'px';
  elem1.style.top = e.pageX - offsetX + 'px';
});

// main.addEventListener('dragover', function (e) {
//   e.preventDefault();
// });

// main.addEventListener('drop', function () {
//   this.appendChild(current);
//   current.classList.remove('inCart');
//   counter--;
//   if (counter < 3) {
//     button.style.display = 'none';
//   }
// });
