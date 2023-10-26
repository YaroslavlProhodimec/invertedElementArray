function invertArray(arr) {
  const invertedArr = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    invertedArr[arr.length - 1 - i] = arr[i];
  }
  return invertedArr;
}


const originalArray = [1, 2, 3, 4, 5];
const invertedArray = invertArray(originalArray);
console.log(invertedArray); // Вывод: [5, 4, 3, 2, 1]
