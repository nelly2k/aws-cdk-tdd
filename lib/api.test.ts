import { Stack } from '@aws-cdk/core';
import * as api from './api';
import '@aws-cdk/assert/jest';

describe('given api is provisioned', () => {
    const resource = "AWS::DynamoDB::Table";

    describe('when table get provisioned', () => {
        test('and name specified, then named accordingly', () => {
            const stack = new Stack();

            new api.Api(stack, 'api', {
                tableName: 'mynewtable',
                resource: 'dogs'
            });

            expect(stack).toHaveResource(resource, {
                TableName: "mynewtable"
            })
        });

        test('and name not specified, then named as resource', () => {
            const stack = new Stack();

            new api.Api(stack, 'api', {
                resource: 'dogs',
            });

            expect(stack).toHaveResource(resource, {
                TableName : "dogs"
            })
        });
    })


})