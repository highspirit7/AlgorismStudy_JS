function solution(students) {
  let HowManyPencil_OfoneDas = 12;
  let answer;
  answer = Math.ceil(students / HowManyPencil_OfoneDas);

  return answer;
}

console.log(solution(178));
