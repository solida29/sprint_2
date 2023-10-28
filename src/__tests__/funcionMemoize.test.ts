import memoizeGetSquare from "../functionMemoize"
import { cache } from "../functionMemoize";

test("memoizeGetSquare: resultado de 4 al cuadrado", () => {
    expect(memoizeGetSquare(4)).toBe(16);
});

test("memoizeGetSquare: cache[4] = 16", () => {
    expect(cache[4]).toBe(16);
})

test("memoizeGetSquare: cache[0] = undefined", () => {
    expect(cache[0]).toBe(undefined);
})