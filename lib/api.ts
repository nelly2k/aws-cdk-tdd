import * as cdk from '@aws-cdk/core';
import * as dynamoDb from '@aws-cdk/aws-dynamodb';

export interface ApiProps{
    tableName?: string,
    resource: string
}

export class Api extends cdk.Construct {
    constructor(scope: cdk.Construct, id: string, props: ApiProps) {
        super(scope, id);
        
        new dynamoDb.Table(this, 'mainTable.table', {
            tableName : props.tableName || props.resource,
            partitionKey : {
                name: 'id',
                type: dynamoDb.AttributeType.STRING    
            }
        })



    }

    
}