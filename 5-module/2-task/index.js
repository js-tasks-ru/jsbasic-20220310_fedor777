function toggleText() {
let button = document.body.querySelector('.toggle-text-button');

button.addEventListener('click', function(event){
  let divItem = document.getElementById('text');
  if (divItem.hidden) {
    divItem.hidden = false;
  } else {
    divItem.hidden = true;
  };
});
}
