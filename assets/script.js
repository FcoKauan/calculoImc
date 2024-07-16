//capturar evento de submit do formulario
const form = document.querySelector('#formulario');

form.addEventListener('submit', function (e){
    e.preventDefault();
    const inputPeso = e.target.querySelector('#peso');
    const inputAltura = e.target.querySelector('#altura');

    const peso = Number(inputPeso.value);
    const altura = Number(inputAltura.value);

    if (!peso) {
        setResultado('Peso inválido', false);
        return;
    }

    if (!altura) {
        setResultado('Altura inválida', false);
        return;
    }

    const imc = getImc(peso, altura);
    const nivelImc= getNivelamento(imc);

    const msg = `Seu IMC é ${imc} (${nivelImc}).`;

    setResultado(msg, true);
});
/*
Menos que 18.5 Abaixo do peso
Entre 18.5 e 24.9 Peso normal
Entre 25 e 29.9 Sobrepeso
Entre 30 e 34.9 Obesidade grau 1
Entre 35 e 39.9 Obesidade grau 2
Mais do que 40 Obesidade grau 3
*/
function getNivelamento (imc) {
    const nivel = ['Abaixo do peso', 'Peso Normal', 'Sobrepeso', 'Obesidade grau 1','Obesidade grau 2', 'Obesidade grau 3'];
    
    // se o if tiver apenas uma linha de código não precisa usar as chaves pode deixar apenas em uma linha
    if (imc >=39.9) return nivel[5];
    if (imc >=34.9) return nivel[4];
    if (imc >=29.9) return nivel[3];
    if (imc >=24.9) return nivel[2];
    if (imc >=18.5) return nivel[1];
    if (imc < 18.5) return nivel[0];
}

function getImc (peso, altura) {
    const imc = peso/altura**2;
    return imc.toFixed(2);  
}

function criaP () {
    const p = document.createElement('p');
    return p;
}

function setResultado (msg, isValid) {
    const resultado = document.querySelector('#resultado');
    resultado.innerHTML = ''; 
    
    const p = criaP();
   
    if (isValid) {
        p.classList.add('good');
    } else {
        p.classList.add('bad');  
    }
    p.innerHTML = msg;
    resultado.appendChild(p);
}
