/**
 * 모든 아나그램 찾기(해쉬, 투포인터, 슬라이딩 윈도우)
S문자열에서 T문자열과 아나그램이 되는 S의 부분문자열의 개수를 구하는 프로그램을 작성하 세요. 아나그램 판별시 대소문자가 구분됩니다. 부분문자열은 연속된 문자열이어야 합니다.
▣ 입력설명
첫 줄에 첫 번째 S문자열이 입력되고, 두 번째 줄에 T문자열이 입력됩니다.
S문자열의 길이는 10,000을 넘지 않으며, T문자열은 S문자열보다 길이가 작거나 같습니다.
▣ 출력설명
S단어에 T문자열과 아나그램이 되는 부분문자열의 개수를 출력합니다.
▣ 입력예제  
  bacaAacba 
  abc
▣ 출력예제  
  3
출력설명: {bac}, {acb}, {cba} 3개의 부분문자열이 "abc"문자열과 아나그램입니다.
 * 
 */

function solution(long, short) {
  let answer = 0,
    str = "";

  for (let i = 0; i < long.length - short.length + 1; i++) {
    str = long.substring(i, short.length + i);
    let cnt = 0;

    //해쉬 값 만들어주는 과정
    let hash_l = makeHash(str);

    //긴단어 해쉬값에 짧은 주어진단어 요소가 있으면 -1, 없거나 ===0이면 continue;
    for (let x of short) {
      if (!hash_l.has(x) || hash_l.get(x) === 0) {
        continue;
      } else {
        hash_l.set(x, hash_l.get(x) - 1);
        cnt++;
      }
    }

    //짧은단어의 길이랑 count가 일치하면 정답 answer++해줌.
    if (cnt === short.length) {
      console.log("일치: ", hash_l, "cnt :", cnt);
      answer++;
    } else {
      console.log("불일치  : ", hash_l, "cnt :", cnt);
    }
  }

  function makeHash(str) {
    let hash = new Map();

    for (let x of str) {
      if (hash.has(x)) hash.set(x, hash.get(x) + 1);
      else hash.set(x, 1);
    }

    return hash;
  }

  return answer;
}

let a = "bacaAacba";
let b = "abc";

console.log(solution(a, b));
