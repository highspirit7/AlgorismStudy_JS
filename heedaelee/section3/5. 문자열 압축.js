/* 
문제 : 
알파벳 대문자로 이루어진 문자열을 입력받아 같은 문자가 연속으로 반복되는 경우 반복되는 문자 바로 오른쪽에 반복 횟수를 표기하는 방법으로 문자열을 압축하는 프로그램을 작성하시오. 
단 반복횟수가 1인 경우 생략합니다.
▣ 입력설명
첫 줄에 문자열이 주어진다. 문자열의 길이는 100을 넘지 않는다.
▣ 출력설명
첫 줄에 압축된 문자열을 출력한다.
▣ 입력예제 1 KKHSSSSSSSE
▣ 출력예제 1 K2HS7E
*/

/* 
1. 숫자가 반복되는 경우를 알고, 
2. 카운트(cnt)를 표기
*/
function solution(param) {
  let answer = "";
  let cnt = 1;

  for (let i = 0; i < param.length; i++) {
    // 문제풀이가 막힐때는 index와 answer를 for문내에서 항상 출력해본다.
    // console.log(`i : ${i} answer : ${answer} cnt : ${cnt}`);

    //마지막 인덱스 처리 해줘야함 : param[i + 1] 의 값이 없으므로. 
    //return 처리도 여기서
    if (i === param.length - 1) {
      if (cnt === 1) {
        answer += param[i];
      } else {
        answer += param[i] + cnt;
      }
      return answer;
    }

    // [i], [i+1] 문자가 1.같으면 cnt++ 출력x,
    //                 2.다르면 [i - 1], [i] 이전 문자가 같은지 (cnt > 1)       => 같으면 요소만 출력
    //                                               다른지 (cnt === 1 )     => 다르면 요소 + 숫자값 출력

    if (param[i] === param[i + 1]) {
      cnt++;
    } else {
      if (cnt === 1) {
        answer += param[i];
      } else {
        answer += param[i] + cnt;
        cnt = 1;
      }
    }
  }
}
let str = "KKHSSSSSSSE";
console.log(solution(str));
