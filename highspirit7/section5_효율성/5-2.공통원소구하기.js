function solution(arr1, arr2) {
  let answer = [];
  let p1 = 0,
    p2 = 0;

  // 이중 for문으로 할 수 있는 문제이지만 투포인터 알고리즘으로 해결해기 위해
  // 미리 두 배열을 정렬시키고 시작하였다.
  arr1.sort((a, b) => a - b);
  arr2.sort((a, b) => a - b);

  // 공통원소 구하는 문제이기에 주어진 배열 중 하나만 끝에 도달해도 더 반복문을 돌릴 필요가 없기에
  // 아래와 같이 && 연산자로 조건을 설정하였다.
  while (p1 < arr1.length && p2 < arr2.length) {
    console.log(`p1 : ${p1}`);
    console.log(`p2 : ${p2}`);
    if (arr1[p1] > arr2[p2]) {
      p2++;
    } else if (arr1[p1] < arr2[p2]) {
      p1++;
    } else {
      answer.push(arr1[p1++]);
      p2++;
      console.log("pushed");
    }
  }
  return answer;
}

let a = [1, 3, 4, 5, 2, 6, 8];
let b = [3, 2, 5, 7, 8];
console.log(solution(a, b));
