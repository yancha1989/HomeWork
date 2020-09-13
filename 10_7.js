const arr = [1, 4, "Apple", 8, "Jocker", 12, 3, 4, 7];

const f_oddeven = function (arr) {
  const arr1 = []; // массив для нечетных
  const arr2 = []; // массив для четных
  for (let i = 0; i < arr.length; i++) {
    /* проверка на Number */
    if (!isNaN(arr[i])) {
      /* проверка на четность */
      if (arr[i] % 2 == 0) {
        arr2.push(arr[i]);
      } else {
        arr1.push(arr[i]);
      }
    }
  }
  return [arr1.length, arr2.length];
};
console.log(f_oddeven(arr));
console.log(arr[0]);
