/* 
뽑을 수 있는 모든 3개로 만든 수의 각각 합을 구한다. (같은 수 여러개 있을 수 있음)
그중 k번째 큰 수 출력.
3수를 선택하는데, 제일 큰수, 그다음 큰수, 그다음 큰수 픽 1, 그리고 다음은 ... 마지막에 그다음 큰수 옆의수를
픽 1 .. 다음은 옆의옆의 수를 픽1.. 하는 구조니 

즉 세 수를 픽할때 마지막 픽한수가 1회전 돌면, 이제 두번째 픽한수가 한칸 옆으로 가고 또 1회전 돌고..
그럼 2번째 픽하는 수도 1회전 돌면서 윗 과정을 반복하고..
또 2번째 가 1회전 돌면 첫번째 픽한 수도 변경되면서 1회전 도니까
결국 세가지수가 각각의 for문으로 인덱스를 픽해줘야한다. 각각 다들 연달아 1회전씩 돌아야 하니까.
그래서 삼중 for문 만들고 그 합한 값은 1차원 배열에 넣어준 다음!
정해진 k번째 인덱스를 출력해주면 답이 나온다.


출력 : 143 (3번째 큰수가 143)
*/

function solution(numOfCard, numOfPick, card) {
  let answer = 0;
  let answerArray = [];

  //정렬 부터 해야
  card.sort((a, b) => b - a);

  for (let i = 0; i < numOfCard; i++) {
    for (let j = i + 1; j < numOfCard; j++) {
      for (let k = j + 1; k < numOfCard; k++) {
        answerArray.push(card[i] + card[j] + card[k]);
      }
    }
  }
  // console.log(answerArray);

  answer = answerArray[numOfPick];
  return answer;
}
let numOfCard = 10,
  numOfPick = 2;
let card = [13, 15, 34, 23, 45, 65, 33, 11, 26, 42];
console.log(solution(numOfCard, numOfPick, card));
