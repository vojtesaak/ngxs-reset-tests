
module.exports = {
    preset: 'jest-preset-angular',
    collectCoverageFrom: [],
    coveragePathIgnorePatterns: [],
    coverageReporters: [ 'text', 'text-summary'],
    testPathIgnorePatterns: [
        '<rootDir>../../node_modules/',
        '<rootDir>../../dist/'
    ],
    globals: {
        'ts-jest': {
            'tsconfig': '<rootDir>/tsconfig.spec.json',
            'stringifyContentPathRegex': '\\.html$',
			astTransformers: [
				'jest-preset-angular/build/InlineFilesTransformer',
				'jest-preset-angular/build/StripStylesTransformer'
			],
        },
        ENV: 'testing',
    },
    setupFilesAfterEnv: [
        '<rootDir>/setup-jest.ts'
    ],
    verbose: true,
    moduleNameMapper: {

    },
    moduleFileExtensions: [
        'js',
        'ts',
        'toml'
    ],
    transform: {
        '^.+\\.(ts|js|html)$': 'ts-jest'
    },
    testURL: 'http://localhost',
    testEnvironment: 'jsdom'
};
