let value = [];
switch (typeof value) {
  case "string":
    console.log("String");
    break;
  case "number":
    console.log("Number");
    break;
  case "boolean":
    console.log("Boolean");
    break;
  default:
    console.log("HZ");
}

// В программе есть ошибка (или возможно опечатка): неправильно распознаются значения boolean. Выше исправила