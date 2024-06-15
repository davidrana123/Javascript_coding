function sayHello() {
    console.log('Hello, world!');
  }
  
  // Execute the sayHello function every 2 seconds
  const intervalId = setInterval(sayHello, 2000);

  setTimeout(() => {
    clearInterval(intervalId)
    console.log('Execution stopped.');
  },5000)