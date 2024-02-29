<div align="center">
  <img height="60" src="https://edurev.gumlet.io/AllImages/original/ApplicationImages/CourseImages/944e5d47-8c55-4a89-91e5-22ab5f2798fc_CI.png">
  <h1>MCQ TEST</h1>
</div>

###### 1. Write the correct answer from the following options and give an explanation (2-5 lines).

let greeting;
greetign = {};
console.log(greetign);

- A: {}
- B: ReferenceError: greetign is not defined
- C: undefined

<details><summary><b>B: ReferenceError: greetign is not defined.</b></summary>
<p>

#### Answer:

<i> Here first declare a variable called greeting but do not assign any value to it. Then, you attempt to assign an empty object to a variable called greetign (note the typo, it should be greeting), which is not declared anywhere. Since greetign is not defined, JavaScript will throw a ReferenceError when you try to access it. </i>

</p>
</details>

###### 2. Write the correct answer from the following options and give an explanation (2-5 lines).

function sum(a, b) {
  return a + b;
}

sum(1, "2");

- A: NaN
- B: TypeError
- C: "12"
- D: 3

<details><summary><b>C: "12".</b></summary>
<p>

#### Answer: ?

<i>Here javaScript will convert the number 1 to a string and then concatenate it with the string "2", resulting in the string "12". Therefore, the function will return the string "12". Because in JavaScript, the + operator is used for both addition and string concatenation. When we use the + operator with a string and a number, JavaScript will treat it as string concatenation. Here sum function call, you're passing 1 (a number) and "2" (a string) as arguments. </i>

</p>
</details>

###### 3. Write the correct answer from the following options and give an explanation (2-5 lines).

const food = ["🍕", "🍫", "🥑", "🍔"];
const info = { favoriteFood: food[0] };

info.favoriteFood = "🍝";

console.log(food);

- A:['🍕', '🍫', '🥑', '🍔']`
- B:['🍝', '🍫', '🥑', '🍔']`
- C['🍝', '🍕', '🍫', '🥑', '🍔']]`
- D: ReferenceError

<details><summary><b>A: ['🍕', '🍫', '🥑', '🍔'].</b></summary>
<p>

#### Answer: ?

<i>Here log the food array to the console, it remains unchanged and will output the array.</i>

</p>
</details>

###### 4. Write the correct answer from the following options and give an explanation (2-5 lines).

function sayHi(name) {
  return `Hi there, ${name}`;
}

console.log(sayHi());

- A: Hi there,
- B: Hi there, undefined
- C: Hi there, null
- D: ReferenceError

<details><summary><b>B: Hi there, undefined.</b></summary>
<p>

#### Answer: ?

<i>In the sayHi function, there is a parameter name, but when you call sayHi() without passing any arguments, the name parameter remains undefined. Therefore, the function returns "Hi there, undefined" because the variable name inside the function is not assigned a value.</i>

</p>
</details>

###### 5. Write the correct answer from the following options and give an explanation (2-5 lines).

let count = 0;
const nums = [0, 1, 2, 3];

nums.forEach((num) => {
  if (num) count += 1;
});

console.log(count);

- A: 1
- B: 2
- C: 3
- D: 4

<details><summary><b>C: 3</b></summary>
<p>

#### Answer: ?

<i>
In this code, you have an array nums with four elements, and you're using the forEach method to iterate over each element in the array. The callback function checks if num is truthy (in JavaScript, numbers other than 0 are considered truthy). Since 1, 2, and 3 are all truthy values, the count variable is incremented for each of them, resulting in a final value of 3.
Here is the scenario of looping:
num = 0 (falsy) -> count remains 0
num = 1 (truthy) -> count becomes 1
num = 2 (truthy) -> count becomes 2
num = 3 (truthy) -> count becomes 3</i>

</p>
</details>