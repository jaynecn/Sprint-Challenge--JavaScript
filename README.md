# Sprint Challenge: JavaScript Fundamentals

This challenge allows you to practice the concepts and techniques learned over the past week and apply them in a survey of problems. This Sprint explored JavaScript Fundamentals. During this Sprint, you studied variables, functions, object literals, arrays, this keyword, prototypes, and class syntax. In your challenge this week, you will demonstrate proficiency by completing a survey of JavaScript problems. 

## Instructions

**Read these instructions carefully. Understand exactly what is expected _before_ starting this Sprint Challenge.**

This is an individual assessment. All work must be your own. Your challenge score is a measure of your ability to work independently using the material covered through this sprint. You need to demonstrate proficiency in the concepts and objectives introduced and practiced in preceding days.

You are not allowed to collaborate during the Sprint Challenge. However, you are encouraged to follow the twenty-minute rule and seek support from your PM and Instructor in your cohort help channel on Slack. Your work reflects your proficiency in JavaScript fundamentals.

You have three hours to complete this challenge. Plan your time accordingly.

## Commits

Commit your code regularly and meaningfully. This helps both you (in case you ever need to return to old code for any number of reasons) and your project manager.

## Description

You will notice there are several JavaScript files being brought into the index.html file.  Each of those files contain JavaScript problems you need to solve.  If you get stuck on something, skip over it and come back to it later.

In meeting the minimum viable product (MVP) specifications listed below, you should have a console full of correct responses to the problems given.

## Self-Study Questions

Demonstrate your understanding of this week's concepts by answering the following free-form questions.

Edit this document to include your answers after each question. Make sure to leave a blank line above and below your answer so it is clear and easy to read by your project manager

1. Describe the biggest difference between `.forEach` & `.map`.
.forEach cannot be chained with other array methods.

2. What is the difference between a function and a method?

A method is a term referring to a particular type of function.  A method is a function that is within an object.  A method is expressed as a value within a key:value pair of an object.  We use the term function when a function is on its own and/or not part of an object.

3. What is closure?
Closure is the term which refers to a particular phenomenon which happens regarding the global scope and block scope of functions.  The code inside block scope has the ability to refer and use variables and functions in the outside/global scope.  But the variables/functions/code within global scope doesNOT have the ability to refer and use the code within the block scope.  
I think of it a bit like CCTV, where the block scope is in the HQ with all the monitors watching what’s happening, and the global scope is outside the HQ but being watched through the cameras (!)


4. Describe the four rules of the 'this' keyword.

GLOBAL BINDING - a function is on its own ie. not in an object, not a method. It is then part of the global scope.
IMPLICIT BINDING - using the ${} syntax, you can refer to a specific key within the object. Implicit binding can be used with any method. For example, ${this.name}. Using 'this' means it is anonymised the dynamic.  The function can then be used multiple times.  This can save a lot of time coding. You can use this in a function to synchronise a piece of data with others eg. this.name = data.name

NEW BINDING- Used in combination with implicit binding, you can use the ‘new’ keyword to create a brand new constructor function which uses the function created with implicit binding.  
Eg.  const louise = new Person('Louise', 22);
louise.welcome();

EXPLICIT BINDING - The term ‘.call’ is preceded by the name of a parent function. Then in parentheses, the ‘this’ keyword is used to link with the child function that it sits in.  This link then gives them access to the properties of the parent.


5. Why do we need super() in an extended class?
Super is used in the same way that we use .call for explicit binding.  It links the parent class with the child class and makes sure it inherits all of the properties of the parent.

## Project Set up

Follow these steps to set up and work on your project:

- [ ] Create a forked copy of this project.
- [ ] Add PM as collaborator on Github.
- [ ] Clone your OWN version of Repo (Not Lambda's by mistake!).
- [ ] Create a new Branch on the clone: git checkout -b `<firstName-lastName>`.
- [ ] Create a pull request before you start working on the project requirements.  You will continuously push your updates throughout the project.
- [ ] You are now ready to build this project with your preferred IDE
- [ ] Implement the project on your Branch, committing changes regularly.
- [ ] Push commits: git push origin `<firstName-lastName>`.

Follow these steps for completing your project:

- [ ] Submit a Pull-Request to merge <firstName-lastName> Branch into master (student's  Repo).
- [ ] Add your Project Manager as a Reviewer on the Pull-request
- [ ] PM then will count the HW as done by  merging the branch back into master.


## Minimum Viable Product

Your finished project must include all of the following requirements:

**Pro tip for this challenge: If something seems like it isn't working locally, copy and paste your code up to codepen and take another look at the console.**

## Task 1: Objects and Arrays
Test your knowledge of objects and arrays. 
* [ ] Use the [objects-arrays.js](challenges/objects-arrays.js) link to get started.  Read the instructions carefully!

## Task 2: Functions
This challenge takes a look at callbacks and closures as well as scope. 
* [ ] Use the [functions.js](challenges/functions.js) link to get started. Read the instructions carefully!

## Task 3: Prototypes
Create constructors, bind methods, and create cuboids in this prototypes challenge.
* [ ] Use the [prototypes.js](challenges/prototypes.js) link to get started. Read the instructions carefully!

## Task 4: Classes
Once you have completed the prototypes challenge, it's time to convert all your hard work into classes.
* [ ] Use the [classes.js](challenges/classes.js) link to get started. Read the instructions carefully!

In your solutions, it is essential that you follow best practices and produce clean and professional results. Schedule time to review, refine, and assess your work and perform basic professional polishing including spell-checking and grammar-checking on your work. It is better to submit a challenge that meets MVP than one that attempts too much and does not.

## Stretch Problems

There are a few stretch problems found throughout the files, don't work on them until you are finished with MVP requirements!
