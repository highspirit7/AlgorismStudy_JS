function solution(str1, str2) {
  let answer = "YES";
  let hS = new Map();

  for (let x of str1) {
    if (hS.has(x)) hS.set(x, hS.get(x) + 1);
    else hS.set(x, 1);
  }

  for (let x of str2) {
    if (!hS.has(x) || hS.get(x) === 0) return "NO";
    hS.set(x, hS.get(x) - 1);
  }

  return answer;
}

let a = "AbaAeCe";
let b = "baeeACA";

// let a = "abaCC";
// let b = "Caaab";

console.log(solution(a, b));
