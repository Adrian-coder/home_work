
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
