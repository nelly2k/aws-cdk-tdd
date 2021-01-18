import * as cdk from '@aws-cdk/core';
import * as dynamoDb from '@aws-cdk/aws-dynamodb';
import * as api from '@aws-cdk/aws-apigateway';

export interface ApiProps{
    tableName?: string,
    resource: string,
    methods : Array<string>
}

export class Api extends cdk.Construct {
    constructor(scope: cdk.Construct, id: string, props: ApiProps) {
        super(scope, id);
        
        new dynamoDb.Table(this, 'mainTable.table', {
            tableName : props.tableName || props.resource,
            partitionKey : {
                name: 'id3',
                type: dynamoDb.AttributeType.STRING    
            }
        })
        
        const apig = new api.RestApi(this, 'api.apigateway');
        const mainResource = apig.root.addResource(props.resource)

        mainResource.addMethod('GET');
    }

    
}