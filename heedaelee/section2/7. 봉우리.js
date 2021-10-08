/** 
* 내 답 : 조건 분기 넘 많이씀. 21/10/4 추후 다시 풀어보기 

  function solution(l, p) {
  let answer = 0;
  let x = 0;
  // 좌우상하로 비교해서 MAX 값을 알아내야 한다.
  // 2차원 배열 & Index 계산이다.
  //i+1,i, i-1  과 j+1, j, j-1의 비교

  //i: row, j: column
  for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 5; j++) {
      x = p[i][j];
      // console.log(x);
      // j가 0,4, 0과4가 아닌 경우 와
      // i가 0,4, 0과4가 아닌 경우에 대해
      // 크기가 큰지, 작은지에 대한 조건 분기
      if (j === 0 && p[i][j + 1] > x) {
        continue;
      } else if (j !== 0 && j < 4 && (p[i][j - 1] > x || p[i][j + 1] > x)) {
        continue;
      } else if (j === 4 && p[i][j - 1] > x) {
        continue;
      } else if (i === 0 && p[i + 1][j] > x) {
        continue;
      } else if (i !== 0 && i < 4 && (p[i - 1][j] > x || p[i + 1][j] > x)) {
        continue;
      } else if (i === 4 && p[i - 1][j] > x) {
        continue;
      } else {
        answer++;
      }
    }
  }
  return answer;
} */

//모범 답
function solution(arr) {
  let l = arr.length;
  let answer = 0;

  //포인트 1: 실제 값 좌표에서 비교할 값 좌표 x,y를 배열로 만들어 for문을 아래 사용하는 것
  let dy = [-1, 0, 1, 0];
  let dx = [0, 1, 0, -1];

  for (let i = 0; i < l; i++) {
    for (let j = 0; j < l; j++) {
      let flag = 0;

      for (let k = 0; k < 4; k++) {
        let x = j + dx[k];
        let y = i + dy[k];
        //포인트 2: (원래 값 좌표에서 앞의 비교할 값 좌표를 for문으로 뽑아낸뒤)
        //         비교할 값의 index를 더하여 계산, 계산 후 양수만 조건 걸면 배열 error일으키는 음수index 는 제거됨. (이부분을 생각 못했음.)
        if (x >= 0 && y >= 0 && x < l && y < l && arr[y][x] > arr[i][j]) {
          //비교값이 원값보다 큰 경우 스킵
          flag = 1;
          break;
        }
      }
      if (flag) continue;
      else {
        console.log(`추출 index i:${i} j:${j} 추출 값 : ${arr[i][j]}`);
        answer++;
      }
    }
  }

  return answer;
}

let array = [
  [5, 3, 7, 2, 3],
  [3, 7, 1, 6, 1],
  [7, 2, 5, 3, 4],
  [4, 3, 6, 4, 1],
  [8, 7, 3, 5, 2],
];
console.log(solution(array));
