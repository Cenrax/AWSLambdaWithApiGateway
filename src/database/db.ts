import * as AWS from "aws-sdk";
import { DocumentClient } from "aws-sdk/clients/dynamodb";

const createDynamoDBClient = (): DocumentClient => {
  if (process.env.IS_OFFLINE) {
    console.log(process.env.IS_OFFLINE);
    console.log(process.env.AWS_SECRET_ACCESS_KEY!)
    return new AWS.DynamoDB.DocumentClient({
      region: "localhost",
      endpoint: "http://localhost:5000",
      accessKeyId: "9999",
      secretAccessKey: "0000",
    });
  }

  return new AWS.DynamoDB.DocumentClient();
};

export default createDynamoDBClient;
