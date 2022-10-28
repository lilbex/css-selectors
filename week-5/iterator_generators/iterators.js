// iterators help us iterate over data structures
// generators help us create iterators

// generators are functions that can be exited and later re-entered. Their context (variable bindings) will be saved across re-entrances.

function* idMaker() {
  var index = 0;
  while (index < 3)
    yield index++;
}

var gen = idMaker();
console.log(gen.next()); // 0
console.log(gen.next()); // 1