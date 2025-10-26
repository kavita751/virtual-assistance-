// Speech Synthesis for Greeting
function greetUser() {
    const now = new Date();
    const hours = now.getHours();
    const greeting = hours < 12 ? "Good Morning!" : hours < 18 ? "Good Afternoon!" : "Good Evening!";
    document.getElementById("greeting").innerText = greeting;

    const speech = new SpeechSynthesisUtterance(greeting + " I am Alex, your assistant.");
    window.speechSynthesis.speak(speech);
}

// To-Do List Logic
document.getElementById("addTodoBtn").addEventListener("click", () => {
    const task = document.getElementById("todoInput").value.trim();
    if (task) {
        const listItem = document.createElement("li");
        listItem.textContent = task;
        document.getElementById("todoList").appendChild(listItem);
        document.getElementById("todoInput").value = "";
    }
});

// Voice Command Handling
const speakBtn = document.getElementById("speakBtn");
const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();

recognition.onresult = (event) => {
    const command = event.results[0][0].transcript.toLowerCase();
    const speech = new SpeechSynthesisUtterance();

    if (command.includes("open facebook")) {
        speech.text = "Opening Facebook.";
        window.open("https://www.facebook.com", "_blank");
    } else if (command.includes("open instagram")) {
        speech.text = "Opening Instagram.";
        window.open("https://www.instagram.com", "_blank");
    } else if (command.includes("open youtube")) {
        speech.text = "Opening YouTube.";
        window.open("https://www.youtube.com", "_blank");
    } else if (command.includes("open calculator")) {
        fetch("backend.php?action=calculator");
        speech.text = "Opening calculator.";
    } else if (command.includes("open calendar")) {
        fetch("backend.php?action=calendar");
        speech.text = "Opening calendar.";
    } else {
        speech.text = "Sorry, I didn't understand that.";
    }
    window.speechSynthesis.speak(speech);
};

speakBtn.addEventListener("click", () => recognition.start());

// Initialize Greeting
greetUser();
