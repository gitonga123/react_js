function throwIt(exception) {
  try {
    throw exception;
  } catch (e) {
    console.log('Cought: ' +e);
  }
}

console.log(throwIt(3));
console.log(throwIt('Hello World'));

// finally is always executed
function throwsError() {
  throw new Error('Sorry ....');
}

function cleansUp() {
  try {
    throwsError();
  } finally {
    console.log('Perfoming Clean-up');
  }
}

cleansUp();
