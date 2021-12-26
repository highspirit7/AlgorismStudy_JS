function solution(s, t) {
  let answer = 0;

  // 아나그램을 판별하는 기준이 되는 두번째 파라미터 문자열에 대한 Map 객체 생성
  const str1Map = new Map();

  // 두번째 파라미터 문자열을 순회하며 인덱스별로 알파벳을 key로 문자열의 개수를 value로 Map에 저장
  for (let s of t) {
    if (str1Map.has(s)) {
      str1Map.set(s, str1Map.get(s) + 1);
    } else {
      str1Map.set(s, 1);
    }
  }

  for (let i = 0; i <= s.length - t.length; i++) {
    // console.log(s.substring(i, i + 3));
    // 이렇게 두번째 파라미터 문자열 길이만큼 첫번째 문자열을 잘라서 아나그램 판별 로직으로 판별

    // 두번째 파라미터 문자열과 아나그램이 되는지 비교하기 위한 Map 객체 생성
    const str2Map = new Map();

    // 두번째 파라미터 문자열의 길이만큼 첫번째 파라미터 문자열을 순서대로 추출.
    // 길이가 달라지면 애초에 아나그램이 되지 않기 때문에 문자열의 길이만큼 잘라낸다.
    const str2 = s.substring(i, i + t.length);

    let isAnagram = true;

    // 잘라낸 문자열을 인덱스별로 알파벳을 key로 문자열의 개수를 value로 Map에 저장
    for (let s of str2) {
      if (str2Map.has(s)) {
        str2Map.set(s, str2Map.get(s) + 1);
      } else {
        str2Map.set(s, 1);
      }
    }

    // 잘라낸 문자열의 정보를 담은 Map객체를 str1Map과 비교
    for (const [key, value] of str1Map) {
      if (!str2Map.has(key)) {
        isAnagram = false;
        break;
      }
      if (str2Map.get(key) !== value) {
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
