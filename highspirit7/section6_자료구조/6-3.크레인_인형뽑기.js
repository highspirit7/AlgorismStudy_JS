/**
 * 크레인 인형 뽑기(카카오 기출)
 * @history
 * Jan 2022(ver0)
 * 23th Feb 2022(ver1) : 비워진 라인에 또 반복문이 도는 일을 방지하기 위한 코드 추가
 */

function solution(board, moves) {
	// 터트려져 사라진 인형의 개수
	let answer = 0;

	// 인형이 쌓이는 바구니용 변수(스택 자료구조)
	// 같은 숫자가 연속적으로 쌓이면 해당 숫자는 사라져야 한다.
	const basket = [];

	// 반복문을 덜 돌리기 위해 라인 별로 비워진 상태인지 채워진 상태인지를 저장하는 배열
	const statusOfEachLineOfBoard = Array(board.length).fill('filled');

	let dollToBasket = 0;

	for (let i = 0; i < moves.length; i++) {
		const move = moves[i] - 1;

		if (statusOfEachLineOfBoard[move] === 'filled') {
			for (let j = 0; j < board.length; j++) {
				if (board[j][move] > 0) {
					dollToBasket = board[j][move];

					board[j][move] = 0;

					if (j === board.length - 1) statusOfEachLineOfBoard[move] = 'empty';

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
	}

	console.log(board);
	console.log(basket);
	console.log(statusOfEachLineOfBoard);
	return answer;
}

let boardParam = [
	[0, 0, 0, 0, 0],
	[0, 0, 1, 0, 3],
	[0, 2, 5, 0, 1],
	[4, 2, 4, 4, 2],
	[3, 5, 1, 3, 1],
];

let movesParam = [1, 5, 3, 5, 1, 2, 1, 4];
console.log(solution(boardParam, movesParam));
