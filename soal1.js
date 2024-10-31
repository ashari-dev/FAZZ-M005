function printTriangle(x) {
  let hasil = "";

  for (let i = 1; i <= x; i++) {
    for (let j = 1; j <= i; j++) {
      hasil += j;
    }
    hasil += "\n";
  }
  return hasil;
}

console.log(printTriangle(5));
