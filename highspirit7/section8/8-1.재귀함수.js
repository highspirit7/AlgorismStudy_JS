/**
 * @history
 * 15th Feb 2022(ver0) : 3 2 1 이런식으로 내림차순으로 출력되는 구죠
 * 15th Feb 2022(ver1) : 위 구조가 문제가 요구하는 바가 아님을 알게 되고 고민했지만 결국 정답 참고하여 수정.
 * 함수 호출 순서 그리고 스택 프레임에 대한 이해가 중요!!
 */


// 호출 스택
// recursive(0) - return; => recursive(1) - 재시작, 콘솔 출력 후 완료
// => recursive(2) - 재시작, 콘솔 출력 후 완료 
// => recursive(3) - 재시작, 콘솔 출력 후 완료
// => solution(3) 실행 완료
function solution(n) {
	function recursive(number) {
		if (number === 0) return;
		else {
			recursive(number - 1);
			console.log(number);
		}
	}

	recursive(n);
}

solution(3);
