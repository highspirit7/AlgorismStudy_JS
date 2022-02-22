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
  // let col = a[0].length;

  //move 돌리는 for문
  for (let i = 0; i < m.length; i++) {
    //2차원 배열
    for (let j = 0; j < row; j++) {
      //2차원 배열 가로 인덱스가 주어졌으니 for문 2번 돌릴 필요가 없잖아! =>for문 주석처리
      // for (let k = 0; k < col; k++) {

      //move[i] :뽑아야 될 인형 값, 값들이 0이 아닌 1부터 시작이니 배열 기준 -1 해줘야함
      if (a[j][move[i] - 1] > 0) {
        //let tmp 이 템프 함수를 적절하게 잘 써야함. tmp를 씀으로써 #27행에 a 배열에 해당요소에 0으로 초기화가 가능해짐
        // console.log("test : ", a[j][move[i] - 1]);
        let tmp = a[j][move[i] - 1];
        a[j][move[i] - 1] = 0;

        // console.log(`(picArr[picArr.length-1] :  ${picArr[picArr.length - 1]},  tmp : ${tmp}`);
        // console.log("뽑은 인형:tmp 와 picArr[length-1] 의 값이");
        //같은 인형일때 pop out & answer ++ 해주는 로직
        if (tmp === picArr[picArr.length - 1]) {
          // console.log("같다");
          picArr.pop();
          answer += 2;
        } else {
          // console.log("다르다 : 다를때 push 해줌");
          picArr.push(tmp);
        }

        //console.log("test", picArr);
        //console.log();
        break;//break가 이 if절 안에 들어가야 move의 row for문이 해당 조건을 찾은 후 1번 이상 더 돌지 않게 됨.
      }
      // }
      //flag를 통해 for문을 빠져 나감. ->2차원 배열 세로x가로 중 가로 인덱스가 주어졌으니 이중 for문이 필요 없어짐. 따라서 flag 도 필요 x
      
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
