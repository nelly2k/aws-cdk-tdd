import * as cdk from '@aws-cdk/core';
import * as dynamodb from '@aws-cdk/aws-dynamodb';
import * as s3 from '@aws-cdk/aws-s3';
import { Annotations, IAspect, IResolvable } from '@aws-cdk/core';

export class DynamoDbChecker implements IAspect{
    value: string;
    constructor(value: string) {
        this.value = value;
    }
    visit(node: cdk.IConstruct): void {
    
        if (node instanceof dynamodb.CfnTable) {

            node.node.addError("there is problem with that table");
            Annotations.of(node).addError('DynamoDb table has no generic id')
            
            node.tableName = 'blahj';
            // var keySchemas = node.keySchema as Array<dynamodb.CfnTable.KeySchemaProperty> ;
          
            // if (!keySchemas.some(x => x.attributeName == 'id')) {
            //     console.log("we are here");
            //     node.node.addError("there is problem with that table");
            //     Annotations.of(node).addError('DynamoDb table has no generic id')
            // }
        }
    }
    
}


export class AddTag implements IAspect{
    visit(node: cdk.IConstruct): void {
        throw new Error('Method not implemented.');
    }

}