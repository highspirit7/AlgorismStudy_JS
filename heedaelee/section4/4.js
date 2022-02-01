function solution(n, m, price) {
  price = price.sort((a, b) => a[0] + a[1] - (b[0] + b[1]));
  let answer = 0;

  for (i = 0; i < n; i++) {
    let money = m - (price[i][0] * 0.5 + price[i][1]);
    let cnt = 1;
    for (j = 0; j < n; j++) {
      //구매 불가 조건
      if (i !== j && price[j][0] + price[j][1] > money) break;
      //구매 가능 조건
      if (i !== j && price[j][0] + price[j][1] <= money) {
        money -= price[j][0] + price[j][1];
        cnt++;
      }
    }
    answer = Math.max(answer, cnt);
  }

  return answer;
}

const p = [
  [6, 6],
  [2, 2],
  [4, 3],
  [4, 5],
  [10, 3],
];

console.log(solution(5, 28, p));
