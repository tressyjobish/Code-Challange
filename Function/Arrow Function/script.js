const power=(base,exponent)=>{
    let result =1;
    for (let count=0; count<exponent;count++)
{result *=base;}
return result;
};

const horn =()=>{
    console.log("Toot");
};

// The call stack
function greet(who){
    console.log("Hello " + who);
}

greet("Harry");
console.log("Bye");

function chicken(){
    return egg();
}
function egg(){
    return chicken();
}
console.log(chicken ()+ "came first");

// Optional Arguments

function square(x) { return x*x;}
console.log (square(4,true, "hedgehog"));
//16

function minus(a,b){
    if(b=== undefined) return -a;
    else return a-b;
}

console.log(minus(10));
//-10
console.log(minus(10,5));
//5

function power(base,exponent=2){
    let result=1;
    for (let count =0; count<exponent;count++){
        result *=base;
    }
    return result;
}
console.log(power(4));
//16
console.log(power(2,6));
//64