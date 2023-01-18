// Iteration 1: Names and Input
 const hacker1 = "Ismet";
 console.log(`The driver's name is ${hacker1}`);

 const hacker2 = "Phu";
 console.log(`The navigator's name is ${hacker2}`);

 // Iteration 2: Conditionals
 if (hacker1.length > hacker2.length) {
   console.log(`the driver has the longer name, it has ${hacker1.length} charather.`);
 }
 if (hacker1.length < hacker2.length) {
   console.log(`it seems that the navigator has the longest name, it has   ${hacker2.length} character.`);
 }
 if (hacker1.length === hacker2.length) {
   console.log(`wow you both have equally long names,   ${hacker2.length} character.`);
 }

// Iteration 3: Loops
let newName='';
for ( let i =0; i < hacker1.length; i++){
    newName += hacker1[i].concat(" ").toUpperCase();
    //   newName += ` ${hacker1[i]}`.toUpperCase();
}
console.log(newName);


let inverseName='';
for ( i = hacker2.length-1; i >= 0; i --){
    inverseName = inverseName + hacker2[i];
}

console.log(inverseName);


// const A='abc';
// const B='cde';
// if (A < B) {
//     console.log("true");
// }


if (hacker1 > hacker2) {
    console.log("The driver's name goes first.");
} else if (hacker1 < hacker2) {
    console.log("Yo, the navigator goes first definitely.");
} else {
    console.log("What?! You both have the same name?");
}