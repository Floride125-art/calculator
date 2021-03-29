const operator_sign = prompt("Choose operator sign among( +, - , *, or /):");
const firstnum = parseFloat(prompt("Enter the first numbers: "));
const secondnum = parseFloat(prompt("Enter the Second number: "));
let output;
if(operator_sign == "+"){
    output = firstnum + secondnum;
}
else if ( operator_sign == "-"){
    output = firstnum - secondnum;
}
else if (operator_sign == "*") {
    output = firstnum * secondnum;
}
else {
    output = firstnum / secondnum;
}
console.log(" ${firstnum} ${operator_sign} ${secondnum} = ${output}");