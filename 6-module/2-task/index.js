import createElement from '../../assets/lib/create-element.js';

export default class ProductCard {
  constructor(product) {
    let productCardPrice = createProductCardPrice (product.price);
    let ProductImageLink = createProductImageLink (product.image);
  
    function createProductCardPrice (price) {
      return price.toFixed(2);
    };
    function createProductImageLink (productImage) {
      let imageDir = '/assets/images/products/';
      let imageLink = imageDir + productImage;
      return imageLink;
    };

    // вызываем внешнюю функцию для верстки
    this.elem = createElement (productCardPrice, ProductImageLink, product.name);
 
  // событие при клике на + 
  let addProductBtn = this.elem.querySelector('.card__button');
 
  addProductBtn.addEventListener('click', function() {
    
    addProductBtn.dispatchEvent(new CustomEvent("product-add", {
      detail: product.id,
      bubbles: true 
      }));
 
  });
 };
};
