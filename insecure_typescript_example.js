// Example of insecure JavaScript that leads to DOM-based XSS
// The application directly uses the location.search value without sanitization

let params = new URLSearchParams(window.location.search);
let name = params.get('name');

if (name) {
    // INSECURE: Directly writing user input to the DOM
    document.getElementById('greeting-message').innerHTML = "Hello, " + name + "!";
}
