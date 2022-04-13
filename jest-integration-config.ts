export default {
    roots: ['<rootDir>/src'],
    collectCoverage: true,
    collectCoverageFrom: ['<rootDir>/src/**/*.ts'],
    coverageDirectory: "coverage",
    coverageProvider: "v8",
    testEnvironment: 'node',
    testMatch: ['**/*.test.ts'],
    transform: {
      '.+\\.ts$': 'ts-jest'
    },
  };  