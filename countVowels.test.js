const { countVowels } = require('./countVowels');

describe("countVowels functions", function () {

    test("Passed in valid string with 4 vowels. Should return 4", function () {
        expect(countVowels("adieu")).toBe(4);
    });

    test("Passed in string with no vowels. Should return 0", function () {
        expect(countVowels("bcdf")).toBe(0);
    });

    test("Passed in valid string with 2 vowels. Should return 2", function () {
        expect(countVowels("cretin")).toBe(2);
    });
});