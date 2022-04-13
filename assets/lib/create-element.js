export default function(price, imageLink, productName) {
const div = document.createElement('div');
div.classList.add('card');
div.innerHTML = `
    <div class="card__top">
        <img src="${imageLink}" class="card__image" alt="product">
        <span class="card__price">€${price}</span>
    </div>
    <div class="card__body">
        <div class="card__title">${productName}</div>
        <button type="button" class="card__button">
            <img src="/assets/images/icons/plus-icon.svg" alt="icon">
        </button>
    </div>
`
return div;

}