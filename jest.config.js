module.export = {
    roots: ['<rootDir>/src'],
    transform: {
      '\\.(js|jsx)?$': 'babel-jest',
      '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/src/assetsTransformer.js',
    },
    testMatch: ['<rootDir>/src/**/>(*.)test.{js, jsx}'], // finds test
    moduleFileExtensions: ['js', 'jsx', 'json', 'node'],
    testPathIgnorePatterns: ['/node_modules/', '/public/'],
    setupFilesAfterEnv: [
      '@testing-library/jest-dom/extend-expect', 
      '@testing-library/react/cleanup-after-each'
    ] // setupFiles before the tests are ran
  };