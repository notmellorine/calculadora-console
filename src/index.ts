import promptSync from 'prompt-sync';

const prompt= promptSync(); // Importa a função promptSync do módulo 'prompt-sync' e a atribui à variável prompt para permitir a entrada de dados pelo console.

function calcular() {
    let numero1 = prompt('Digite o primeiro número: ');
    let numero2 = prompt('Digite o segundo número: ');
    let op = prompt('Digite a operação desejada(soma, subtração, multiplicação, divisão): ');

    const valor1 = Number(numero1);
    const valor2 = Number(numero2);
    let total = 0;

    switch (op) {
        case 'soma': 
            total = valor1 + valor2;
            break;
        case 'subtração': 
            total = valor1 - valor2;
            break;
        case 'multiplicação': 
            total = valor1 * valor2;
            break;
        case 'divisão': 
            total = valor1 / valor2;
            break;
        default: console.log('Operação inválida');
            break;
    }

    return console.log(`O resultado da ${op} é: ${total}`);
};

calcular();