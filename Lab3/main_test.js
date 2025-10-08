const { describe, it } = require('node:test');
const assert = require('assert');
const { Calculator } = require('./main');

// TODO: write your tests here
describe('Parameterized test non_error exp part 1', () => {
    const calculator = new Calculator();
    const test_non_error_Cases = [
        { param : 1, expected : Math.exp(1)},
        { param : 2, expected : Math.exp(2)},
        { param : 3, expected : Math.exp(3)},
    ];

    for (const tc of test_non_error_Cases) {
        it(`exp(${tc.param}) should equal ${tc.expected}`, () => {
            assert.strictEqual(calculator.exp(tc.param), tc.expected);
        });
    }
})

describe('Parameterized test non_error exp part 2', () => {
    const calculator = new Calculator();
    const test_non_error_Cases = [
        { param : 10, expected : Math.exp(10)},
        { param : 20, expected : Math.exp(20)},
        { param : 30, expected : Math.exp(30)},
    ];

    for (const tc of test_non_error_Cases) {
        it(`exp(${tc.param}) should equal ${tc.expected}`, () => {
            assert.strictEqual(calculator.exp(tc.param), tc.expected);
        });
    }
})

describe('Parameterized test non_error exp part 3', () => {
    const calculator = new Calculator();
    const test_non_error_Cases = [
        { param : 100, expected : Math.exp(100)},
        { param : 200, expected : Math.exp(200)},
        { param : 300, expected : Math.exp(300)},
    ];

    for (const tc of test_non_error_Cases) {
        it(`exp(${tc.param}) should equal ${tc.expected}`, () => {
            assert.strictEqual(calculator.exp(tc.param), tc.expected);
        });
    }
})

describe('Parameterized test error exp', () => {
    const calculator = new Calculator();

    const test_error_cases = [
        { param : Infinity, expected : 'unsupported operand type'},
        { param : 710, expected : 'overflow'}
    ];

    for (const tc of test_error_cases) {
        it(`exp(${tc.param}) should throw error : ${tc.expected}`, () => {
            assert.throws( () => {
                calculator.exp(tc.param);
            }, {
                name : 'Error',
                message : tc.expected
            });
        });
    }
})

describe('Parameterized test non_error log part 1', () => {
    const calculator = new Calculator();
    const test_non_error_Cases = [
        { param : 1, expected : Math.log(1)},
        { param : 2, expected : Math.log(2)},
        { param : 3, expected : Math.log(3)},
    ];

    for (const tc of test_non_error_Cases) {
        it(`exp(${tc.param}) should equal ${tc.expected}`, () => {
            assert.strictEqual(calculator.log(tc.param), tc.expected);
        });
    }
})

describe('Parameterized test non_error log part 2', () => {
    const calculator = new Calculator();
    const test_non_error_Cases = [
        { param : 10, expected : Math.log(10)},
        { param : 20, expected : Math.log(20)},
        { param : 30, expected : Math.log(30)},
    ];

    for (const tc of test_non_error_Cases) {
        it(`exp(${tc.param}) should equal ${tc.expected}`, () => {
            assert.strictEqual(calculator.log(tc.param), tc.expected);
        });
    }
})

describe('Parameterized test non_error log part 3', () => {
    const calculator = new Calculator();
    const test_non_error_Cases = [
        { param : 100, expected : Math.log(100)},
        { param : 200, expected : Math.log(200)},
        { param : 300, expected : Math.log(300)},
    ];

    for (const tc of test_non_error_Cases) {
        it(`exp(${tc.param}) should equal ${tc.expected}`, () => {
            assert.strictEqual(calculator.log(tc.param), tc.expected);
        });
    }
})

describe('Parameterized test error log', () => {
    const calculator = new Calculator();

    const test_error_cases = [
        { param : Infinity, expected : 'unsupported operand type'},
        { param : 0, expected : 'math domain error (1)'},
        { param : -1, expected : 'math domain error (2)'}
    ];

    for (const tc of test_error_cases) {
        it(`exp(${tc.param}) should throw error : ${tc.expected}`, () => {
            assert.throws( () => {
                calculator.log(tc.param);
            }, {
                name : 'Error',
                message : tc.expected
            });
        });
    }
})