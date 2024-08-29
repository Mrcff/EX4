let numero = 12321; 


let str = numero.toString();

let strInvertida = '';

for (let i = str.length - 1; i >= 0; i--) {
    strInvertida += str[i];
}

if (str === strInvertida) {
    console.log("O número é um palíndromo.");
} else {
    console.log("O número não é um palíndromo.");
}
