/**
 * ▣ 입력예제 1
 * board 배열 [[0,0,0,0,0],[0,0,1,0,3],[0,2,5,0,1],[4,2,4,4,2],[3,5,1,3,1]]
 * moves 배열 [1,5,3,5,1,2,1,4]
 * ▣ 출력예제 1
 * 4
 */

function solution(a, m) {
  let picArr = [];
  let answer = 0;
  let row = a.length;
  let col = a[0].length;

  //move 돌리는 for문
  for (let i = 0; i < m.length; i++) {
    let flag = 0;
    
    //2차원 배열
    for (let j = 0; j < row; j++) {
      for (let k = 0; k < col; k++) {
        //move[i] :뽑아야 될 인형 값, 값들이 0이 아닌 1부터 시작이니 배열 기준 -1 해줘야함
        if (a[j][move[i] - 1] > 0) {
          //push 안넣고 시작하면 index 계산할때 undefined 에러 나서 정수 계산이 불가능해져서 넣고 시작.
          picArr.push(a[j][move[i] - 1]);
          console.log(`(picArr[picArr.length-2] :  ${picArr[picArr.length - 2]},  a[j][move[i] - 1] : ${a[j][move[i] - 1]}`);
          //같은 인형일때 pop out & answer ++ 해주는 로직
          while (picArr.length > 1 && picArr[picArr.length - 2] === a[j][move[i] - 1]) {
            console.log("picArr 배열 안에 인형 2개가 같다");
            picArr.pop();
            picArr.pop();
            answer++;
          }

          console.log("test", picArr);
          console.log();
          a[j][move[i] - 1] = 0;
          flag = 1;
          break;
        }
      }
      //flag를 통해 for문을 빠져 나감.
      if (flag > 0) break;
    }
  }
  return answer;
}

let move = [1, 5, 3, 5, 1, 2, 1, 4];
let array = [
  [0, 0, 0, 0, 0],
  [0, 0, 1, 0, 3],
  [0, 2, 5, 0, 1],
  [4, 2, 4, 4, 2],
  [3, 5, 1, 3, 1],
];
console.log(solution(array, move));
