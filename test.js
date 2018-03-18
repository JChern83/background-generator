function crazySum(numbers) {
  sum = 0;
  for (var i = 0; i < numbers.length; i++) {
    sum += numbers[i] * i;
  }
  return sum;
}

  console.log(crazySum([2]) === 0);
  console.log(crazySum([2, 3]) === 3);
  console.log(crazySum([2, 3, 5]) === 13);
  console.log(crazySum([2, 3, 5, 2]) === 19);

