// create a function where sum of 3 number and set the default parameter

function sum (num1=0, num2=0, num3=0){

    const result = num1+num2+ num3;
    return result;
}

const result = sum(5,6,2);
console.log(result);