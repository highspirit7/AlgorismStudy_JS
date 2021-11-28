/**
 * 연속부분수열의 합의 m이하가 되는 경우가 몇 번 있는지 구하는 문제
 */
function solution(m, arr) {
  // p2가 먼저 나가고 p1이 뒤따라나가는 포인터
  let p1 = 0,
    p2 = 0,
    count = 0,
    sum = arr[0];

  while (p1 < arr.length && p2 < arr.length) {
    if (sum <= m) {
      console.log(`sum : ${sum}`);
      console.log(arr.slice(p1, p2 + 1));
      console.log("------------------");
      count++;
      if (p2 === arr.length - 1) {
        // p2가 배열의 끝에 도달한 경우 p2를 더이상 증가시킬 수 없다.
        // 현재 p1이 가리키는 숫자는 카운트 되었을 것이므로 p2, p1가 그 다음 숫자를 가리키도록 하여 다시 반복.
        sum = arr[++p1];
        p2 = p1;
      } else {
        // 합이 m보다 작은 경우에 p2가 배열의 끝에 도달한 상황이 아니라면 p2를 증가시켜 p2가 가리키는 값을 합에 더한다.
        sum += arr[++p2];
      }
    } else {
      // 합이 m보다 커지면 현재 연속부분수열의 두번째 인덱스를 p1, p2가 가리키게 하고
      // 현재 연속부분수열의 두번째인덱스가 가리키는 값을 합으로 세팅시켜 준다.
      // 이러한 방식으로 처음에 합에 첫번째 인덱스의 값을 할당해서 시작했던 것과 같은 방식을 반복.
      sum = arr[++p1];
      p2 = p1;
    }
  }

  return count;
}

const a = [3, 1, 4, 3, 1, 2, 2];
const b = [1, 3, 1, 2, 3];
const c = [2, 2, 2, 2];
console.log(solution(5, b));
