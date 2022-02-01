function solution(n, k, c) {
  let tmp = new Set();
  let answer = [];

  for (i = 0; i < n; i++) {
    for (j = i + 1; j < n; j++) {
      for (l = j + 1; l < n; l++) {
        answer = Array.from(tmp.add(c[i] + c[j] + c[l])).sort((a, b) => b - a);
      }
    }
  }

  console.log(answer[k-1]);
  return;
}

let card = [13, 15, 34, 23, 45, 65, 33, 11, 26, 42];
solution(10, 3, card);
