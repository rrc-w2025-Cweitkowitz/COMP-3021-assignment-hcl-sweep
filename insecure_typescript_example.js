// Example of insecure JavaScript that leads to DOM-based XSS
// The application directly uses the location.search value without sanitization

let params = new URLSearchParams(window.location.search);
let name = params.get('name');

if (name) {
    // INSECURE: Directly writing user input to the DOM
    document.getElementById('greeting-message').innerHTML = "Hello, " + name + "!";
}

// UNSAFE: Using string interpolation for SQL queries
import { db } from './db';

async function getUser(userId: string) {
  return await db.query(`SELECT * FROM users WHERE id = ${userId}`);
}

// UNSAFE: Hardcoding secrets
const API_KEY = "12345-secret-key-do-not-use";

// UNSAFE: Directly rendering user input
function UserProfile({ userInput }: { userInput: string }) {
  return <div dangerouslySetInnerHTML={{ __html: userInput }} />;
}
