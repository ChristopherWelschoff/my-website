function sum(a, b) {
  return a + b;
}
test("addiert 1 + 2 richtig", () => {
  expect(sum(1, 2)).toBe(3); // expect(Ergebnis).toBe(Erwartung)
});
