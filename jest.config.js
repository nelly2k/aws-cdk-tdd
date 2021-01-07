module.exports = {
  roots: ['<rootDir>/lib'],
  testMatch: ['**/*.test.ts'],
  transform: {
    '^.+\\.ts?$': 'ts-jest'
  },
  verbose: true
};
