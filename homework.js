

// Task 1 - object
let user = {};
user.name = "John";
user.surname = "Smith";
user.name = "Pete";
delete user.name;

// Task 2 - object
let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
};

let sum = 0;

for (let key in salaries) {
  sum += salaries[key];
}

console.log(sum);

// Task 3 - object
function multiplyNumeric(obj) {
  for (let key in obj) {
      if (typeof obj[key] === 'number') {
          obj[key] *= 2;
      }
  }
}

let menu = {
width: 200,
height: 300,
title: "My menu"
};

multiplyNumeric(menu);

console.log(menu); 

// Task 4 - object
let user1 = {
  name: "User 1",
  age: 123
};

let user2 = {};

for (let key in user1) {
  user2[key] = user1[key];
}

user2.name = "User 2";
user2.age = 321;

console.log(user1);
console.log(user2);

// Task 5 - object
let person = {
  name: "Person",
  age: 123,
  salary: 1542.33,
  contacts: {
    phone: "112",
    email: 'email@domain.com'
  },
  address: "Moldova"
};

person.contacts.phone = "+37312345678";

delete person.address;

console.log(person);





  
