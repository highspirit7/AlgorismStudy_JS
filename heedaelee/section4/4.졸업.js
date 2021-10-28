/* 문제
선생님은 올해 졸업하는 반 학생들에게 졸업선물을 주려고 합니다.
학생들에게 인터넷 쇼핑몰에서 각자 원하는 상품을 골라 그 상품의 가격과 배송비를 제출하라 고 했습니다. 선생님이 가지고 있는 예산은 한정되어 있습니다.
현재 예산으로 최대 몇 명의 학생에게 선물을 사줄 수 있는지 구하는 프로그램을 작성하세요. 선생님은 상품 하나를 50% 할인해서(반 가격) 살 수 있는 쿠폰을 가지고 있습니다. 배송비는 할인에 포함되지 않습니다. 

최대 몇명에게 사줄 수 있냐? 딱 1개 제품만 50% 할인됨 (배송비 제외)
 */

/*입력
첫 줄 : 학생수, 쌤 머니
두 줄부터 :  가격, 배송비
 */

//출력 : 4

/* 포인트:
1. 할인 해서 가장 높은 가격인 학생 인덱스를 구하는 로직을 세움
2. 가장 높은 가격에 애는 할인 받는 조건, 나머진 일반 가격 조건으르 최종 합을 구함
3. 선생님 보유 금액과 비교
4. 선생님 돈보다 선물 총 가격이 많을 경우, 디스카운트 후 가장 가격이 큰 상품의 인덱스를 활용해 배열내에서 삭제한다.
그리고 위 과정을 다시 반복하도록 for문을 크게 만든다
  (주의할점은 maxPrice나 maxPriceIndex, totalPrice는 for문 반복마다 새로운 환경이므로 초기화를 해줘야 한다. )
    반복시 answer = 전체 학생수 되어 있는데, 위에서 가장 큰 가격의 상품을 삭제해줬으니 한명 줄어든거라 answer랑 num을 -1씩 빼기 처리 해준다.
    선생님 돈이 더 많을 경우 학생수를 return 해주면 된다. 


*/

function solution(num, tMoney, p) {
  for (let j = 0; j < num; j++) {
    let maxPrice = 0;
    let maxPriceIndex = 0;
    let totalPrice = 0;

    //할인 되서 가장 높은 가격 index 알아내는 for문
    for (let i = 0; i < num; i++) {
      let discountedPrice = p[i][0] * 0.5 + p[i][1];
      // console.log("discountedPrice", discountedPrice);
      if (discountedPrice > maxPrice) {
        maxPrice = discountedPrice;
        maxPriceIndex = i;
        // console.log(i);
      }
    }
    // console.log(`fsrH : ${maxPriceIndex}`);

    for (let i = 0; i < num; i++) {
      //가장 비싼 가격 상품의 학생일때, 할인 받는다
      if (i === maxPriceIndex) {
        totalPrice += p[i][0] * 0.5 + p[i][1];
        // console.log(`fsrtotal : ${totalPrice}`)
        //가장 비싼거 아니면, 모두 정상가격 받는다
      } else {
        totalPrice += p[i][0] + p[i][1];
        // console.log(`justtotal : ${totalPrice}`)
      }
    }
    console.log("총 선물 가격 : ", totalPrice);

    if (tMoney < totalPrice) {
      //쌤 가진 돈 보다 더 비쌀때
      p.splice(maxPriceIndex, 1);
      //2차원 배열에서 1차원 배열 중 가장 비싼 가격의 배열 요소를 삭제 해준다. splice() 사용
      // 한 요소를 삭제했으니 총 인원도 1명 줄여야 반복 for문에서 에러가 안나옴.
      num--;
      // p.forEach((element) => {
      //   console.log(element);
      // });
    } else {
      //쌤 가진 돈이 더 많을때
      return num;
    }
  }
}

const stuNum = 5,
  teacherMoney = 28;
const priceAndDelivery = [
  [6, 6],
  [2, 2],
  [4, 3],
  [4, 5],
  [10, 3],
];

console.log(solution(stuNum, teacherMoney, priceAndDelivery));
