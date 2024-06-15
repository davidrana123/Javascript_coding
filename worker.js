// worker.js


//command is       :- 'http-server'
// Listen for messages from the main script
onmessage = function(e) {
    const number = e.data; // The data sent from the main script
    const result = factorial(number); // Calculate the factorial

    // Send the result back to the main script
    postMessage(result);
};

// Function to calculate factorial
function factorial(n) {
    if (n === 0 || n === 1) return 1;
    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i;
    }
    return result;
}
