#! /usr/bin/env node

console.log("Guess A Number Between 1 to 10");

// Creating Variable 

let a:number = Math.floor(Math.random()*10)
import inquirer from "inquirer"
while(true){
    let input= await inquirer.prompt({name:"guess", type:"number",
message: "enter your guess number you want:  "})

let ans:number= input.guess
if (a==ans)
{console.log("congratulation your guess number is correct!")
break;}
else{console.log("Sorry you guess wrong number TRY AGAIN! ")}
}

// END
