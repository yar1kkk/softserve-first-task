const { task88 } = require("../../src/task88");

describe("task88", () => { // 6 tests
  it("should return true", () => {
    const input = 18;
    expect(task88(input)).toBe(true);
  });

  it("should return true", () => {
    const input = 19;
    expect(task88(input)).toBe(true);
  });

  it("should return true", () => {
    const input = 40;
    expect(task88(input)).toBe(false);
  });

  it("should return true", () => {
    const input = "qwdsnqjls";
    expect(task88(input)).toBe(false);
  });

  it("should return true", () => {
    const input = "#$8";
    expect(task88(input)).toBe(false);
  });

  it("should return true", () => {
    const input = "";
    expect(task88(input)).toBe(false);
  });
});
