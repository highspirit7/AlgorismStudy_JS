import solution from "../section6_자료구조/6-6.공주구하기";

test("8명의 왕자가 있고, 3을 외친 왕자가 제외", () => {
  expect(solution(8, 3)).toBe(7);
});

test("8명의 왕자가 있고, 5를 외친 왕자가 제외", () => {
  expect(solution(8, 5)).toBe(6);
});
