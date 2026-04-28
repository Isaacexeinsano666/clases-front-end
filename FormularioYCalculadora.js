function sumar(){
    const boton = document.getElementById('boton1');
    var resultado = 0;
    
    boton.addEventListener('click', () =>{
        const ValorA = document.getElementById('valor1').value;
        const valorB = document.getElementById('valor2').value;
        var resultado = (parseInt(ValorA)) + (parseInt(valorB))

        console.log(resultado)
        document.getElementById('texto-resultado1').innerHTML = resultado;
});
}

function restar(){
    const boton = document.getElementById('boton2');
    var resultado = 0;
    
    boton.addEventListener('click', () =>{
        const ValorA = document.getElementById('valor1').value;
        const valorB = document.getElementById('valor2').value;
        var resultado = (parseInt(ValorA)) - (parseInt(valorB))

        console.log(resultado)
        document.getElementById('texto-resultado1').innerHTML = resultado;
});
}

function dividir(){
    const boton = document.getElementById('boton3');
    var resultado = 0;
    
    boton.addEventListener('click', () =>{
        const ValorA = document.getElementById('valor1').value;
        const valorB = document.getElementById('valor2').value;
        var resultado = (parseInt(ValorA)) / (parseInt(valorB))

        console.log(resultado)
        document.getElementById('texto-resultado1').innerHTML = resultado;
});
}

function multiplicar(){
    const boton = document.getElementById('boton4');
    var resultado = 0;
    
    boton.addEventListener('click', () =>{
        const ValorA = document.getElementById('valor1').value;
        const valorB = document.getElementById('valor2').value;
        var resultado = (parseInt(ValorA)) * (parseInt(valorB))

        console.log(resultado)
        document.getElementById('texto-resultado1').innerHTML = resultado;
});
}

function mostrar(){
    const boton = document.getElementById('boton5');
    var resultado = 0;
    
    boton.addEventListener('click', () =>{
        const valorH = document.getElementById('nombre1').value;
        const valorJ = document.getElementById('nombre2').value;
        const valorK = document.getElementById('apellido1').value;
        const valorL = document.getElementById('apellido2').value;
        var resultado = (valorH) +' '+ (valorJ) +' '+ (valorK) +' '+ (valorL)

        console.log(resultado)
        document.getElementById('texto-resultado2').innerHTML = resultado;
});
}