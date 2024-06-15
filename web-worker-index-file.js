// index.js

// for running server command :- 'http-server'

// Function to start the worker
function startWorker() {
    // Check if Web Workers are supported
    if (typeof Worker !== "undefined") {
        // Create a new Web Worker instance pointing to worker.js
        const worker = new Worker("worker.js");

        // Send a number to the worker for factorial calculation
        worker.postMessage(20); // Calculate factorial of 20

        // Listen for messages from the worker
        worker.onmessage = function(e) {
            // Display the result received from the worker
            document.getElementById("result").textContent = "Factorial Result: " + e.data;
        };

        // Handle any errors from the worker
        worker.onerror = function(error) {
            console.error("Worker Error: ", error.message);
        };
    } else {
        // If Web Workers are not supported
        document.getElementById("result").textContent = "Web Workers are not supported in this browser.";
    }
}

// Attach the startWorker function to the button's click event
document.getElementById("startWorker").addEventListener("click", startWorker);
