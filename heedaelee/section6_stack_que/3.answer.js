function solution(board, moves) {
  let answer = 0;
  let stack = [];
  moves.forEach((pos) => {
    //세로,가로 for문을 2번 쓸 필요가 X, 왜냐면 moves에 인덱스를 주어줬으니 그것만 search하면 됨. column for문을 돌릴 필요 없이.
    for (let i = 0; i < board.length; i++) {
      if (board[i][pos - 1] > 0) {
        let tmp = board[i][pos - 1];
        console.log(`pos : ${pos}, tmp : ${tmp}`);
        board[i][pos - 1] = 0;
        if (tmp === stack[stack.length - 1]) {
          stack.pop();
          answer += 2;
        } else {
          stack.push(tmp);
        }
        //이걸 빼트림
        break;
      }
    }
    console.log(stack)
  });
  return answer;
}

let a = [
  [0, 0, 0, 0, 0],
  [0, 0, 1, 0, 3],
  [0, 2, 5, 0, 1],
  [4, 2, 4, 4, 2],
  [3, 5, 1, 3, 1],
];

let b = [1, 5, 3, 5, 1, 2, 1, 4];
console.log(solution(a, b));
