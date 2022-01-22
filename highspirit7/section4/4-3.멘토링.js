function solution(test) {
  const allPairs = [],
    mentoringPairs = [];
  const numOfStudents = test[0].length;

  // 우선, 가능한 모든 짝(멘토, 멘티)들을 리스트업.
  for (let i = 1; i <= numOfStudents; i++) {
    for (let j = 1; j <= numOfStudents; j++) {
      if (i === j) continue;
      else {
        allPairs.push([i, j]);
      }
    }
  }

  // 그리고 테스트 결과 배열을 전부 순회하면서 모든 테스트에서 멘토의 등수가 멘티의 등수보다 높은 짝만 따로 골라서 추출.
  for (let k = 0; k < allPairs.length; k++) {
    const [mentor, mentee] = allPairs[k];
    let rankOfMentor, rankOfMentee;
    let isPossibleForMentoring = true;

    for (let l = 0; l < test.length; l++) {
      rankOfMentor = test[l].indexOf(mentor);
      rankOfMentee = test[l].indexOf(mentee);

      if (rankOfMentor > rankOfMentee) isPossibleForMentoring = false;
    }
    if (isPossibleForMentoring) mentoringPairs.push(allPairs[k]);
  }
  console.log(mentoringPairs);
  return mentoringPairs.length;
}

let arr = [
  [5, 3, 4, 1, 2],
  [4, 3, 2, 5, 1],
  [3, 5, 1, 4, 2],
  [5, 4, 2, 1, 3],
  [4, 5, 1, 2, 3],
];
console.log(solution(arr));
