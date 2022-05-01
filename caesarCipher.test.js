const caesarCipher = require("./caesarCipher");

test("caesarCipher shifted", () => {
    expect(caesarCipher("hello", 3)).toBe("khoor");
});