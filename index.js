const https = require('https');
const AWSXRay = require('aws-xray-sdk');
const AWS = require('aws-sdk');

AWSXRay.captureHTTPsGlobal(https);

const appConfig = new AWS.AppConfig({ region: 'eu-west-1' });

const params = {
    Application: 'example-application',
    Environment: 'example-environment',
    Configuration: 'example-configuration',
    ClientId: 'clientid',
};

appConfig
    .getConfiguration(params)
    .promise()
    .then((res) => {
        console.log(res);
    })
    .catch((error) => {
        console.warn(error);
    });
