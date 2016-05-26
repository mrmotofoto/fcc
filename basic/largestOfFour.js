function largestOfFour(arr) {
  var resultArray = [],
      highestValue = 0;
  for (var i = 0; i < arr.length; i++) {
    highestValue = arr[i].reduce(function(a, b){
      return a >= b ? a : b;
    });
    resultArray.push(highestValue);
  }
  return resultArray;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);