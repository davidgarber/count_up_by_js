// var countTo = function(x) {
//   for(x = 1; x <= 3; x++)
//   return x;
// }
//
// var countBy = function(y) {
// var numbers = [2,4,6]
//   for(y = countBy; y <= countTo; y++)
//     if(countBy % y === 0);
//       return y;
// }

var countUpby = function(multipleOf, count) {
var x = multipleOf
var y =  count
var result = []
  for(var i=x ; i <= count; i+=x) {
      result.push(i);
  }
  return result;

}
