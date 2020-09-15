// const arr = [1, 4, "Apple", 8, "Jocker", 12, 3, 4, 7];

// const f_oddeven = function (arr) {
//   const arr1 = []; // массив для нечетных
//   const arr2 = []; // массив для четных
//   for (let i = 0; i < arr.length; i++) {
//     /* проверка на Number */
//     if (!isNaN(arr[i])) {
//       /* проверка на четность */
//       if (arr[i] % 2 == 0) {
//         arr2.push(arr[i]);
//       } else {
//         arr1.push(arr[i]);
//       }
//     }
//   }
//   return [arr1.length, arr2.length];
// };
// console.log(f_oddeven(arr));
// console.log(arr[0]);

// Задание решено неверно. В данном условии: if (!isNaN(arr[i])) не хватает проверки на typeof, чтобы убедиться, что это значение точно является числом. Сейчас все нечисловые значения, которые не являются NaN (строки, true/false и т.д.) проходят эту проверку и причисляются к нечетным числам.
// Также по заданию нужно было считать и выводить ещё и количество нулей
// Ну и небольшое замечание по стилю кода - чтобы не приходилось подписывать в комментарии, для чего предназначен каждый массив, достаточно дать им правильное имя, например, even и odd. Тогда будет сразу понятно, в каком массиве что лежит :)
// Ниже написала верный вариант решения

const arr = [0, null, NaN, 0, 1, 2, 4, "str"]

let even = 0, 
    odd = 0,
    zero = 0;

  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === 'number' && !isNaN(arr[i])) {
      if (arr[i] === 0) {
        zero += 1;
      } else if (arr[i] % 2 === 0) {
        even += 1;
      } else {
        odd += 1;
      }
    }
  }

console.log('четных элементов: ', even)
console.log('нечетных элементов: ', odd)
console.log('нулей: ', zero)
