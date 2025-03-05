// amn akta function likbi jekhane jodi name na dawa hoy shekhatre default parameter hesabe
// anonymous and monthly income jodi na dawa hoy tahole return korbe 0;


function MonthlyIncome(name = "anonymous", income = 0){

    if(typeof name !== "string" && typeof name === "number"){
        income = name;
        name = "anonymous";
        return `name: ${name}, Monthly Income: ${income}`;

    }else if(typeof name === "string"){

        return `name: ${name}, Monthly Income: ${income}`;

    }else{
        return "Invalid"
    }
}

const returnResult = MonthlyIncome("sabbir");
console.log(returnResult);