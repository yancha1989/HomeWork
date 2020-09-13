array = [5, 5, 5, 5, 5, 5];
function HZ(array) {
  let k = array[0];
  for (let i = 0; i < array.length; i++) {
    while (k !== array[i]) {
      return false;
    }
  }
  return true;
}
console.log(HZ(array));
