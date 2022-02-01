//입력 : 반 학생수, M번의 시험

//포인트 : 항상 이기는 애와 항상 지는 애가 있다면 count
//1부터 전체 학생수까지 bruteForce로

//2차원 배열이니까 값을 읽으려면 기본으로 이중 for문이고
//거기에 두 수를 bruteForce로 비교해야하니까 두 수 비교 또한 for문
//그래서 4중 for 문이 필요.
//전자 학생이 1일 때 후자 학생은 2,3,4가 되고,
//2일때 3,4, 3일때 4로 이중 for문을 만든 다음
//두 수 중 어느수가 index가 전체 n번 시험에서 모두 적은 수였냐? 를 조건 분기 하면 됨 (count 사용)

function solution(studentNum, testCount, record) {
  let answer = 0,
    fsrIndex = 0,
    secIndex = 0,
    fstHigherThanSecCount = 0,
    secHigherThanFstCount = 0;

  //비교할 수 2개를 가지고 중복 for문을 만든다
  for (let fstStud = 1; fstStud < studentNum; fstStud++) {
    for (let secStud = fstStud + 1; secStud <= studentNum; secStud++) {
      //2차원 배열을 위한 for문
      for (let i = 0; i < testCount; i++) {
        for (let j = 0; j < studentNum; j++) {
          if (record[i][j] === fstStud) fsrIndex = j;
          if (record[i][j] === secStud) secIndex = j;
        }
        console.log(
          `첫번째 학생 : ${fstStud}, 두번째 학생 : ${secStud}, 첫번째 학생 Index : ${fsrIndex}, 두번째 학생 Index ${secIndex}`
        );
        if (fsrIndex > secIndex) fstHigherThanSecCount++;
        else secHigherThanFstCount++;
      }
      if (
        fstHigherThanSecCount === testCount ||
        secHigherThanFstCount === testCount
      ) {
        fstHigherThanSecCount &&
          console.log(`멘토 멘티가 만들어지는 경우 (${secStud}, ${fstStud})`);
        secHigherThanFstCount &&
          console.log(`멘토 멘티가 만들어지는 경우 (${fstStud}, ${secStud})`);

        answer++;
      }
      fstHigherThanSecCount = 0;
      secHigherThanFstCount = 0;
    }
  }

  return answer;
}
let studentNum = 4,
  testCount = 3;
let testRecord = [
  [3, 4, 1, 2],
  [4, 3, 2, 1],
  [3, 1, 4, 2],
];
console.log(solution(studentNum, testCount, testRecord));
