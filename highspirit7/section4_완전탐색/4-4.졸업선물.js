/**
 * 문제 목표 : 한정된 예산으로 최대한 많은 학생들에게 졸업 선물을 사주기
 * 조건 : 상품 하나만 50%로 할인해서 구매해서 살 수 있다. 배송비는 할인에 포함되지 않는다.
 */
export default function solution(budget, products) {
  let answer = 0;
  let maxPrice = 0;

  for (let i = 0; i < products.length; i++) {
    // 배열을 선물 가격과 배송비를 합쳤을 때 낮은 금액 순으로 정렬
    // 그리고 i번째 학생 선물의 가격을 할인한 배열을 리턴
    // 여기서 sort를 먼저 해주어야 한다. 나중에 i 인덱스를 이중 for문에서 비교 시
    // 사용하는데, 아래 로직에서 map이 먼저 돌고 sort가 나중에 되면 i 인덱스는 
    // 의미가 없어진다.
    let productsWithDiscount = products
      .sort((a, b) => a[0] + a[1] - (b[0] + b[1]))
      .map((product, index) => {
        if (index === i) return [product[0] * 0.5, product[1]];
        return product;
      });

    // 할인 받은 선물과 배송비를 합쳐서 주어진 예산에서 차감.
    let moneyLeft =
      budget - productsWithDiscount[i][0] - productsWithDiscount[i][1];

    //  할인 받은 선물과 배송비를 합쳐서 주어진 예산에서 차감했으니 해당 학생 1명의 카운트를 가지고 시작
    let count = 1;

    for (let j = 0; j < productsWithDiscount.length; j++) {
      if (i === j) continue;
      else {
        const priceOfEachStudent =
          productsWithDiscount[j][0] + productsWithDiscount[j][1];

        moneyLeft -= priceOfEachStudent;

        // 해당 학생의 선물 가격과 배송비를 합친 금액을 현재 남은 예산에서 차감했을 때
        // 0 이상이면 카운트를 하나 씩 올려준다.
        // 0 미만인 경우에는 더 이상 예산 부족으로 구매할 수 없으므로 반복문을 종료.
        if (moneyLeft >= 0) {
          count++;
          if (i === productsWithDiscount.length - 1) {
            console.log(`count : ${count}`);
            console.log(`moneyLeft: ${moneyLeft}`);
          }
        } else break;
      }
    }

    // 반복문을 순회하면서 count의 최대값이 answer에 최종적으로 저장될 수 있도록 한다.
    answer = Math.max(answer, count);

    if (i === productsWithDiscount.length - 1) {
      console.log(productsWithDiscount);
    }
  }

  /**
   * 제일 비싼 상품을 찾아 50%를 할인한 로직에 문제가 있었다.(기존 로직)
   * 예를 들어 해당 상품 하나가 예산을 뛰어넘는 가격이고 나머지 상품들은 예산보다 훨씬
   * 적은 가격이라면 제일 비싼 상품 하나를 50%로 할인해도 나머지 상품들보다 비싼 가격일
   * 확률이 높다. 그런 경우에는 최대한 많은 선물을 사려면 차라리 할인 적용 안 받더라도
   * 나머지 상품들로만 구성하고 그 나머지 상품들 중에서 하나를 할인 받아야 한다.
   */

  /**
   * 그래서 이 섹션의 테마인 완전 탐색이 필요하게 되는 것이다. 무조건 제일 비싼 선물을
   * 할인받게 로직을 짜면 안 되고, 모든 상품에 할인을 적용해보고 어떤 경우에 제일 많은
   * 학생들에게 선물을 사줄 수 있는지 계산해야 한다.
   */

  return answer;
}

// let arr = [
//   [14, 16],
//   [12, 2],
//   [14, 3],
//   [8, 15],
//   [10, 10],
//   [14, 5],
// ];
// console.log(solution(44, arr));
