const calculator = require("./calculator")


test("Calculate two variables", () => {
    expect(calculator.add(2, 3)).toBe(5);
});

test("Calculate two variables", () => {
    expect(calculator.subtract(100, 50)).toBe(50);
});

test("Calculate two variables", () => {
    expect(calculator.multiply(9, 9)).toBe(81);
});

test("Calculate two variables", () => {
    expect(calculator.divide(200, 100)).toBe(2);
});
