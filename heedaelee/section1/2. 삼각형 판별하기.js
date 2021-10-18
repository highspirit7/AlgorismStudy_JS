function solution(A, B, C) {
  let max;
  if (A > B) {
    max = A;
  } else {
    max = B;
  }
  if (max < C) max = C;

  switch (max) {
    case A:
      if (B + C > A) {
        return "YES";
      } else {
        return "No";
      }
    case B:
      if (A + C > B) {
        return "YES";
      } else {
        return "No";
      }
    case C:
      if (A + B > C) {
        return "YES";
      } else {
        return "No";
      }
  }
}

console.log(solution(6, 7, 11));
