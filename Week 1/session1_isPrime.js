code
// Function Declaration style
function isPrime(numbers) {
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] <= 0) {
      break;
    }
    let isPrime = true;
    for (let j = 2; j < numbers[i]; j++) {
      if (numbers[i] % j === 0) {
        isPrime = false;
        break;
      }
    }
    console.log(numbers[i], "is", isPrime ? "prime" : "not prime");
  }
}

// Function Expression style
const isPrime = function(numbers) {
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] <= 0) {
      break;
    }
    let isPrime = true;
    for (let j = 2; j < numbers[i]; j++) {
      if (numbers[i] % j === 0) {
        isPrime = false;
        break;
      }
    }
    console.log(numbers[i], "is", isPrime ? "prime" : "not prime");
  }
};


const test1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const test2 = [24, 12, 32, 13, 22, 23, 21];
const test3 = [0, 1, 4, 6, 7, 11, 55, 1001, 19];

isPrime(test1);
isPrime(test2);
isPrime(test3);
