function solution(s, t) {
  let answer = 0;

  // 아나그램을 판별하는 기준이 되는 두번째 파라미터 문자열에 대한 Map 객체 생성
  const tMap = new Map();

  // 두번째 파라미터 문자열과 첫번째 파라미터의 부분 문자열이 아나그램이 되는지 비교하기 위한 Map 객체 생성
  const partOfSMap = new Map();

  // 두번째 파라미터 문자열을 순회하며 인덱스별로 알파벳을 key로 문자열의 개수를 value로 Map에 저장
  for (let key of t) {
    if (tMap.has(key)) tMap.set(key, tMap.get(key) + 1);
    else tMap.set(key, 1);
  }

  // t의 길이만큼 첫번째로 잘라낸 문자열을 인덱스별로 알파벳을 key로 문자열의 개수를 value로 Map에 저장
  for (let key of s.substring(0, t.length)) {
    if (partOfSMap.has(key)) {
      partOfSMap.set(key, partOfSMap.get(key) + 1);
    } else {
      partOfSMap.set(key, 1);
    }
  }

  for (let i = 0; i <= s.length - t.length; i++) {
    let isAnagram = true;

    // 지속적으로 partOfSMap객체를 슬라이딩 윈도우 방법으로 업데이트하여 비교될수 있도록 한다.
    if (i > 0) {
      // 제일 앞에 있는 문자에 대한 정보를 partOfSMap에서 지우는 로직.
      if (partOfSMap.get(s[i - 1]) > 1) {
        partOfSMap.set(s[i - 1], partOfSMap.get(s[i - 1]) - 1);
      } else {
        partOfSMap.delete(s[i - 1]);
      }

      // 제일 마지막에 있는 문자 그 다음 문자에 대한 정보를 partOfSMap에 저장하는 로직.
      if (partOfSMap.has(s[i + t.length - 1])) {
        partOfSMap.set(
          s[i + t.length - 1],
          partOfSMap.get(s[i + t.length - 1]) + 1
        );
      } else {
        partOfSMap.set(s[i + t.length - 1], 1);
      }
    }

    // 잘라낸 문자열의 정보를 담은 Map객체를 str1Map과 비교
    for (const [key, value] of tMap) {
      if (!partOfSMap.has(key)) {
        isAnagram = false;
        break;
      }
      if (partOfSMap.get(key) !== value) {
        isAnagram = false;
        break;
      }
    }

    if (isAnagram) answer += 1;
    else isAnagram = true;
  }
  return answer;
}

let a = "bacaAacba";
let b = "abc";
console.log(solution(a, b));
