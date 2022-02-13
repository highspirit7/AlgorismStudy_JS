import solution from "../section6_자료구조/6-2.괄호문자제거";

const str = "(A(BC)D)EF(G(H)(IJ)K)LM(N)";

test("소괄호 사이에 존재하는 모든 문자를 제거하고 남은 문자(EFLM)만 출력", () => {
  expect(solution(str)).toBe("EFLM");
});

test("소괄호가 출력되어서는 안 된다", () => {
  expect(solution(str)).not.toMatch(/[()]/);
});
