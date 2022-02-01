function solution(m, product){
  let answer=0;
  let n=product.length;
  //1. 모든 제품을 오름차순으로 정렬한다 (총 가격별)
  product.sort((a, b)=>(a[0]+a[1])-(b[0]+b[1]));

  console.log(product); //[ [ 2, 2 ], [ 4, 3 ], [ 4, 5 ], [ 6, 6 ], [ 10, 3 ] ]
  for(let i=0; i<n; i++){
    //2. 제품 i를 할인받고 구입한다 가정하고, 구입후 남는 금액을 구한다.
    let money=m-(product[i][0]/2+product[i][1]);
    console.log(`[제품${i} 할인 구입할 시] 제품 ${i}의 총가격 : ${(product[i][0]/2+product[i][1])},  구입후 남는 금액 : ${money}`);
      let cnt=1;
      for(let j=0; j<n; j++){
        if(j!==i)
        console.log(` [제품${j} 구입 전] 보유금 : ${money}, 구입할 제품j 가격: ${product[j][0]+product[j][1]}, 현재 구매한 제품수 : ${cnt}`);
        //3. 보유 금액과 제품 j 총가격을 비교한다

        //j : 할인 받지 않은 나머지 제품들 인덱스
        //money(보유금액) : 최초보유금액 - 할인 받은 제품 총가격
        //(j!==i) : 제품i는 할인받고 구입했다 가정하므로 제외해야 한다 
          if(j!==i && (product[j][0]+product[j][1])>money) break;
            //3-1[제품구입불가] IF 제품j금액 > 보유금액, then break;
          if(j!==i && (product[j][0]+product[j][1])<=money){
            //3-2[제품구입] IF 제품j금액 <= 보유금액, then 보유금액-제품j금액 and 카운트(구입제품 갯수) 셈;
              money-=(product[j][0]+product[j][1]);
              cnt++;
          }
      }
      //4. answer는 0, cnt는 제품 구매갯수 니까 max()로 비교하면 cnt 값이 answer로 할당됨
      answer=Math.max(answer, cnt);
      console.log(`answer : ${answer}, cnt: ${cnt}`);
      console.log(``);
  }  
  return answer;
}

let arr=[[6, 6], [2, 2], [4, 3], [4, 5], [10, 3]];
console.log(solution(28, arr));
//결론: 요소별로 한 개 제품가격 할인 적용한 후, 시뮬레이션을 다 돌려본다(나머지 제품을 다 계산해본다)