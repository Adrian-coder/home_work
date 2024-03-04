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
let a=1;
let b=5;
let s=0;

for(let i=a; i<=b; i++){

    if(i%2===0){
        s=s+i;
    }
}
console.log(s);


//task 3
let a1=15;
let b1=35;
let c1=77;

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


//task 6

let x=prompt("introdu numarul ");
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
let c=confirm(" cunosti js? ");
if(c){
    alert("Bravo");
}
else{
    alert(" Putem începe cursul ")
}



//task 10;
let n =100;
let d=(n)=>{
for(let i=1; i<=100; i++){
    if(n%i==0){
        console.log(i);
    }
}
}
console.log(d(n))

//Array task 1
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

/*
const a11=[1,2,3,4,5,6,7,8,5];
let min =a11[1];
let max=a11[1];
let n =a11.length;
for(int i=0; i<a11.length; i++){
    if(a11[i]>5){
        console.log(a11[i]);
    }
   if(a11[1]<a[i]){
    min=a11[i];
   }
   if(a11[1]>a11[i]){
    max=a11[i];
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
