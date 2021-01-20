import { Aspects, Stack, Tags } from '@aws-cdk/core';
import { DynamoDbChecker } from './experiment';
import * as dynamoDb from '@aws-cdk/aws-dynamodb';
import * as api from './api';
import '@aws-cdk/assert/jest';
import './assertions';
import * as s3 from '@aws-cdk/aws-s3';
import '@aws-cdk/assert/lib/synth-utils';



describe('Testing experiemnt', () => {

    test('blah', () => {
        var stack = new Stack();

        new s3.Bucket(stack, 'my.bucket');
        Tags.of(stack).add('app', 'experiment')
        const table = new api.Api(stack, 'api', {
            tableName: 'mynewtable',
            resource: 'dogs',
            methods: ['GET']
        });
        Aspects.of(stack).add(new DynamoDbChecker("iamvalue"));
        var aspects = Aspects.of(stack).aspects;
        console.log(aspects);
      
        expect(stack).toHaveResourceLike(dynamoDb.CfnTable.CFN_RESOURCE_TYPE_NAME, {
            TableName: 'blahj',
            Metadata: 'blah'
        });

        
        console.log(table.node.metadata);
       
    });


    test('Catch exception when synth', () => {
        var stack = new Stack();

        new api.Api(stack, 'api', {
            tableName: 'mynewtable',
            resource: 'dogs',
            methods: ['GET']
        });
        Aspects.of(stack).add(new DynamoDbChecker("iamvalue"));
       
    
    });

    test.only('Catch error in annotations', () => {
        var stack = new Stack();

        new api.Api(stack, 'api', {
            tableName: 'mynewtable',
            resource: 'dogs',
            methods: ['GET']
        });
        Aspects.of(stack).add(new DynamoDbChecker("iamvalue"));

        expect(stack).toHaveError("I'm an error");   
    })
});