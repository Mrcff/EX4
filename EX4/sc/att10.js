let numero = 3; 

let diaSemana;
let tipoDia;

switch (numero) {
    case 1:
        diaSemana = "Domingo";
        tipoDia = "Fim de semana";
        break;
    case 2:
        diaSemana = "Segunda-feira";
        tipoDia = "Dia útil";
        break;
    case 3:
        diaSemana = "Terça-feira";
        tipoDia = "Dia útil";
        break;
    case 4:
        diaSemana = "Quarta-feira";
        tipoDia = "Dia útil";
        break;
    case 5:
        diaSemana = "Quinta-feira";
        tipoDia = "Dia útil";
        break;
    case 6:
        diaSemana = "Sexta-feira";
        tipoDia = "Dia útil";
        break;
    case 7:
        diaSemana = "Sábado";
        tipoDia = "Fim de semana";
        break;
    default:
        diaSemana = "Número inválido";
        tipoDia = "";
}

if (diaSemana !== "Número inválido") {
    console.log(diaSemana + ", " + tipoDia);
} else {
    console.log(diaSemana);
}
