let num1 = Number(prompt("Import number 1"));
let num2 = Number(prompt("Import number 2"));

function common(number1,number2) {

    while (number1 != number2) {
        if (number1 > number2) {
            number1 -= number2;
        } else {
            number2 -= number1;
        }
    }
    return number1;
}
function multiple(number1,number2)
{
    let mul=0;
    mul=(number1*number2)/common(num1,num2);
    return mul;
}
function showDisplay(){
    document.getElementById('ucln').innerHTML=common(num1,num2);
    document.getElementById('bcnn').innerHTML=multiple(num1,num2);
}
showDisplay();

