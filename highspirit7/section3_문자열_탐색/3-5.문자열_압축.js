function solution(s) {
	let answer = '';
	let count = 1;

	for (let i = 0; i < s.length; i++) {
		if (s[i - 1] === s[i]) {
			count += 1;

      // 마지막 문자가 그 직전 문자와 같을 때 쌓아왔던 카운트를 넣어주도록 처리
			if (i === s.length - 1) answer += count;
		} else {
			if (count > 1) answer += count;

      // 직전 문자와 달라지면 해당 문자를 삽입하고 count를 1로 초기화
			answer += s[i];
			count = 1;
		}
	}

	return answer;
}

// let str = 'KKKKZZZUUSS';
// console.log(solution(str));

// David 솔루션 바탕으로 더 간결하게 재구성해본 솔루션
// function solution(param) {
//   let answer = "";
//   let cnt = 1;

//   for (let i = 0; i < param.length; i++) {
//     if (param[i] === param[i + 1]) {
//       cnt++;
//     } else {
//       answer += param[i] + (cnt === 1 ? "" : cnt);
//       cnt = 1;
//     }
//   }
//   return answer;
// }
// let str = "KSSSJJJAKJMM";
// console.log(solution(str));
