import './assertions';
import { Annotations, Stack } from '@aws-cdk/core';

describe('Given a stack', () => {

    let stack: Stack;
    beforeEach(() => {
        stack = new Stack();
    })
    describe('when metadata has an error', () => {
        test('toHaveError pass', () => {
            Annotations.of(stack).addError("error message");

            expect(stack).toHaveError("error message");
        });

    });

    describe('when metadata has no error', () => {
        test('toHaveError fail', () => {
            expect(stack).toHaveError("error message");
        })
    })
})