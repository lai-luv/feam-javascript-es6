/*Refactor each function below into an arrow function. You must also call the function and make sure it works */

/*Make sure to check that everything works as expected in the console before turning in your work */


/*Exercise 1*/
function addTwo(num1, num2) {
    return num1 + num2
}
//refactor below

Two2 = (num3, num4) => {
    return num3 + num4;
}





/*Exercise 2*/
function templateLiteral(firstName, lastName) {
    return `Hello, ${firstName} ${lastName}! Welcome to the most beautiful site in the world. We hope you learn everything you ever wanted to know and that your life from this day forward will be filled with joy, wonder and adventure. Thank you for stopping by!`
}
//refactor below
templateLiteral2 = (firstName2, lastName2) => {
    return `Hello, ${firstName2} ${lastName2}! Welcome to the most beautiful site in the world. We hope you learn everything you ever wanted to know and that your life from this day forward will be filled with joy, wonder and adventure. Thank you for stopping by!`
}










/*Exercise 3*/
function hasDuplicates(arr) {
    const numMap = {};
    for (const num of arr) {
        if (numMap[num]) {
            return true;
        }
        numMap[num] = true;
    }

    return false;
}

// Example usage
const numbers1 = [1, 2, 3, 4, 5, 6];
const numbers2 = [1, 2, 3, 4, 2, 6];

//refactor below
hasDuplicates2 = (arr2) => {
    const numMap2 = {};
    for (const num5 of arr2) {
        if (numMap2[num5]) {
            return true;
        }
        numMap2[num5] = true
    }
    return false;
}









/*BONUS */
function validateUserCredentials(users, inputUsername, inputPassword) {
    // Use the Array.prototype.some() method to check if any user matches the input username and password
    return users.some(user => user.username === inputUsername && user.password === inputPassword);
}

