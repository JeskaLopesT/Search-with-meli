/**
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */

import type { Config } from 'jest';

const config: Config = {
  //clearMocks: true,
  modulePathIgnorePatterns: [
    '<rootDir>/dist/',
    '<rootDir>/src/__tests__/jest-setup.ts',
  ],
  collectCoverage: true,
  preset: 'ts-jest',
  collectCoverageFrom: [
    '!<rootDir>/node_modules',
    '!<rootDir>/src/components/*.spec.tsx',
    '!<rootDir>/src/components/**/types.ts',
    '<rootDir>/src/components/**',
    // '<rootDir>/src/utils/**',
    // '<rootDir>/src/hooks/**',
  ],
  coverageDirectory: 'coverage',
  testEnvironment: 'jest-environment-jsdom',
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  coverageReporters: ['json', 'lcov', 'text', 'text-summary'],
  coveragePathIgnorePatterns: ['.*/src/.*\\.d\\.ts'],
  testResultsProcessor: '',
  setupFiles: [],
  setupFilesAfterEnv: ['<rootDir>/src/__tests__/jest-setup.ts'],
  moduleNameMapper: {
    '\\.(gif|ttf|eot|svg|png)$': '<rootDir>/src/__tests__/mocks/fileMock.ts',
    '\\.(css|less|sass|scss)$': 'identity-obj-proxy',
  },
};

export default config;