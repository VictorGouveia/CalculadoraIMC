const calcular = document.getElementById('calcular');

function imc (){

    const nome = document.getElementById('nome').value;
    const altura = document.getElementById('altura').value; //pegando sempre o valor
    const peso = document.getElementById('peso').value;

    const resultado = document.getElementById('resultado');

    if (nome !== "" && altura !== "" && peso !== ""){             //verificando se tem algo preenchido em nome

        const valorIMC = (peso / (altura * altura)).toFixed(2);

        resultado.textContent = valorIMC;

        let classificacao = ''; // verificação em relação ao seu peso

        if(valorIMC < 18.5){
            classificacao = 'abaixo do peso.'
        }else if(valorIMC < 25){
            classificacao = 'peso ideal'
        }else if(valorIMC < 30){
            classificacao = 'levemente acima do peso'
        }else if(valorIMC < 35){
            classificacao = 'Obesidade Grau 1'
        }else if(valorIMC < 40){
            classificacao = 'Obesidade Grau 2'
        }else{
            classificacao = 'Obesidade Grau 3'
        }



        resultado.textContent = `${nome} seu IMC é: ${valorIMC} e você está ${classificacao}`

    }else{
        resultado.textContent = "Preencha todos os campos!";   //por texto dentro da DIV
    }



}

calcular.addEventListener('click', imc); // evento click no button 
