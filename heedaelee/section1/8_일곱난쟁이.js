function solution(arr) {
  let answer = arr;
  //sum 구하는 방식
  let sum = answer.reduce((acc, b) => {
    // console.log(` acc : ${acc}, b : ${b}`); //reduce 함수 확인
    return acc + b;
  });
  // console.log(`sum : ${sum}`); //140

  for (let i = 0; i < answer.length - 1; i++) {
    for (let j = i + 1; j < answer.length; j++) {
      console.log(`when i === ${i}, then j === ${j}`);

      if (sum - (answer[i] + answer[j]) === 100) {
        // console.log(`answer[i] : ${answer[i]}, answer[j] : ${answer[j]}`);
        answer.splice(i, 1);
        answer.splice(j - 1, 1);

        // console.log(`answer : ${answer}, and i : ${i} j: ${j}`);
      }
    }
  }
  // console.log(`test : ${answer.reduce((acc, b) => acc + b)}`);
  return answer;
}

let arr = [15, 20, 7, 23, 19, 10, 8, 13, 25];
console.log(solution(arr));
