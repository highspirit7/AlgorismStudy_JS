/**
 * 처음에 이중 for문으로 해결하는 것이 자연스럽게 떠올랐지만 강의에서 투포인터 알고리즘에 
 * 해당하는 문제라 거기에 맞춰 고민하다가 아래와 같이 해결하게 되었다.
 */
function solution(m, arr) {
  // p1은 마이너스할 값에 대한 포인터
  // p2는 플러스할 값에 대한 포인터
  let p1 = 0,
    p2 = 0,
    sum = arr[0],
    count = 0;

  while (p2 < arr.length) {
    if (sum < m) {
      // 현재 합이 m보다 작은 경우 p2가 가리키는 값을 더하고 다음 값을 나중에 더해주기 위해 p2를 하나 증가시킨다.
      sum += arr[++p2];
    } else if (sum > m) {
      // 현재 합이 m보다 많은 경우라면 제일 처음에 합에 더해졌던 값을 제거하고 p1을 하나 증가시킨다.
      // 그래야 계속 더 탐색해서 다음 값을 더해서 (합이 같은) 다른 연속 부분 수열이 있는지 확인할 수 있다.
      sum -= arr[p1++];
    } else {
      count += 1;

      console.log(`p1 : ${p1}`);
      console.log(`p2 : ${p2}`);
      console.log(`sum : ${sum}`);
      console.log(arr.slice(p1, p2 + 1));
      console.log("---------------");

      // 현재 합이 m과 같은 경우 p1이 가리키는 값만 제거하면 당연히 m보다 작아질 것이기에
      // p2도 증가시켜서 그 증가된 p2가 가리키는 값도 sum에 더해지도록 처리한다.
      sum -= arr[p1++];
      sum += arr[++p2];
    }
  }

  return count;
}

let a = [1, 2, 1, 3, 1, 1, 1, 2];
console.log(solution(6, a));
