
var titulo = document.querySelector(".titulo");
console.log(titulo.textContent);
titulo.textContent = "Nutricionismo";


var pacientes = document.querySelectorAll(".paciente");

for(i=0;i<pacientes.length;i++){

    var paciente=pacientes[i]

    var tdPeso = paciente.querySelector(".info-peso");
    var peso = tdPeso.textContent;

    var tdAltura = paciente.querySelector(".info-altura");
    var altura = tdAltura.textContent;

    var tdImc = paciente.querySelector(".info-imc");

    pesoEhValido = validaPeso(peso);
    alturaEhValida = validaAltura(altura);

    if(!pesoEhValido){
        console.log("Peso inválido")
        console.log(peso)
        pesoEhValido = false;
        tdImc.textContent="Peso inválido";
        paciente.classList.add("paciente-invalido");

    };

    if(!alturaEhValida){
        console.log("Altura inválido")
        console.log(altura)
        alturaEhValida = false;
        tdImc.textContent="Altura inválida";
        paciente.classList.add("paciente-invalido");
    };

    if( alturaEhValida && pesoEhValido){
        var imc= calculaImc(peso,altura)
        tdImc.textContent=imc;
    } 


};

function calculaImc(peso,altura){
    var imc = peso/(altura*altura);
    return imc.toFixed(2);
};

function validaPeso(peso){
    if(peso<=0 || peso>=1000){
        return false;

    } else{
        return true;
    };

};

function validaAltura(altura){
    if(altura<=0 || altura>=3){
        return false;
    }else {
        return true;
    };


};