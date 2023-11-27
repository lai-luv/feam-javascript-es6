/*Refactor each function below into an arrow function. You must also call the function and make sure it works */

/*Make sure to check that everything works as expected in the console before turning in your work */
let weather = "rain" 
/*Exercise 1*/
if(weather === "rain") {
    console.log("Please wear rain boots")
}

//refactor below
let weather2 = "rain "

console.log(weather2 ? "please wear rain boots ":"sneakers")



/*Exercise 2*/
if(student == true && loggedIn == true) {
    console.log("This is where we would write the code to show the entire site")
}
//refactor below
let student1 = true
let loggedIn1= false
console.log(student1 && loggedIn1 ? " this is where we write code to show the entire site ":"error")



/*Exercise 3*/
let cash = 18;
let lunch = "";

if (cash < 10) {
  lunch = "sandwich";
}else if (cash <= 20 && cash > 11) {
  lunch = "fancy sandwich";
}else if (cash > 20) {
  lunch = "lobster rolls";
} 

//refactor below


console.log(cash<10?`${lunch} is a sandwitch`:(cash<= 20&&cash>11`${lunch}fancy sandwitch`git (cash>20)`${lunch}lobster `))


