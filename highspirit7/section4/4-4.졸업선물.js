function solution(m, products) {
  let answer = 0;
  let maxPrice = 0;
  let indexOfMaxPrice;

  for (let i = 0; i < products.length; i++) {
    if (products[i][0] > maxPrice) {
      maxPrice = products[i][0];
      indexOfMaxPrice = i;
    }
  }

  // 위 과정으로 제일 비싼 것 하나를 찾아서 50% 할인한 가격으로 다시 할당.
  products[indexOfMaxPrice][0] = maxPrice / 2;

  products.sort((a, b) => {
    return a[0] + a[1] - (b[0] + b[1]);
  });

  const totalPrices = products.map((product, i) => [product[0] + product[1]]);

  for (let j = 0; j < totalPrices.length; j++) {
    m = m - totalPrices[j];
    // console.log(m);
    if (m >= 0) answer++;
    else break;
  }

  return answer;
}

let arr = [
  [6, 6],
  [2, 2],
  [4, 3],
  [4, 5],
  [10, 3],
  [1, 4],
  [4, 5],
];
console.log(solution(42, arr));
