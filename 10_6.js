array = [5, 5, 5, 5, 5, 5];
function Same(array) {
  let k = array[0];
  for (let i = 0; i < array.length; i++) {
    while (k !== array[i]) {
      return false;
    }
  }
  return true;
}
console.log(Same(array));
