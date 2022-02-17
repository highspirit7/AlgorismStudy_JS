import solution from "../section6_자료구조/6-4.후위식_연산";

// 문제에서 주어진 입력 예제
let str = "352+*9-";

test("3*(5+2)-9", () => {
  expect(solution(str)).toBe(12);
});

test("8 / (2 + 2) + 6 - 3", () => {
  expect(solution("822+/6+3-")).toBe(5);
});

test("5 + (7 - 2) + 6 * 9 / 3", () => {
  expect(solution("572-+693/*+")).toBe(28);
});


