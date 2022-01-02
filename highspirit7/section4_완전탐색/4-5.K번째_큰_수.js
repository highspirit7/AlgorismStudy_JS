function solution(n, k, cards) {
  const sumsOfThreeCards = [];

  // 모든 경우의 카드 3장의 합을 기록.
  for (let i = 0; i < cards.length - 2; i++) {
    for (let j = i + 1; j < cards.length - 1; j++) {
      for (let k = j + 1; k < cards.length; k++) {
        // console.log(i, j, k);
        sumsOfThreeCards.push(cards[i] + cards[j] + cards[k]);
      }
    }
  }
  sumsOfThreeCards.sort((a, b) => b - a);

  // 합이 같은 경우를 없애주기 위함.
  const set = new Set(sumsOfThreeCards);

  return Array.from(set)[k - 1];
}

let arr = [13, 15, 34, 23, 45, 65, 33, 11, 26, 42];
console.log(solution(10, 3, arr));
