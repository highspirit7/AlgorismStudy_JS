function solution(input) {
  if (input <= 0) return;

  let num = input - 1;
  solution(num);
  console.log(input);
}

const input = 3;
solution(input);
