import { Annotations, Aspects, Stack, Tag, Tags } from '@aws-cdk/core';
import { DynamoDbChecker, AddTag } from './experiment';
import * as dynamoDb from '@aws-cdk/aws-dynamodb';
import * as api from './api';
import '@aws-cdk/assert/jest';
import * as s3 from '@aws-cdk/aws-s3';

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
        expect(stack).toHaveResource("AWS::S3::Bucket", {
            Tags: [{
                "Key": "app",
                "Value": "experiment"
            }]
        });

        expect(stack).toHaveResource(dynamoDb.CfnTable.CFN_RESOURCE_TYPE_NAME, {
            TableName: 'blahj'
        })
        console.log(table.node.metadata);
        
    })
});