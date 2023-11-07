module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    // Add any necessary module mappings here, such as CSS or asset files
  },
  setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'],
  transformIgnorePatterns: [
    '/node_modules/(?!axios)', // Exclude all node_modules except axios
  ],
}
