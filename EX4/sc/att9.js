function calculadora(num1, num2, acao) {
    let resultado;

    switch (acao) {
        case "somar":
            resultado = num1 + num2;
            break;
        case "subtrair":
            resultado = num1 - num2;
            break;
        case "dividir":
            if (num2 === 0) {
                return "Não é possível dividir por zero.";
            }
            resultado = num1 / num2;
            break;
        case "multiplicar":
            resultado = num1 * num2;
            break;
        default:
            return "Ação inválida. Use 'somar', 'subtrair', 'dividir' ou 'multiplicar'.";
    }

    return resultado;
}

console.log(calculadora(5, 3, "somar"));      
console.log(calculadora(5, 3, "subtrair"));    
console.log(calculadora(5, 3, "dividir"));     
console.log(calculadora(5, 3, "multiplicar")); 
console.log(calculadora(5, 0, "dividir"));     
console.log(calculadora(5, 3, "potenciar"));
