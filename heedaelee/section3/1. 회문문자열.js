function solution(p) {
  let answer = "";
  let newStr = p.toUpperCase();
  let reverseStr = "";
  //아래 string을 reverse 과정 array.reverse() 함수 사용해도 됨
  // 기초 메서드 사용하는게 더 나을수도. 실무에선 기억하면 좋으니깐.
  for (let e of newStr) {
    reverseStr = e + reverseStr;
  }
  reverseStr === newStr ? (answer = "YES") : (answer = "No");

  return answer;
}
let str = "gooG";
console.log(solution(str));
