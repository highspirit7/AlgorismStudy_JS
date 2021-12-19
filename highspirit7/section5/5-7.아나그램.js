function solution(str1, str2) {
  let answer = "YES";
  const str1Map = new Map();
  const str2Map = new Map();

  for (let s of str1) {
    if (str1Map.has(s)) {
      str1Map.set(s, str1Map.get(s) + 1);
    } else {
      str1Map.set(s, 1);
    }
  }

  for (let s of str2) {
    if (str2Map.has(s)) {
      str2Map.set(s, str2Map.get(s) + 1);
    } else {
      str2Map.set(s, 1);
    }
  }

  if (str1Map.size !== str2Map.size) answer = "NO";

  for (const [key, value] of str1Map) {
    if (!str1Map.has(key)) {
      answer = "NO";
      break;
    }
    if (str2Map.get(key) !== value) {
      answer = "NO";
      break;
    }
  }

  return answer;
}

let a = "AbaAeCe";
let b = "baeeACA";
console.log(solution(a, b));
