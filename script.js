// Write a method complements(array, number)
// which returns true if any two numbers in
// the array sum to the number.

function complements(array, number){
  for (var i = 0; i < array.length - 1; i++) {

    for (var j = i + 1; j < array.length; j++) {
      var sum = array[i] + array[j];
      if (sum === number) {
         return true;
      }
    }
  }
  return false;
}

var odds = [1, 3, 5, 7, 9, 11];
var ints = [-11, 40, 17, -5, -1, -11, 2, 9];

console.assert( complements(odds, 4) === true, 'First one is wrong' )
console.assert( complements(odds, 1) === false, 'Second one is wrong' )
console.assert( complements(ints, -22) === true, 'third one is wrong' )
console.assert( complements(ints, 16) === true, 'fourth one is wrong' )
console.assert( complements(ints, 40) === false, 'fifth one is wrong' )
