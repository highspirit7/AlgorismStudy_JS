function compareMaps(map1, map2) {
  if (map1.size !== map2.size) {
    return false;
  }
  for (let [key, val] of map1) {
    if (!map2.has(key) || map2.get(key) !== val) return false;
  }

  return true;
}

function solution(s, t) {
  let answer = 0;
  let tH = new Map();
  let sH = new Map();
  for (let x of t) {
    if (tH.has(x)) tH.set(x, tH.get(x) + 1);
    else tH.set(x, 1);
  }
  let len = t.length - 1;
  for (let i = 0; i < len; i++) {
    if (sH.has(s[i])) sH.set(s[i], sH.get(s[i] + 1));
    else sH.set(s[i], 1);
  }
  //2글자까지 hash 처리함
  // console.log(sH);
  let lt = 0;
  for (let rt = len; rt < s.length; rt++) {
    //key value 구조로 sH에 해당 문자가 있으면 +1을 해줘야 함
    if (sH.has(s[rt])) sH.set(s[rt], sH.get(s[rt]) + 1);
    else sH.set(s[rt], 1);
    console.log(sH, tH);
    if (compareMaps(sH, tH)) answer++;
    //비교 끝 처음것(lt) -1 and ===0이면 값이 없는거니 삭제 (=처음부분 오른쪽으로 옮기기 위함임)
    sH.set(s[lt], sH.get(s[lt]) - 1);
    if (sH.get(s[lt]) === 0) sH.delete(s[lt]);
    lt++;
  }

  return answer;
}

let a = "bacaAacba";
let b = "abc";
console.log(solution(a, b));
