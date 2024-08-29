let letra = 'a'; 

let resultado;

switch (letra.toLowerCase()) {
    case 'a':
    case 'e':
    case 'i':
    case 'o':
    case 'u':
        resultado = "A letra é uma vogal.";
        break;
    case 'b':
    case 'c':
    case 'd':
    case 'f':
    case 'g':
    case 'h':
    case 'j':
    case 'k':
    case 'l':
    case 'm':
    case 'n':
    case 'p':
    case 'q':
    case 'r':
    case 's':
    case 't':
    case 'v':
    case 'w':
    case 'x':
    case 'y':
    case 'z':
        resultado = "A letra é uma consoante.";
        break;
    default:
        resultado = "Entrada inválida. Insira uma letra do alfabeto.";
}

console.log(resultado);
