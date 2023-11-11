function addTwoNumbers(x: number, y: number): number {
  return x + y;
}

describe('Number Operations', () => {
  it('Adds two numbers', () => {
    expect(addTwoNumbers(3, 3)).toBe(6);
  });
});
