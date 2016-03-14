function binaryGap(n) {
  var bin = (n >>> 0).toString(2).split('');
  var rle = bin.reduce(function(a, x) {
    if (a[0] && a[0].v === x) {
      a[0].c += 1;
    } else {
      a.unshift({ v: x, c: 1 });
    }
    return a;
  }, []).reverse();

  // remove both ends of the array.
  // since the array's only values are alternating 0 & 1, we know that we
  // either remove an invalid 0 (not surrounded by 1) or a 1, which we don't
  // care about. the rest of the values are legitimate.
  { rle.shift(); rle.pop(); }

  return rle.reduce(function(a, x) {
    return (x.v === '0' && x.c > a) ? x.c : a
  }, 0);
}
