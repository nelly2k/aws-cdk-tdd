import * as cdk from '@aws-cdk/core';

import * as s3 from '@aws-cdk/aws-s3';
export class WebUi extends cdk.Construct{
    constructor(scope: cdk.Construct, id: string) {
        super(scope, id);
        
        var webuiBucket = new s3.Bucket(this, 'webui.bucket', {
            bucketName: 'uniquebcketname.nelli.com'
        });
        

        var anotherBucket = new s3.Bucket(this, 'another.bucket', {
            bucketName: 'uniquebcketname.yahoo.com'
          });
    }
}