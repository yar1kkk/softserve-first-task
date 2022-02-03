const { task165 } = require("../../src/task165");

describe("task165", () => { // 2 tests
  it("should return avarage", () => {
    const input = [1, 2, 0, 2];
    const result = 1.5;

    expect(task165(input)).toEqual(result);
  });
  it("should return avarage", () => {
    const input = [1, 2, 3, 4, 5, 6, 7, -7, 6, 100];
    const result = 4;

    expect(task165(input)).toEqual(result);
  });
});
