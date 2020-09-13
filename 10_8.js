var arr = new Map([
  ["key1", "value1"],
  ["key2", "value2"],
  ["key3", "value3"],
]);
for (let pair of arr.entries()) {
  console.log(`Ключ = ${pair[0]}, значение = ${pair[1]}`);
}
