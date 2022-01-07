function solution(board, moves) {
  // 터트려져 사라진 인형의 개수
  let answer = 0;

  // 인형이 쌓이는 바구니용 변수(스택 자료구조)
  // 같은 숫자가 연속적으로 쌓이면 해당 숫자는 사라져야 한다.
  const basket = [];

  // 반복문을 덜 돌리기 위해 현재 각 라인별 보드의 높이를 저장하는 배열
  // const heightOfEachLineOfBoard = new Array(board.length);

  let dollToBasket = 0;

  for (let i = 0; i < moves.length; i++) {
    for (let j = 0; j < board.length; j++) {
      const move = moves[i] - 1;
      if (board[j][move] > 0) {
        dollToBasket = board[j][move];

        board[j][move] = 0;
        break;
      }
    }

    if (basket[basket.length - 1] === dollToBasket) {
      basket.pop();
      answer += 2;
    } else if (dollToBasket > 0) {
      basket.push(dollToBasket);
    }

    dollToBasket = 0;
  }

  console.log(board);
  console.log(basket);
  return answer;
}

let boardParam = [
  [0, 0, 0, 0, 0],
  [0, 0, 1, 0, 3],
  [0, 2, 5, 0, 1],
  [4, 2, 4, 4, 2],
  [3, 5, 1, 3, 1],
];

// let movesParam = [1, 5, 3, 5, 1, 2, 1, 4];
let movesParam = [1, 5, 3, 5, 1, 2, 1, 4];
console.log(solution(boardParam, movesParam));
