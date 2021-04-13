/*
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/en/configuration.html
 */
const { resolve } = require('path')
const root = resolve(__dirname)

module.exports = {

  rootDir: root,

  // Automatically clear mock calls and instances between every test
  clearMocks: true,

  // Indicates which provider should be used to instrument code for coverage
  coverageProvider: 'v8',
  moduleNameMapper: {
    '@src/(.*)': '<rootDir>/src/$1',
    '@tests/(.*)': '<rootDir>/tests/$1'
  },
  // The test environment that will be used for testing
  testEnvironment: 'node',

  testMatch: [
    '<rootDir>/src/**/__tests__/**/*.test.js',
    '<rootDir>/tests/**/*.test.js'
  ]
}
