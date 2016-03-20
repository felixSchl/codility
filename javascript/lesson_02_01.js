function solution(A, K) {
  var arr = Array(A.length);
  A.forEach(function(x, i) {
    arr[(i + K) % A.length] = x;
  });
  return arr;
}
