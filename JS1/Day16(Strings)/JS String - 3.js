function doesItContain(line, substring) {

  return line.includes(substring);
}
console.log(doesItContain("Hi World world", "world"));
console.log(doesItContain("hi hi hi", "hello"));