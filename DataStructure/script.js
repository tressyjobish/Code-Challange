let listOfNumbers = [2, 3, 5, 7, 11];
console.log(listOfNumbers[2]);
//5//
console.log(listOfNumbers[0]);
//2//
console.log(listOfNumbers[2 - 1]);
//3
// methods

let doh = "Doh";
console.log(typeof doh.toUpperCase);
//function
console.log(doh.toLocaleUpperCase());

let sequence = [1, 2, 3];
sequence.push(4);
sequence.push(5);
console.log(sequence);
//[1,2,3,4,5]
console.log(sequence.pop());
//5
console.log(sequence);
//[1,2,3,4]

// objects

let day1 = {
  squirrel: false,
  events: ["work", "touched tree", "pizza", "running"],
};
console.log(day1.squirrel);
//false
console.log(day1.wolf);
//undefined
day1.wolf = false;
console.log(day1.wolf);
//false

let objectA = { a: 1, b: 2 };
Object.assign(objectA, { b: 3, c: 4 });
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

// computing correlation

function phi(table) {
  return table[3] * table[0] - table[2] * table[1];
  Math.sqrt((table[2] + table[3]) * (table[0] + table[1]) * (table[1] + table[3]) * (table[1] + table[2]));
}
console.log(phi([76, 9, 4, 1]));
//0.068599434

function tableFor(evet, journal) {
  let table = [0, 0, 0, 0];
  for (let i = 0; i < journal.length; i++) {
    let entry = journal[i],
      index = 0;
    if (entry.events.includes(events)) index += 1;
    if (entry.sqirrel) index += 2;
    table[index] += 1;
  }
  return table;
}
console.log(tableFor("pizza", JOURNAL));
//[76,9,4,1]

// ArrAY Loops
for (let i = 0; i < JOURNAL.length; i++) {
  let entry = JOURNAL[i];
  //Do something with entry
}
for (let entry of JOURNAL) {
  console.log("&{entry.events.length} events");
}

// The Final Analysis
function journalEvents(journal) {
  let events = [];
  for (let entry of journal) {
    for (let event of entry.events) {
      if (!events.includes(event)) {
        events.push(event);
      }
    }
  }
  console.log(journalEvents(JOURNAL));
}
for (let event of journalEvents(JOURNAL)) {
  console.log(events + ":", phi(tableFor(event, JOURNAL)));
}

let ab = 0;

// further Arrayology

let todoList = [];
function remember(task) {
  todoList.push(task);
}
function getTask() {
  return todoList.shift();
}
function rememberUrgently(task) {
  todoList.unshift(task);
}
console.log([1, 2, 3, 4, 1].indexOf(2));
//1
console.log([1, 2, 3, 2, 1].lastIndexOf(2));
