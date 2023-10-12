/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest', // Transpile TypeScript files using ts-jest
    '^.+\\.js$': 'babel-jest', // Transpile JS files using babel-jest
  },
  testRegex: ['./dist/.*\\.(test|spec)?\\.[jt]sx?$'],
};
