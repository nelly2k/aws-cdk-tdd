import { expect as expectCDK, matchTemplate, MatchStyle } from '@aws-cdk/assert';
import * as cdk from '@aws-cdk/core';
import * as Tdd from '../lib/tdd-stack';
import '@aws-cdk/assert/jest';

// test('Empty Stack', () => {
//     const app = new cdk.App();
//     // WHEN
//     const stack = new Tdd.TddStack(app, 'MyTestStack');
//     // THEN
//     expectCDK(stack).to(matchTemplate({
//       "Resources": {}
//     }, MatchStyle.EXACT))
// });

describe('When app is deployed', () => {
  const app = new cdk.App();
  const stack = new Tdd.TddStack(app, 'MyTestStack');


  it('it has a bucket for static web site', () => {
  
    expect(stack).toHaveResource('AWS::S3::Bucket', {
      BucketName : 'uniquebcketname.nelli.com'
    });
    
  })
})