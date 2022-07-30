function phi (table) {
    return (table[3] * table [0]- table[2]* table[1])
    Math.sqrt((table[2] + table [3]) *
    (table[0] + table [1])*
    (table[1] + table [3]) *
    (table[0] + table [2]));
}
console.log (phi([76,9,4,1]));

function tableFor(event,journal) {
    let table = [0,0,0,0];
    for (let i= 0; i< journal.length; i++){
        let entry = journal[i], index =0;
        if (entry.events.includes (event)) index +=1;
        if (entry.squirrel) index +=2;
        table[index] +=1;
    }
    return table;
}
console.log(tableFor("pizza", JOURNAL));

// string and property

let kim = "kim";
kim.age = 88;
console.log(kim.age);

let sentence = "Secretarybirds specialize in stomping";
let words = sentence.split("");
console.log(words);
//["secretarybirds","specialize","in", "stomping"]

console.log(words.join("."));
//secretarybirds.specislize. in. stomping


// Json
{
    "squirrel":false,
    "events": ["work", "touched tree", "pizza","running"]
}

let string = JSON.stringify({squirrel:false,
events: ["weekend"]});
console.log(JSON.parse(string).events);
// -> ["weekend"]

//{"squ"}