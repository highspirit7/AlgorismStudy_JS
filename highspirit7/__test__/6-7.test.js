import firstSolution from "../section6_자료구조/6-7.교육과정설계";
import queueSolution from "../section6_자료구조/6-7.교육과정설계";

// firstSolution 테스트
test("firstSolution - 수업설계 : CBDAGE, 필수과목: CBA", () => {
  expect(firstSolution("CBA", "CBDAGE")).toBe("YES");
});

test("firstSolution - 수업설계 : CBDFGE, 필수과목: CBA", () => {
  expect(firstSolution("CBA", "CBDFGE")).toBe("NO");
});

// queueSolution 테스트
test("queueSolution - 수업설계 : CBDAGE, 필수과목: CBA", () => {
  expect(queueSolution("CBA", "CBDAGE")).toBe("YES");
});

test("queueSolution - 수업설계 : CBDFGE, 필수과목: CBA", () => {
  expect(queueSolution("CBA", "CBDFGE")).toBe("NO");
});
