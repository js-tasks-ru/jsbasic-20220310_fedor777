function hideSelf() {
let hideButton = document.body.querySelector('.hide-self-button');

hideButton.addEventListener('click', function(event) {
  let elem = event.target;
  elem.hidden = true;
});

}
