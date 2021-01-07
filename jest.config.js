module.exports = {
  roots: ['<rootDir>/test','<rootDir>/lib'],
  testMatch: ['**/*.test.ts'],
  transform: {
    '^.+\\.tsx?$': 'ts-jest'
  },
  preset: 'ts-jest'
};
