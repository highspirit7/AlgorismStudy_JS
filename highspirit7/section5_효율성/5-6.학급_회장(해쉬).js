function solution(s) {
  let answer;
  const votesMap = new Map();

  for (let i = 0; i < s.length; i++) {
    if (votesMap.get(s[i])) {
      const newValue = votesMap.get(s[i]) + 1;
      votesMap.set(s[i], newValue);
    } else {
      votesMap.set(s[i], 1);
    }
  }

  answer = [...votesMap.entries()].reduce((a, b) => (a[1] > b[1] ? a : b))[0];
  return answer;
}

let str = "BACBACCACCBDEDE";
console.log(solution(str));
