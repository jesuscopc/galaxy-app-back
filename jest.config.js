module.exports = {
    "preset": "ts-jest",
    "collectCoverage": true,
    "roots": [
      "<rootDir>/src"
    ],
    "transform": {
      "^.+\\.(ts)$": "ts-jest",
      "^.+\\.(js)$": "babel-jest"
    },
    "transformIgnorePatterns": [
      "[/\\\\]node_modules[/\\\\].+\\.(js|jsx|mjs)$"
    ],
    "moduleFileExtensions": [
      "ts",
      "tsx",
      "js",
      "jsx",
      "json",
      "node"
    ],
    "collectCoverageFrom": [
      "src/**/*.{ts,ts}",
    ],
    "coveragePathIgnorePatterns": [
      "src/index.ts",
    ]
  }