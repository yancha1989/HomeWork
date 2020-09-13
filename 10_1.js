let setNumber = prompt("введите число");
let value;
if (isNaN(+setNumber) || setNumber === null) {
  alert("что-то пошло не так");
} else if ((value = +setNumber % 2 == 0)) {
  alert("четное");
} else if ((value = +setNumber % 2 != 0)) {
  alert("нечетное");
}
