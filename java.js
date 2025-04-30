function sumar() {
    document.getElementById("simbolo").textContent= "+";
//obtener los valores de los campos de entrada
const numero1= parseFloat(document.getElementById("number1").value);
const numero2= parseFloat(document.getElementById("number2").value);
//sumar los dos numeros
const resultado= numero1+numero2;
//mostrar el resultado en el elemento id "resultado"
document.getElementById("resultado").textContent = resultado;
}

function restar() {
    
    document.getElementById("simbolo").textContent= "-";
    const numero1= parseFloat(document.getElementById("number1").value);
    const numero2= parseFloat(document.getElementById("number2").value);
    const resultado= numero1-numero2;
    document.getElementById("resultado").textContent = resultado;
}

function multiplicar() {
    document.getElementById("simbolo").textContent= "*";
    const numero1= parseFloat(document.getElementById("number1").value);
    const numero2= parseFloat(document.getElementById("number2").value);
    const resultado= numero1*numero2;
    document.getElementById("resultado").textContent = resultado;
}

function dividir() {
    document.getElementById("simbolo").textContent= "/";
    const numero1= parseFloat(document.getElementById("number1").value);
    const numero2= parseFloat(document.getElementById("number2").value);
    const resultado= numero1/numero2;
    document.getElementById("resultado").textContent = resultado;
}

function borrar() {
  document.getElementById("number1").value="";
  document.getElementById("number2").value="";

  document.getElementById("simbolo").textContent ="";
  document.getElementById("resultado").textContent="";
}
















