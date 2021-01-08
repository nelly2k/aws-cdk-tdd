import { Stack } from '@aws-cdk/core';
import * as Tdd from './tdd-stack';
import * as cdk from '@aws-cdk/core';
import '@aws-cdk/assert/jest';
import * as webui from "./webui";

describe('When app is deployed', () => {

    const app = new cdk.App();
    const stack = new Tdd.TddStack(app, 'MyTestStack');
    test('it has a bucket for static web site with name', () => {
        expect(stack).toHaveResource('AWS::S3::Bucket', {
            BucketName: 'uniquebcketname.nelli.com'
        });
    });

    test('it has a bucket for static web site just there', () => {
        expect(stack).toHaveResource('AWS::S3::Bucket');
    });
});

describe('When stack is deployed', () => {
    const stack = new Stack();
    new webui.WebUi(stack, 'webui');

    test('it describes an S3 bucket', () => {
        expect(stack).toHaveResource('AWS::S3::Bucket', {
            BucketName: 'uniquebcketname.nelli.com'
        });
    })

});
