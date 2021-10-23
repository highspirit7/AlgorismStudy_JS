/* 
한 개의 문자열 s와 문자 t가 주어지면 문자열 s의 각 문자가 문자 t와 떨어진 최소거리를 출 력하는 프로그램을 작성하세요.
▣ 입력설명
첫 번째 줄에 문자열 s와 문자 t가 주어진다. 문자열과 문자는 소문자로만 주어집니다. 문자열의 길이는 100을 넘지 않는다.
▣ 출력설명
첫 번째 줄에 각 문자열 s의 각 문자가 문자 t와 떨어진 거리를 순서대로 출력한다.
▣ 입력예제  teachermode e
*/

function solution(t, s) {
  let answer = [];
  let indexOfe = [];

  //** 해결법 */
  //주어진 문자 e의 index 위치 값을 구해 배열에 넣고, 문자열 중 각 인덱스에서 e문자의 인덱스와 가장가까운 값을 찾아
  //e의 인덱스 - 해당 문자 인덱스 차를 배열에 넣어주면 된다 
  //포인트는 각 문자별로 가장 가까운 e인덱스를 찾고 그 차이를 구하는건데, 가장 가까이 있는 e 인덱스는 즉 해당문자 index - e의 index = 값 에서 값이 최소값을 찾으면 된다
  //빼기라 각 문자 인덱스는 0,1,2,3,4... 식으로 올라가니 그냥 계산하면 음수도 생길거니 Math.abs() 절대값 함수를 사용해 다 양수로 치환해준다. 
  //그리고 min 변수를 만들어 e 인덱스 배열 모음에서 각 빼기를 해주어 최소값이 가장 작은 값을 배열에 각 문자 인덱스 별로 넣어주면 답이 나온다. 

  //**split 주의**
  //string.split() 이면 배열 [] 1개에 문자열 통채로 넣고, string.split('')이면 문자열을 분해서 넣는다. 문자열은 split()으로 배열처리를 해줘야 foreach나 filter 사용 가능하다.
  s.split("").filter((e, i) => {
    // console.log(`e : ${e} i : ${i}`);
    if (e === t) {
      console.log(`i : ${i}`);
      indexOfe.push(i);
    }
  });
  // console.log(indexOfT);

  for (let i = 0; i < s.length; i++) {
    let min = 99; //(100-1)
    let diffValue = 0;
    for (let j = 0; j < indexOfe.length; j++) {
      diffValue = Math.abs(indexOfe[j] - i);
      if (diffValue < min) min = diffValue;
    }
    answer.push(min);
  }

  return answer;
}
let str = "teachermode";
let char = "e";
console.log(solution(char, str));
