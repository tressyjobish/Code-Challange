let listOfNumbers=[2,3,5,7,11];
console.log(listOfNumbers[2]);
//5//
console.log(listOfNumbers[0]);
//2//
console.log(listOfNumbers[2-1]);
//3
// methods

let doh ="Doh";
console.log(typeof doh.toUpperCase);
//function
console.log(doh.toLocaleUpperCase());

let sequence =[1,2,3];
sequence.push(4);
sequence.push(5);
console.log(sequence);
//[1,2,3,4,5]
console.log(sequence.pop());
//5
console.log(sequence);
//[1,2,3,4]

// objects

let day1={
    squirrel:false,
    events:["work","touched tree", "pizza", "running"]
};
console.log(day1.squirrel);
//false
console.log(day1.wolf);
//undefined
day1.wolf=false;
console.log(day1.wolf);
//false

let objectA={ a:1,b:2};
Object.assign(objectA, {b:3,c:4});
console.log(objectA);

let a = 0;
function foo() {
  a = a + 1;
  if (a <= 5) {
    console.log("foo");
    koo();
  }
}
let b = 0;
function koo() {
  b = b + 1;
  if (b <= 5) {
    console.log("koo");
    foo();
  }
}

foo();
