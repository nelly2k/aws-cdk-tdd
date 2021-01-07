import * as cdk from '@aws-cdk/core';

import * as s3 from '@aws-cdk/aws-s3';

export class TddStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // The code that defines your stack goes here

    var webuiBucket = new s3.Bucket(this, 'webui.bucket', {
      bucketName: 'uniquebcketname.nelli.com'
    });
  }
}
