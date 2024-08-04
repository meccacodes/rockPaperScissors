// Rock, Paper, or Scissors
// As a note, this project originally came from Codecademy.

// Rock paper scissors is a classic two player game. Each player chooses either rock, paper, or scissors. The items are compared, and whichever player chooses the more powerful item wins.

// The possible outcomes are:

// Rock destroys scissors.
// Scissors cut paper.
// Paper covers rock.
// If there’s a tie, then the game ends in a draw.

// Our code will break the game into four parts:

// Get the user’s choice.
// Get the computer’s choice.
// Compare the two choices and determine a winner.
// Start the program and display the results.

// Step 1. The user should be able to choose ‘rock’, ‘paper’, or ‘scissors’ when the game starts.
// Create a function named getUserChoice that takes a single parameter userInput.
function getUserChoice(userInput) {
  // Step 2. Since a user can pass in a parameter, such as ‘Rock’ or ‘rock’ with different capitalizations, begin by utilizing JavaScript’s toLowerCase() function to make the userInput all lowercase.
  userInput = userInput.toLowerCase();
  // Inside getUserChoice(), write an if/else statement that makes sure the userInput is either 'rock', 'paper', or 'scissors'. If it does, then return the userInput. If not, use console.log to print an error message to the console.
  if (
    userInput === "rock" ||
    userInput === "paper" ||
    userInput === "scissors" ||
    userInput === "bomb"
  ) {
    return userInput;
  } else {
    // Step 3. When getting the user’s choice, you should also check to make sure that the user typed a valid choice: ‘rock’, ‘paper’, or ‘scissors’.
    console.log("Error!");
  }
}

// Step 4. Test the function by calling it with valid and invalid input, and printing the results to the console.
// You can delete this when you know your function works.
// console.log(getUserChoice("rock"));
// console.log(getUserChoice("Scissors"));
// console.log(getUserChoice("pApEr"));

// Step 5. Now we need to have the computer make a choice.

// Create a new function named getComputerChoice with no parameters. Inside its block, utilize Math.random() and Math.floor() to get a whole number between 0 and 2. Then, depending on the number, return either 'rock', 'paper', or 'scissors'.

function getComputerChoice() {
  let randomNumber = Math.floor(Math.random() * 4);
  switch (randomNumber) {
    case 0:
      return "rock";
    case 1:
      return "paper";
    case 2:
      return "scissors";
    case 3:
      return "bomb";
  }
}

// Step 6.
// Test the function by calling it multiple times and printing the results to the console.
// You can delete this when you know your function works.
// You can delete this when you know your function works.

// Step 7. Now it’s time to determine a winner. Create a function named determineWinner that takes two parameters named userChoice and computerChoice. This function will compare the two choices played and then return if the human player won, lost, or tied.

function determineWinner(userChoice, computerChoice) {
  // Let’s deal with the tie condition first. Within the determineWinner() function, write an if statement that checks if the userChoice parameter equals the computerChoice parameter. If so, return a string that the game was a tie.
  // Start Secret Code
  if (userChoice === "bomb" && computerChoice == "bomb") {
    return "The game is a tie!";
  }
  if (userChoice === "bomb") {
    return "You won!";
  }
  if (computerChoice === "bomb") {
    return "The computer won!";
  }
  // End Secret Code
  if (userChoice === computerChoice) {
    return "The game is a tie!";
  }
  // Step 8. If the game is not a tie, you’ll need to determine a winner. Begin by writing an if statement that checks if the userChoice is 'rock'. Inside the if statement’s block, write another if/else statement. The inner if/else should check if the computerChoice is 'paper'. If so, return a message that the computer won. If not, return a message that the user won.
  if (userChoice === "rock") {
    if (computerChoice === "paper") {
      return "The computer won!";
    } else {
      return "You won!";
    }
  }
  // Step 9. Next, write another if statement for if the userChoice is 'paper'.
  if (userChoice === "paper") {
    // Inside this if statement, the computerChoice must be either 'scissors' or 'rock'. Write logic that will return a winner.
    if (computerChoice === "scissors") {
      return "The computer won!";
    } else {
      return "You won!";
    }
  }
  // Step 10. Next, write yet another if statement for if the userChoice is 'scissors'.
  if (userChoice === "scissors") {
    // Inside of this if statement, the computerChoice must either be 'rock' or 'paper'. Write logic that will return a winner.
    if (computerChoice === "rock") {
      return "The computer won!";
    } else {
      return "You won!";
    }
  }
}

// Step 11. Don’t forget to test your function!
// console.log(determineWinner("rock", "paper")); // prints something like 'The computer won!'
// console.log(determineWinner("paper", "rock")); // User Won!
// console.log(determineWinner("paper", "paper")); // It's a tie!
// Check off this task when you’ve finished testing.

// Step 12. Everything is set up. Now you need to start the game and log the results.

// Create a function named playGame.

function playGame() {
  // Inside the playGame() function, create a variable named userChoice set equal to the result of calling getUserChoice(), passing in either 'rock', 'paper', or 'scissors' as an argument.
  let userChoice = getUserChoice("bomb");
  // Create another variable named computerChoice, and set it equal to the result of calling getComputerChoice().
  let computerChoice = getComputerChoice();
  // Under both of these variables, use console.log to print them to the console.
  console.log("You threw: " + userChoice);
  console.log("The computer threw: " + computerChoice);
  // Step 13. Finally, let’s determine who won.
  // Inside the playGame() function, call the determineWinner() function. Pass in the userChoice and computerChoice variables as its parameters. Make sure to put this function call inside of a console.log() statement so you can see the result.
  console.log(determineWinner(userChoice, computerChoice));
}

// Then, to start the game, call the playGame() function on the last line of your program.
playGame();

// Step 14. Make this game better by adding a secret cheat code. If a user types 'bomb' as their choice, then make sure they win, no matter what.

// ^^^ See added code above ^^^

// Step 15.
// Turn your project in
