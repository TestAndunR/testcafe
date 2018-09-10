let AWS = require('aws-sdk');
const ddb = new AWS.DynamoDB.DocumentClient();
const cognito_idp = new AWS.CognitoIdentityServiceProvider();
let SL_AWS = require('slappforge-sdk-aws');

exports.handler = function (event, context, callback) {
    cognito_idp.listUsers({
        UserPoolId: process.env.UserPoolId_cognitoissueValidation,
        Limit: "10"
    }, function (error, data) {
        if (error) {
            // implement error handling logic here
            throw error;
        }
        // your logic goes within this block
    });



    callback(null, 'Successfully executed');
}