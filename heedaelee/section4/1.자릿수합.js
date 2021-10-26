/* 
문제 : 개의 자연수가 입력되면 각 자연수의 자릿수의 합을 구하고, 그 합이 최대인 자연수를 출력 하는 프로그램을 작성하세요. 
자릿수의 합이 같은 경우 원래 숫자가 큰 숫자를 답으로 합니다. 만약 235 와 1234가 동시에 답이 될 수 있다면 1234를 답으로 출력해야 합니다.

▣ 입력예제 : 7
           128 460 603 40 521 137 123
▣ 출력예제 : 137
*/

//의사코드 적을때 잘게 쪼개서 적기. 그래야 나중에 이해하기도 좋고 생각하기도 좋고.
/* 
1. for문 돌리기
2. for문 내에 string 을  number로 치환, 
3. 각 자릿수 temp변수에 합하기
4. 합한 값 중 Max 구하기
5. max 출력. 다만, 마지막 요소의 자릿수 합과 기존의 max가 같다면 
요소를 number화 해서 answer값 (=기존 max) 과 비교.  Number 한게 크면 answer에 넣고, 아니면 걍 기존 answer 리턴
*/

function solution(param) {
  let answer = 0;
  //number [] 을 => string [] 으로 바꾸는 방식. map(String) 활용 
  let strParam = param.map(String);
  // console.log(strParam);

  let max = 0;
  strParam.forEach((e, i) => {
    let tempSum = 0;
    for (let i = 0; i < e.length; i++) {
      tempSum += Number(e[i]);
    }
    if (tempSum > max) {
      // console.log(e);
      max = tempSum;
      answer = Number(e);
    }
    if (tempSum === max) {
      if (Number(e) > answer) answer = Number(e);
    }
  });

  return answer;
}

let str = [128, 460, 603, 40, 521, 137, 123];
console.log(solution(str));
