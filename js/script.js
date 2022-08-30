// 1st task

let calculator = function (startNum, endNum) {
  let calcedNums = [];

  for (i = startNum; i <= endNum; i += startNum) {
    calcedNums.push(i);
  };

  if (startNum > endNum) {
    alert("First Number must be less than Second Number!");
  };

  return calcedNums;
}

console.log(calculator(20, 60));

// 2nd task

let counter = function (firstValue, finalValue) {
  let resultNumbers = [];

  for (i = firstValue; i <= finalValue; i++) {
    resultNumbers.push(i)
  };

  if (firstValue > finalValue) {
    alert("First Value must be less than Second Value!");
  };

  return resultNumbers;
}

console.log(counter(3, 7));

// 3rd task

let centuryCounter = function (year) {
  let century = 100;

  let centuryCount = Math.ceil(year / century);

  return centuryCount;
}

console.log(centuryCounter(1441));

// 4th task

let maxMultiple = function (divisorVal, boundVal) {
  
  if (divisorVal > boundVal) {
    alert("Divisor Value must be less than Bound Value!");
  }

  return boundVal - (boundVal % divisorVal);
};

console.log(maxMultiple(14, 148));