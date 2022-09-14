import type { Config } from 'jest'

const config: Config = {
    verbose: true,
    moduleNameMapper: {
        '@entities/(.*)$': '<rootDir>/src/entities/$1',
        '@contexts/(.*)$': '<rootDir>/src/contexts/$1',
        '@util/(.*)$': '<rootDir>/src/util/$1',
        '@/(.*)$': '<rootDir>/src/$1',
    },
    transform: {
        '^.+\\.(ts|tsx)$': 'ts-jest',
    },
}

export default config
