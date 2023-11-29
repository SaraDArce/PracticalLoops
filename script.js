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

    // Feeling Loopy

const csvData1 = "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26";
const csvData2 = "Index,Mass (kg),Spring 1 (m),Spring 2 (m)\n1,0.00,0.050,0.050\n2,0.49,0.066,0.066\n3,0.98,0.087,0.080\n4,1.47,0.116,0.108\n5,1.96,0.142,0.138\n6,2.45,0.166,0.158\n7,2.94,0.193,0.174\n8,3.43,0.204,0.192\n9,3.92,0.226,0.205\n10,4.41,0.238,0.232";

function parseCSV(csvData) {
  const rows = csvData.split('\n');

  for (let i = 0; i < rows.length; i++) {
    const cells = rows[i].split(',');
    const [cell1, cell2, cell3, cell4] = cells;
    console.log(cell1, cell2, cell3, cell4);
  }
}

console.log("Parsing CSV data 1:");
parseCSV(csvData1);

console.log("\nParsing CSV data 2:");
parseCSV(csvData2);