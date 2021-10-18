function solution(param) {
  let strLength = param.length;
  
  let index = 0;

  let answer = "";
  if (strLength % 2 != 0) {
    index = strLength / 2;
    let newIndex = Math.floor(index);
    // console.log(newIndex);
    answer = param[newIndex];
  } else {
    index = strLength / 2 - 1;
    answer = param[index] + param[index + 1];
  }
  return answer;
}
let str = "study";
let str2 = "good";
console.log(solution(str2));
