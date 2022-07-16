const square = function (x) {
  return x * x;
};
console.log(square(12));

const makeNoise = function () {
  console.log("pling");
};
const power=function(base,exponent){
    let result=1;
    for (let count=0; count < exponent; count++){
        result*=base;
    }
    return result;
};
console.log(power(2,10));
//1024 answer
let x=10;
if (true){
    let y=20;
    var z=30;
    console.log(x+y+z);
    //60
}
//y is not visible
console.log(x+z);
//40
const halve=function(n){
    return n / 2;
};
let n =10;
console.log (halve(100));
//50
console.log(n)
//10
const hummus=function(factor){
    const ingredient =function(amount,unit,name){
        let ingredientAmount = amount*factor;
        if(ingredientAmount>1){
            unit +="s";
        }
        console.log('${ingredientAmount} ${unit} ${name}');
    };
    ingredient(1, "can", "chickpeas");
    ingredient(0.25, "cup", "tahini");
    ingredient(0.25, "cup", "lemon juice");
    ingredient(1, "clove", "garlic");
    ingredient(2, "tablespoon", "olive oil");
    ingredient(0.5, "cup", "tahini");
}
// let launchMissiles = function(){
//     missileSystem.launch("now");
// };
// if (safeMode){
//     launchMissiles=function(){};
// }
// // Declaration Notation
// function square(x){
//     return x*x;
// }
// Arrow function

const power = (base,exponent)=>{
    let result =1;
    for (let count=0; count < exponent;count++){
        result *=base;
    }
    return result;
};