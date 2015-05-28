var countUpBy = function(multipleOf, count) {
var x = multipleOf
var y =  count
var result = []
  for(var i=x ; i <= count; i+=x) {
      result.push(i);
  }
  return result;

}
