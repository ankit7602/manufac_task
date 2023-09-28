// its a common function for caluclate mean
export function calculateMean(numbers, property) {
  var sum = 0;
  var count = numbers.length;
  for (var i = 0; i < count; i++) {
    sum += parseFloat(numbers[i][property]);
  }
  return (sum / count).toFixed(3);
}

// its a common function for caluclate median
export function calculateMedian(array, property) {
  let numbers = array.map((item) => item[property])
  var sortedNumbers = numbers.slice().sort(function (a, b) {
    return a - b;
  });
  var count = sortedNumbers.length;
  var middle = Math.floor(count / 2);
  if (count % 2 === 0) {
    return ((sortedNumbers[middle - 1] + sortedNumbers[middle]) / 2).toFixed(3);
  } else {
    return (sortedNumbers[middle]).toFixed(3);
  }
}

// common function for calculate mode
export const calculateMode = (array, property) => {
  let arr = array.map((item) => item[property])
  const mode = {};
  let max = 0, count = 0;
  for (let i = 0; i < arr.length; i++) {
    const item = arr[i];
    if (mode[item]) {
      mode[item]++;
    } else {
      mode[item] = 1;
    }
    if (count < mode[item]) {
      max = item;
      count = mode[item];
    }
  }

  return max.toFixed(3);
};
