import { ceaserCipher } from "./ceaser-cipher"

describe("Ceaser Cipher", () => {
    it("accepts text input from user", () => {
        const result = ceaserCipher("test user input");
        expect(result).toBe("test user input");
    });
})