let i = 0;
let name = "Oleg";
while(i < 2){
document.write("Happy Birthday to you.<br>");
i = i + 1;
}
document.write("Happy Birthday dear " + name + ", <br>");
document.write("Happy Birthday to you.<br>");

let word = "bottles";
let count = 99;
 while (count) {
     console.log(count + " " + word + " of beer on the wall");
     console.log(count + " " + word + " of beer,");
     console.log( "Take one down, pass it around,");
     count = count -1;
     if (count > 0){
        console.log(count + " " + word + " of beer on the wall");  
     } else {
        console.log("No more" + " " + word + " of beer on the wall");

     }
 } 
 let location1 = 3;
 let location2 = 4;
 let location3 = 5;
 let guess;
 let hits = 0;
 let trying = 0;
 let sunk = false ;
guess = prompt("Chuse 0-6");

while (sunk == false) { 
    guess = prompt("Enter a number from 0-6");
    if (guess<0 || guess>6) {
        alert("Wrong! Enter a number from 0-6");
        
    } else {
        trying = trying + 1;
    
 if (location1 == guess || location2 == guess || location3 == guess) {
     hits = hits + 1;
     alert('yes')
     if (hits == 3) {
         sunk = true;
         alert("you wine");
     }
 } else {
     alert('you miss');
 }
}
}
