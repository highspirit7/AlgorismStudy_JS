import solution from "../section4_완전탐색/4-4.졸업선물";

const testArray1 = [
  [6, 6],
  [2, 2],
  [4, 3],
  [4, 5],
  [10, 3],
];

const testArray2 = [
  [6, 6],
  [2, 2],
  [4, 3],
  [4, 5],
  [1, 4],
  [4, 5],
];

const testArray3 = [
  [14, 16],
  [12, 2],
  [14, 3],
  [8, 15],
  [10, 10],
  [14, 5],
];

test("선생님 예산이 28이고, 학생은 5명, testArray1", () => {
  expect(solution(28, testArray1)).toBe(4);
});

test("선생님 예산이 28이고, 학생은 6명, testArray2", () => {
  expect(solution(28, testArray2)).toBe(4);
});

test("선생님 예산이 44이고, 학생은 6명, testArray3", () => {
  expect(solution(44, testArray3)).toBe(3);
});
