function solution(a) {
  let answer = 0;
  let arr = [];
  for (let x of a) {
    console.log(x);
    let tmp1 = 0,
      tmp2 = 0;

    if (isNaN(x)) {
      tmp2 = arr.pop();
      tmp1 = arr.pop();
      if (x === "+") arr.push(tmp1 + tmp2);
      if (x === "-") arr.push(tmp1 - tmp2);
      if (x === "*") arr.push(tmp1 * tmp2);
      if (x === "/") arr.push(tmp1 / tmp2);
    } else {
      arr.push(Number(x));
    }
    console.log(arr);
  }
  answer = arr[0];
  return answer;
}

let a = "352+*9-";

console.log(solution(a));
