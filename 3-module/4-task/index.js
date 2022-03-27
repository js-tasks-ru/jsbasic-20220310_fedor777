function showSalary(users, age) {
  let newUsersByAge = users.filter(user => user.age <= age);
  let usersByBalance = newUsersByAge.map(user => `${user.name}, ${user.balance}`);
  usersByBalance = usersByBalance.join('\n');
  return usersByBalance;
}
