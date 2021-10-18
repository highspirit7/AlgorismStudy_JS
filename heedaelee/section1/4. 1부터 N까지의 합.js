function solution(number) {
  let answer = 0;
  for (let i = 1; i <= number; i++) {
    answer += i;
  }

  return answer;
}

console.log(solution(10));
