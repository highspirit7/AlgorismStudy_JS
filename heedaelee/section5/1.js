//오름차순으로 정렬이 된 두 배열이 주어지면, 두 배열을 오름차순으로 합쳐 출력하는 프로그램을 작성하세요.
//출력예제 : 1 2 3 3 5 6 7 9

/**풀이 핵심 : 정답 배열을 만드는 조건을 3개로 나눈다.
 * 배열 1에서 요소를 갖고 오는 조건,
 * 배열 1과 2에서..
 * 배열 2에서..
 *
 * 3가지 조건을 만들고,
 * 배열 1,2 인덱스 계산시 원래 가진 요소의 인덱스를 초과할때만 주의깊게
 * 잘처리해주면 정답 배열이 완성된다
 *
 * 실수했던점 : for문 루프 돌면서 i++ 자동으로 되는걸 잊고
 * 조건 말미에 i++를 달아서 중복 카운트가 된 점
 **/

//내 정답
function solution(a1, a1L, a2, a2L) {
  let answer = [];

  let arr1Index = 0;
  let arr2Index = 0;

  let length = a1L + a2L;

  for (let i = 0; i < length; i++) {
    // console.log(`arr1Index : ${arr1Index}, arr2Index : ${arr2Index}, i : ${i}`);

    if (arr2Index > a2L - 1 || a1[arr1Index] < a2[arr2Index]) {
      // console.log("arr1에서 갖고옴");
      answer[i] = a1[arr1Index];
      arr1Index++;
    } else if (a1[arr1Index] === a2[arr2Index]) {
      // console.log("양쪽에서 갖고옴");
      answer[i] = a1[arr1Index];
      arr1Index++;
      i++;
      answer[i] = a2[arr2Index];
      arr2Index++;
    } else {
      // console.log("arr2에서 갖고옴");
      answer[i] = a2[arr2Index];
      arr2Index++;
    }
  }

  return answer;
}


const arr1 = [1, 3, 5];
const arr2 = [2, 3, 6, 7, 9];

console.time();
console.log(solution(arr1, arr1.length, arr2, arr2.length));
console.timeEnd();
