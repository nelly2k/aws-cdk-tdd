import * as cdk from '@aws-cdk/core';

import * as s3 from '@aws-cdk/aws-s3';
import * as api from "./api";
import { Aspects } from '@aws-cdk/core';
import { DynamoDbChecker } from './experiment';

export class TddStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // The code that defines your stack goes here

    var webuiBucket = new s3.Bucket(this, 'webui.bucket', {
      bucketName: 'uniquebcketname.nelli.com'
    });

    var myApi = new api.Api(this, 'my.api', {
      resource: 'cats',
      methods: ['GET']
    })

    Aspects.of(myApi).add(new DynamoDbChecker("iamvalue"));
  }
}
