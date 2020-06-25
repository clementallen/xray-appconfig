# xray-appconfig
Repo to reproduce error encountered when trying to use AWS XRay and AppConfig together

## Instructions

- Run `npm install`

- Run `npm start`

- (optional) - Replace AppConfig call params with valid values


### Results

Running this will return the following error:
```
Error [NetworkingError]: Failed to get the current sub/segment from the context.
```

If the following line is commented out the AppConfig is retrieved as expected with no errors (providing valid config is added to `index.js` in the params object)
```
AWSXRay.captureHTTPsGlobal(https);
```
