const sum = require('../sum')

describe("sum", () =>
{
    it('my first test case ', () => {
        const result = sum(2,3)
        expect(result).toBe(5)
    })
})
