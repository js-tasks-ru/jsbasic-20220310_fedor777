function makeFriendsList(friends) {
  let ul = document.createElement('UL');

  for (let item of friends) {
    let li = document.createElement('LI');
    let name = item.firstName + ' ' + item.lastName;
    li.innerHTML += name;
    ul.appendChild(li);
  };

 return ul;
}
