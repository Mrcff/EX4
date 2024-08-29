let corIngles = "blue"; 

let corPortugues;

switch (corIngles) {
    case "red":
        corPortugues = "vermelho";
        break;
    case "blue":
        corPortugues = "azul";
        break;
    case "green":
        corPortugues = "verde";
        break;
    case "yellow":
        corPortugues = "amarelo";
        break;
    case "black":
        corPortugues = "preto";
        break;
    default:
        corPortugues = "cor desconhecida";
}

console.log("A cor em português é: " + corPortugues);
