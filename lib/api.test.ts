import { Stack } from '@aws-cdk/core';
import * as api from './api';
import '@aws-cdk/assert/jest';

describe('Given api is provisioned', () => {
    const tableResource = "AWS::DynamoDB::Table";
    let stack: Stack;

    beforeEach(() => {
        stack = new Stack();
    });

    const input = (input: api.ApiProps) => {
        new api.Api(stack, 'api', input);
    }

    describe('when table get created', () => {
        test('if name specified, then use this name', () => {
            
            input({
                tableName: 'mynewtable',
                resource: 'dogs',
                methods: ['GET']
            });

            expect(stack).toHaveResource(tableResource, {
                TableName: "mynewtable"
            });
        });

        test('if name not specified, then use resource name', () => {
            input({
                resource: 'dogs',
                methods:  [ 'GET']
            });

            expect(stack).toHaveResource(tableResource, {
                TableName : 'dogs'
            })
        });
        
        describe('when api gateway provisioned', () => {
            test('resource created', () => {
                input({ resource: 'dogs', methods: ['GET'] });
                expect(stack).toHaveResource("AWS::ApiGateway::Resource", {
                    PathPart: 'dogs'
                })
            });

            test('if not methods are provided, then excpetion', () => {
                input({ resource: 'dogs', methods:  [ 'GET'] });
                expect(stack).toThrowError('No methods are provided');
            });

            
        })
    });
  
    

})