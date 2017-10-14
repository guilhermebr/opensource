module.exports = {
  setupFiles: [
    '<rootDir>/jest.setup.js'
  ],
  moduleNameMapper: {
    '\\.(scss)$': '<rootDir>/__mocks__/fileMock.js'
  }
}
