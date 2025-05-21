const AWS = require("aws-sdk");
const db = new AWS.DynamoDB.DocumentClient();

exports.handler = async (event) => {
  const body = JSON.parse(event.body);
  const email = body.email;

  if (!email) {
    return { statusCode: 400, body: "Email is required" };
  }

  await db.put({
    TableName: process.env.TABLE_NAME,
    Item: { email }
  }).promise();

  return { statusCode: 200, body: "Subscribed successfully" };
};
