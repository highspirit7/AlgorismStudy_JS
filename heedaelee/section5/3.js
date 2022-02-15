function solution(a, sA) {
  let start = 0,
    end = 0,
    answer = 0,
    sum = 0;

  //어디까지 도는지 알수 있을땐 fo문, 없을땐 while
  while (start < a.length) {
    while (sum < sA && end < a.length) {
      sum += a[end++];
    }
    if (sum === sA) {
      answer++;
    }
    sum -= a[start++];
  }

  return answer;
}

let array = [1, 2, 1, 3, 1, 1, 1, 2];
let sumA = 6;
console.log(solution(array, sumA));
