console.log("Practical Loops!");

//Fizz Buzz

for (let i = 1; i <= 100; i++) {
  if (i % 3 == 0 && i % 5 === 0) {
    console.log("FIZZ BUZZ");
  } else if (i % 3 === 0) {
    console.log("FIZZ");
  } else if (i % 5 === 0) {
    console.log("BUZZ");
  } else { console.log(i);
}

//2 Prime Time

for (let i = 2; i < 100; i++) {
    let isPrime = true;
    console.log("outer: ", i);
    for (let j = 2; j < i; j++) {
      console.log("inner: ", j);
      if (i % j === 0) {
        // if this is true, it is NOT a prime number
        isPrime = false;
        break;
      }
    }
  
    if (isPrime === true) {
      console.log(i, "is a prime number");
    }
  }
  

  for (let i = 1; i < 200; i++) {
    let isPrime = true;
    let n = 84;
    for (let j = 2; j < i; j++) {
      if (i % j === 0) {
        // if this is true, it is NOT a prime number
        isPrime = false;
        break;
      }
    }
  }
  
    if (isPrime === true && i > n) {
      console.log(i);
      break;
    }