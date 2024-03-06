//Task 1
let nr=9;
switch(nr){
    case 1:
        console.log("one");
        break;
    case 2:
        console.log("two");
        break;
    case 3:
        console.log("three");
        break;
    case 4:
        console.log("four");
        break;
    case 5:
        console.log("five");
        break;
     case 6:
        console.log("six");
        break;
     case 7:
        console.log("seven");
        break;
     case 8:
        console.log("eight");
        break;
     case 9:
        console.log("nine");
        break;  
    default:
        console.log(" ati introdus o cifra diferita de 1-9 ");
}



//task 2
let a=3;
let b=5;
let s=0;

for(let i=a; i<=b; i++){

    if(i%2===0){
        s=s+i;
    }
}
console.log(s);


//task 3
let a1=21;
let b1=25;
let c1=33;

if(a1>b1&&a1>c1){
    console.log(" numarul maxim este "+ a1);
}
else if(b1>a1&&b1>c1){
    console.log("numarul maxim este  "+ b1);
}
else{
    console.log("numarul maxim este "+ c1);
}


//task 4
function ucFirst(name) {
    return name[0].toUpperCase() + name.slice(1);
}

console.log(ucFirst("vasile"));


//task 5 
function extractCurrencyValue(str) {
    return parseInt(str.slice(1), 10);
}

console.log(extractCurrencyValue('$120'));


task 6 let x=prompt("introdu numarul ");
if(x>0){
    alert("1");
}
else if (x<0){
    alert("-1");
}
else if (x==0){
    alert("0");
}
else{
    alert(" Eroare ");
}



//task 7
let age=15;

if (!( age >= 14 && age <= 90)) {
    console.log(" prima varianta ")
}

if ( age < 14 || age > 90) {
    console.log(" doua varianta ")
}



//task 8 
let Username = prompt("username:" );
let Password = prompt(" password: ");

    if (Username === "user" && Password === "password") {
        alert("Salut");
    } else if (Username === "password") {
        alert("Parola gresita");
    } else if (Username === "user") {
        alert("loghin gresit");
    }
    else{
        alert(" Eroare")
    }



    //task 9 
let name=prompt(" introdu numele ");
alert(" salut "+name);
let c=confirm(" cunosti js ");
if(c){
    alert("Bravo");
}
else{
    alert(" Putem începe cursul ")
}


//task 10;
let n =100;
let d=(n)=>{
for(let i=0; i<=100; i++){
    if(n%i==0){
        console.log(i);
    }
}
}
console.log(d(n))

/Array task 1
let arr=[1,3,4,6,7,7];
for(let i=0; i<=arr.length; i++){
    console.log(" for ");
    console.log(arr[i]);
}

let arr1=[1,3,4,6,7,7];
let j=0;
console.log("  while ");
while(j<arr1.length){
    console.log(arr1[j])
    j=j+1;
}

let arr2=[1,3,4,6,7,7];
let j1=0;
console.log(" do while");
do{
j1=j1+1;
console.log(arr2[j1]);

}while(j1<arr2.length)
let nrArray=[1,3,4,6,7,7];
console.log(" for in");
for (const index in nrArray ) {
    console.log(nrArray[index]);
}
console.log(" for of");
for (const number of nrArray) {
    console.log(number);
}
console.log(" map ")
const array1 = [1, 4, 9, 16];
const map1 = array1.map((x) => x);
console.log(map1);


const a=[1,2,3,4,5,6,7,8,5];
let min =a[1];
let max=a[1];
let n =a.length;
for(int i=0; i<a.length; i++){
    if(a[i]>5){
        console.log(a[i]);
    }
   if(a[1]<a[i]){
    min=a[i];
}
if(a[1]>a[i]){
 max=a[i];
}
for (i = 0; i <n; i++) {
 for (j = 0; j < n - i - 1; j++) {
     if (arr[j] > arr[j + 1]) {
         swap(arr[j], arr[j + 1]);
         swapped = true;
     }
 }

}
/*
const styles = ['Джаз', 'Блюз'];
styles.push('Рок-н-ролл');
console.log(styles);


const middleIndex = Math.floor(styles.length / 2);
styles[middleIndex] = 'Классика';
console.log(styles);


const firstElement = styles.shift();
console.log(firstElement);
console.log(styles);


styles.unshift('Рэп', 'Регги');
console.log(styles);
*/

/* 
const a = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function extract(start, end) {
    return a.slice(start, end + 1);
}
const resultArray = extract(2, 4);
console.log(resultArray);  // [3, 4, 5]

*/

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

console.log(menu); // { width: 400, height: 600, title: "My menu" }

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

//Task 6 - object
let points = [{x: 1, y: 2}, {x: 3, y: 4}, {x: null, y: 4}, {x: 3, y: undefined}];

function filterValidPoints(array) {
    return array.filter(point => typeof point.x === 'number' && typeof point.y === 'number');
}

let validPoints = filterValidPoints(points);
console.log(validPoints); // [{x: 1, y: 2}, {x: 3, y: 4}]

//Task 7 - object
let person = {
  name: "Person",
  age: 123,
  salary: 1542.33,
  contacts: {
    phone: "112",
    email: "email@domain.com"
  },
  address: "Moldova",
  
  getName: function() {
    return this.name;
  },

  getAge: function() {
    return this.age;
  },

  getSalary: function() {
    return this.salary;
  },

  getContacts: function() {
    return this.contacts;
  },

  getAddress: function() {
    return this.address;
  }
};

console.log(person.getName());
console.log(person.getAge());
console.log(person.getSalary());
console.log(person.getContacts());
console.log(person.getAddress());

//Task 8 - object
const weekDays = {
  "Mo": "luni",
  "Tu": "marti",
  "We": "miercuri",
  "Th": "joi",
  "Fr": "vineri",
  "Sa": "sambata",
  "Su": "duminica",
};

function translate(days) {
  const translations = {
    "Mo": "Luni",
    "Tu": "Marti",
    "We": "Miercuri",
    "Th": "Joi",
    "Fr": "Vineri",
    "Sa": "Simbata",
    "Su": "Duminica",
  };

  const translatedDays = {};
  for (let key in days) {
    translatedDays[key] = translations[key];
  }
  
  return translatedDays;
}

const translatedWeekDays = translate(weekDays);
console.log(translatedWeekDays);

//Task 9 - object
const weekDays = {
  "Luni": "Mo",
  "Marti": "Tu",
  "Miercuri": "We",
  "Joi": "Th",
  "Vineri": "Fr",
  "Simbata": "Sa",
  "Duminica": "Su"
};

function invertObject(obj) {
  const inverted = {};
  for (let key in obj) {
    inverted[obj[key]] = key;
  }
  return inverted;
}

const invertedWeekDays = invertObject(weekDays);
console.log(invertedWeekDays);

//Task 10 - object
let person1 = {
  name: "Person",
  age: 123,
  salary: 1542.33,
  contacts: {
    phone: "112",
    email: "email@domain.com"
  },
  address: "Moldova"
};

let person2 = {
  name: "Person",
  age: 123,
  salary: 1542.33,
  contacts: {
    phone: "112",
    email: "email@domain.com"
  },
  address: "Moldova"
};

function Intersection(obj1, obj2) {
  const intersected = {};
  for (let key in obj1) {
    if (obj2.hasOwnProperty(key) && obj1[key] === obj2[key]) {
      intersected[key] = obj1[key];
    }
  }
  return intersected;
}

const result = Intersection(person1, person2);
console.log(result);

//Task 11 - object
let students = [
  {
    name: "First",
    marks: [8, 10, 7, 5, 4]
  },
  {
    name: "Second",
    marks: [6, 9, 8, 7, 5]
  },
  {
    name: "Third",
    marks: [7, 7, 6, 5, 4]
  },
  {
    name: "Fourth",
    marks: [9, 8, 7, 6, 5]
  },
  {
    name: "Fifth",
    marks: [5, 6, 4, 7, 8]
  }
];

function calculateAverage(marks) {
  return marks.reduce((acc, curr) => acc + curr, 0) / marks.length;
}

function printNameAndAverage(students) {
  students.forEach(student => {
    const average = calculateAverage(student.marks);
    console.log(`${student.name}: ${average}`);
  });
}

function printStudentsBelowAverage(students) {
  students.forEach(student => {
    const average = calculateAverage(student.marks);
    if (average < 5) {
      console.log(`${student.name}: ${average}`);
    }
  });
}

function findMinMaxAverageStudents(students) {
  let min = Infinity;
  let max = -Infinity;
  let minStudent, maxStudent;

  students.forEach(student => {
    const average = calculateAverage(student.marks);
    if (average < min) {
      min = average;
      minStudent = student;
    }
    if (average > max) {
      max = average;
      maxStudent = student;
    }
  });

  console.log(`valoarea medie maximala: ${maxStudent.name}: ${max}`);
  console.log(`valoarea medie minimala: ${minStudent.name}: ${min}`);
}

function sortStudentsByAverageDescending(students) {
  return students.sort((a, b) => calculateAverage(b.marks) - calculateAverage(a.marks));
}

function printStudentsAboveClassAverage(students) {
  const classAverage = calculateAverage(students.flatMap(student => student.marks));
  students.forEach(student => {
    const average = calculateAverage(student.marks);
    if (average > classAverage) {
      console.log(`${student.name}: ${average}`);
    }
  });
}

console.log("Nota medie:");
printNameAndAverage(students);
console.log("\elevi cu media < 5:");
printStudentsBelowAverage(students);
console.log("\elevi cu media cea mai mare si cea mai mica:");
findMinMaxAverageStudents(students);
console.log("\elevi cu nota media in ordine descrescaatoare:");
console.log(sortStudentsByAverageDescending(students));
console.log("\elevi cu nota medie mai mare decat valoarea minima:");
printStudentsAboveClassAverage(students);

//Task 12 - object
function displayName({ first, last, company }) {
  console.log(`Name: ${first} ${last}, Company: ${company}`);
}

const person = {
  first: 'Ion',
  last: 'Creanga',
  company: 'Amintiri din copilarie SRL'
};

displayName(person);