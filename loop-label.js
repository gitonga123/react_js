// Javascript Loop statements
// Mechanisms to be used with Loops
// Break - Exit from a loop
// Continue  - stop the current loop iterations, and immediately continue with the next one
// Label an identifier, which allows you to continue or break
// from a loop nested inside of it.
function findEvenNumber(arr) {
  loop: {
    for (let i = 0; i < arr.length; i++) {
      let elem = arr[i];
      if ((elem % 2) === 0) {
        console.log('Found: ' + elem);
        break loop;
      }
    }
    console.log('No even number found');
  }
  console.log('Done');
}

findEvenNumber([0, 2, 4, 12, 6, 8]);
findEvenNumber([3, 7, 9, 11, 15]);
findEvenNumber([1, 3, 4, 5, 6, 7, 8]);
