const nextJest = require('next/jest')
 
/** @type {import('jest').Config} */
const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: './',
})
 
// Add any custom config to be passed to Jest
const config = {
  coverageProvider: 'v8',
  testEnvironment: 'jsdom',
  // Add more setup options before each test is run
  // setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
}
 
// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
module.exports = createJestConfig(config);

// module.exports = {
//   preset: 'ts-jest',
//   testEnvironment: 'jsdom',
//   moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
//   setupFilesAfterEnv: ['<rootDir>/setupTests.js'],
//   transform: {
//     '^.+\\.(ts|tsx)$': 'ts-jest',
//   },
//   testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.(ts|tsx)$',
// };