class Calculadora {
 somar() {
    var n1 = parseFloat(document.getElementById("n1").value);
    var n2 = parseFloat(document.getElementById("n2").value);
    var resultado = n1 + n2;
    alert(resultado);

}
subtrair() {
    var n1 = parseFloat(document.getElementById("n1").value);
    var n2 = parseFloat(document.getElementById("n2").value);
    var resultado = n1 - n2;
    alert(resultado);

}
 multiplicar() {
    var n1 = parseFloat(document.getElementById("n1").value);
    var n2 = parseFloat(document.getElementById("n2").value);
    var resultado = n1 * n2;
    alert(resultado);

}
 dividir() {
    var n1 = parseFloat(document.getElementById("n1").value);
    var n2 = parseFloat(document.getElementById("n2").value);
    var resultado = n1 / n2;
    alert(resultado);

}
  porcentagem() {
    var n1 = parseFloat(document.getElementById("n1").value);
    var n2 = parseFloat(document.getElementById("n2").value);
    var resultado = n1 * n2 / 100;
    alert(resultado);
  }

}
var calc = new  Calculadora();
/*alert(calc.somar());
alert(calc.subtrair());
alert(calc.multiplicar());
alert(calc.dividir());
alert(calc.porcentagem());*/

