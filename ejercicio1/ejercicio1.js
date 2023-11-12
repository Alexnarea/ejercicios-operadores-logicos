let age = Number(prompt("Ingrese su edad"));
let licencia = confirm("Tiene usted licencia profesional?");
if(age >= 25 && licencia){
    alert("Usted es Apto");
}
else{
    alert("Usted no es Apto");
}