
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


// Bonus Time 1!

const longText =`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eu nulla a elit pretium faucibus tincidunt in ante. Proin fermentum, felis quis aliquet ornare, magna orci scelerisque dui, eget venenatis neque elit nec ligula. Pellentesque dapibus accumsan augue, sit amet luctus enim lacinia sed. Ut eget leo venenatis, laoreet augue in, porta lectus. Sed lorem tortor, imperdiet at hendrerit in, ultrices eget ante. Vestibulum quis lobortis dolor. Integer volutpat consequat risus, sit amet dapibus justo iaculis quis.

In finibus, ligula et pulvinar lobortis, ipsum velit laoreet neque, facilisis dictum nisi nulla blandit diam. Quisque gravida quam id consectetur sodales. Cras finibus purus risus, vitae iaculis nibh cursus vitae. Duis quis enim semper, tristique tortor a, luctus felis. Nullam ac diam laoreet, hendrerit nunc eu, tincidunt velit. Donec eget dignissim massa. Fusce ullamcorper efficitur nulla vitae suscipit. Vivamus feugiat rhoncus diam, quis ornare enim feugiat quis. Suspendisse rhoncus quam ac est interdum pulvinar. Duis fringilla sodales libero eu tempus.

Sed ornare, urna non fermentum fermentum, nulla urna varius ipsum, non fermentum turpis tortor eu felis. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Praesent in facilisis est. Donec sed pellentesque justo. Cras massa libero, scelerisque vitae nulla eget, faucibus convallis mi. Cras tellus nunc, rutrum ac diam sed, tristique ultrices quam. Etiam sed erat rhoncus, aliquam lacus id, eleifend leo. Donec posuere, ex rhoncus pharetra rutrum, ligula nunc tempus est, a blandit purus neque ac elit.`;

let numberOfSpace=0;
let numberOfEnd=0;

for ( let i = 0 ; i < longText.length ; i++){
   // console.log(i);
    if (longText[i] === ` `){
        //console.log(`space found`);
        numberOfSpace += 1;
    }
}

console.log(`number of space ${numberOfSpace}`);

for ( let i = 0 ; i < longText.length ; i++){
        // console.log(i);
         if (longText[i] === `\n`){
             //console.log(`space found`);
             numberOfEnd += 1;
         }
     }
    
     console.log(`numbers of back slash ${numberOfEnd}`);




let numberOfEt=0;


for ( let i = 0 ; i < longText.length ; i++){
    //console.log(i);
    if (longText[i] === " " && longText[i+1] === "e" && longText[i+2] === "t" && longText[i+3] === " "){
        //console.log(`space found`);
        numberOfEt += 1;
    }
}

console.log(`numbers of 'et' ${numberOfEt}`);
