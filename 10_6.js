array = [5, 5, 5, 5, 5, 5];
function HZ(array) {
  var k = array[0];
  for (var i = 0; i < array.length; i++) {
    while (k !== array[i]) {
      return false;
    }
  }
  return true;
}
console.log(HZ(array));
