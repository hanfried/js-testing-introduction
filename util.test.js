const each = require('jest-each').default;
const { generateText } = require('./util');

describe('Generation of Text', () => {
    each([
        ['Max', 29],
        ['Anna', 28]
    ]).test("should output name=%s and age=%i", (name, age) => {
        const text = generateText(name, age);
        expect(text)
            .toContain(`${age} years old`)
            .toStartWith(name);
    })
});
