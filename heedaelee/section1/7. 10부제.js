let carNumberArray = [12, 20, 54, 30, 87, 91, 30];

function solution(carArray) {
  let illegalCarCount = 0;
  for (let element of carArray) {
    let num = element % 10;
    if (num === dayNumber) illegalCarCount++;
  }

  return illegalCarCount;
}

console.log(solution(carNumberArray));
