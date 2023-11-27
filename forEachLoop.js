// Refactor the following forLoops to be forEach


//Exercise 1
const numbers = [1, 2, 3, 4, 5];

for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}

numbers.forEach((number) => {
  console.log(number)
});

//Exercise 2
const scores = [65, 75, 80, 90, 85];

for (let i = 0; i < scores.length; i++) {
  scores[i] = scores[i] + 5;
}

console.log(scores);

scores.forEach((score, index, array) => {
  array[index] = score + 5
})

//Exercise 3
const words = ['apple', 'banana', 'orange', 'grape', 'kiwi'];
const filteredWords = [];

for (let i = 0; i < words.length; i++) {
  if (words[i].length > 5) {
    filteredWords.push(words[i]);
  }
}

console.log(filteredWords);


const word = ['apple', 'banana', 'orange', 'grape', 'kiwi'];
const filteredWords2 = []

word.forEach((word) => {
  if(word.length>5){
    filteredWords2.push(word)
  }
})
console.log(filteredWords2)