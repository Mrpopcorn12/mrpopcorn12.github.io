// Array of messages
const messages = [
  "You are amazing!",
  "Today is going to be a great day!",
  "Keep smiling!",
  "You're doing great!",
  "You are loved.",
  "You're a superstar!",
  "Believe in yourself!",
  "You make a difference!",
  "You're getting better every day!",
  "You're capable of anything!",
  // Add more messages here
];

const messageText = document.getElementById("message-text");
const generateBtn = document.getElementById("btn-generate");

// Function to display a random message
function displayRandomMessage() {
  const randomIndex = Math.floor(Math.random() * messages.length);
  const randomMessage = messages[randomIndex];
  messageText.textContent = randomMessage;
}

// Event listener for the "Generate Message" button
generateBtn.addEventListener("click", displayRandomMessage);

// Display a random message initially
displayRandomMessage();
