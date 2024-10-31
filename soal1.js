function printTriangle(x) {
  let result = "";

  for (let i = 1; i <= x; i++) {
    for (let j = 1; j <= i; j++) {
      result += j;
    }
    result += "\n";
  }
  return result;
}

console.log(printTriangle(5));
