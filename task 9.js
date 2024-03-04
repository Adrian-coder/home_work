



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
