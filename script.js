const messages = [
  "You are amazing!",
  "I love you with all my heart and soul",
  "Keep smiling :)",
  "Your smile shines my world.",
  "You're doing great, everything will be fine",
  "You'll always have a place in my life, even if life makes us part ways",
  "You're my little potato :3",
  "Believe in yourself, because I do <3",
  "You made a huge difference in my life, I'll always be grateful for answering that call",
  "You're capable of great things",
  "No matter how dark it gets or how bad you feel, remember that out there in the vast universe there are people who love you, and I am one of them",
  "Everything that bothers you is just a speck of dust, don't let it change you",
  "I know you may have heard this a lot, but it does get better, I promise you it does.",
  "Everything that happens eventually passes, so let go of the bad stuff and enjoy the good ones",
  "8,049,939,651 people in the world, but we were blessed to meet. I'll forever be grateful for meeting you",
  "Cheer up :) nothing deserves your sadness",
  "I promised that I'd never say this to another human being again ... but I love you the moon and back ",
  "I hope you have a great day! and remember I'm always one phone call away",
  // Add more messages here
];

const messageText = document.getElementById("message-text");
const generateBtn = document.getElementById("btn-generate");

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function displayMessageWithTyping(message) {
  let textWithCursor = "";
  for (let i = 0; i <= message.length; i++) {
    textWithCursor = message.substring(0, i) + "<span class='cursor'>|</span>";
    messageText.innerHTML = textWithCursor; // Use innerHTML to include the span element
    await sleep(100); // Adjust the value (in milliseconds) to control the typing speed

    if (i === message.length) {
      // Keep the cursor "|" visible after typing is complete
      while (true) {
        await sleep(500); // Blink interval (500ms, adjust as needed)
        const currentCursor = messageText.querySelector(".cursor");
        currentCursor.style.visibility = currentCursor.style.visibility === "visible" ? "hidden" : "visible";
      }
    }
  }
}

async function displayRandomMessage() {
  const randomIndex = Math.floor(Math.random() * messages.length);
  const randomMessage = messages[randomIndex];
  await displayMessageWithTyping(randomMessage);
}

async function copyMessageToClipboard() {
  // ...
}

generateBtn.addEventListener("click", displayRandomMessage);

// Social media buttons
const facebookBtn = document.getElementById("facebook-btn");
const twitterBtn = document.getElementById("twitter-btn");
const instagramBtn = document.getElementById("instagram-btn");



displayRandomMessage();