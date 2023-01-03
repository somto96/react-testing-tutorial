import { sum } from "./sum";

// 'it' is used to describe the test. 'test' can also be used as well
it('summing 5 and 2 will return 7', () => {
    expect(sum(5,2)).toBe(7);
});