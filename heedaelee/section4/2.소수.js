/** 문제
N개의 자연수가 입력되면 각 자연수를 뒤집은 후 그 뒤집은 수가 소수이면 그 소수를 출력하 는 프로그램을 작성하세요. 
예를 들어 32를 뒤집으면 23이고, 23은 소수이다. 그러면 23을 출 력한다. 단 910를 뒤집으면 19로 숫자화 해야 한다. 
첫 자리부터의 연속된 0은 무시한다.
▣ 입력설명
첫 줄에 자연수의 개수 N(3<=N<=100)이 주어지고, 그 다음 줄에 N개의 자연수가 주어진다. 각 자연수의 크기는 100,000를 넘지 않는다.
▣ 출력설명
첫 줄에 뒤집은 소수를 출력합니다. 출력순서는 입력된 순서대로 출력합니다.
▣ 입력예제 1
9
32 55 62 20 250 370 200 30 100
▣ 출력예제 1 23 2 73 2 3
*/

//문제 : 숫자 뒤집어서 소수이면 출력해. 근데 뒤집어서 첨에 0이면 숫자 취급하고
//수정: 21/11/07
// 함수 없는 로직에서, 답안 보고 isPrime 함수 만들어 수정

/* param : reversNum
  return : boolean(isPrime?)
 */
function isPrime(p) {
  //1은 소수가 아니다
  if (p === 1) return false;
  //2부터 각 거꾸로 된 숫자 까지 for문 돌리기
  for (let i = 2; i < parseInt(Math.sqrt(p)); i++) {
    if (p % i === 0) return false;
  }
  return true;
}

function solution(param) {
  let answer = [];
  param.forEach((e, i) => {
    //join ("") 쌍따옴표 생략시 쉼표도 같이 포함해서 join..
    //reverse도 배열을 반환. 마지막에 배열이 아닌 문자열이나 넘버를 얻으려면 join을 사용해줘야함
    let reverseNum = Number(String(e).split("").reverse().join(""));

    // console.log(`reverseNum : ${reverseNum}`);

    isPrime(reverseNum) && answer.push(reverseNum);
  });

  return answer;
}
let str = [32, 55, 62, 20, 250, 370, 200, 30, 100];
console.log(solution(str));
