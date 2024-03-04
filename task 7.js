



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
