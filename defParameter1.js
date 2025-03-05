//  amn akta function likhba jekhane tk joba dawa jabe and jodhi tk joma na dei 
// she khatre default parameter hesabe 50 tk kore dakhabe.


function addMoney(money = 0, defMoney = 50){
    money = money + defMoney;
    return money; 
}
const totalMoney = addMoney(50);
console.log(totalMoney)