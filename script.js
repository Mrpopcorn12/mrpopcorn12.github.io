// Array of messages
const messages = [
  "You are amazing!",
  "I love you with all my heart and soul",
  "Keep smiling :)",
  "Your smile shines my world.",
  "You're doing great, everything will be fine",
  "You'll always have a place in my life, even if life make us part ways",
  "You're a superstar!",
  "Believe in yourself, because I do <3",
  "You made a huge difference in my life, I'll always be gratefull for answering that call",
  "You're capable of great things",
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
