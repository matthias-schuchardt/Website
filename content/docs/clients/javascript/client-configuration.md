---
title: JavaScript Client Configuration
---

## Exceptionless JavaScript / Node.js Client Configuration

## Index
* [Installation](#installation)
  * [JavaScript](#javascript)
  * [Node.js](#nodejs)
* [Configuration](#configuration)
  * [JavaScript](#javascript-1)
  * [Node.js](#nodejs-1)
  * [General Data Protection Regulation](#general-data-protection-regulation)
* [Versioning](#versioning)

***
***

## Installation

### JavaScript

#### Via Bower

1. Install the package by running `bower install exceptionless`
1. Add the script to your html page. We recommend placing this as the very first script.

```javascript
<script src="bower_components/exceptionless/dist/exceptionless.min.js"></script>
```

### Node.js

1. Install the package by running `npm install exceptionless --save-dev`. 
1. Add the Exceptionless client to your app:

```javascript
var client = require('exceptionless').ExceptionlessClient.default;
```

***

## Configuration

_NOTE: The only required setting that you need to configure is the client's `apiKey`._

### JavaScript

1 - Configure the `apiKey` as part of the script tag. This will be applied to all new instances of the ExceptionlessClient

```javascript
<script src="bower_components/exceptionless/dist/exceptionless.min.js?apiKey=API_KEY_HERE"></script>
```

2 - Set the `apiKey` on the default ExceptionlessClient instance.

```javascript
exceptionless.ExceptionlessClient.default.config.apiKey = 'API_KEY_HERE';
```

3 - Create a new instance of the ExceptionlessClient and specify the `apiKey`, `serverUrl` or [configuration object](https://github.com/exceptionless/Exceptionless.JavaScript/blob/master/src/configuration/IConfigurationSettings.ts).

```javascript
var client = new exceptionless.ExceptionlessClient('API_KEY_HERE');
// or with a api key and server url.
var client = new exceptionless.ExceptionlessClient('API_KEY_HERE', 'http://localhost:50000');
// or with a configuration object
var client = new exceptionless.ExceptionlessClient({
apiKey: 'API_KEY_HERE',
serverUrl: 'http://localhost:50000',
submissionBatchSize: 100
});
```

### Node.js

1 - Set the `apiKey` on the default ExceptionlessClient instance.

```javascript
var client = require('exceptionless').ExceptionlessClient.default;
client.config.apiKey = 'API_KEY_HERE';
```

2 - Create a new instance of the ExceptionlessClient and specify the `apiKey`, `serverUrl` or [configuration object](https://github.com/exceptionless/Exceptionless.JavaScript/blob/master/src/configuration/IConfigurationSettings.ts).

```javascript
var exceptionless = require('exceptionless');

var client = new exceptionless.ExceptionlessClient('API_KEY_HERE');
// or with a api key and server url.
var client = new exceptionless.ExceptionlessClient('API_KEY_HERE', 'http://localhost:50000');
// or with a configuration object
var client = new exceptionless.ExceptionlessClient({
apiKey: 'API_KEY_HERE',
serverUrl: 'http://localhost:50000',
submissionBatchSize: 100
});
```

**NOTE**: creating new instances is good for sending custom events. **Automatic catching of errors uses default client**. Make sure you setup default client as well if you need automatic catching of unhandled errors. 


### General Data Protection Regulation
By default the Exceptionless Client will report all available metadata which could include potential PII data. There are various ways to limit the scope of PII data collection. For example, one could use [Data Exclusions](https://github.com/exceptionless/Exceptionless/wiki/Security#data-exclusions) to remove sensitive values but it only applies to specific collection points such as `Cookie Keys`, `Form Data Keys`, `Query String Keys` and `Extra Exception properties`. Additional data may need to be removed for the GDPR like the collection of user names and IP Addresses. Shown below is several examples of how you can configure the client to remove this additional metadata.

You have the option of finely tuning what is collected via individual setting options or you can disable the collection of all PII data by setting the `includePrivateInformation` to `false`.

#### Query String
```javascript
<script src="bower_components/exceptionless/dist/exceptionless.min.js?apiKey=API_KEY_HERE& includePrivateInformation=false"></script>
```

#### JavaScript
```javascript
exceptionless.ExceptionlessClient.default.config.includePrivateInformation = false;
```

#### Node.js
```javascript
var exceptionless = require('exceptionless');
exceptionless.ExceptionlessClient.default.config.includePrivateInformation = false;
```

If you wish to have a finer grained approach which allows you to use Data Exclusions while removing specific meta data collection you can do so via code. Please note if the below doesn't meet your needs you can always write a plugin.

#### JavaScript
```javascript
// Include the username if available.
exceptionless.ExceptionlessClient.default.config.includeUserName = false;
// Include the MachineName in MachineInfo.
exceptionless.ExceptionlessClient.default.config.includeMachineName = false;
// Include Ip Addresses in MachineInfo and RequestInfo.
exceptionless.ExceptionlessClient.default.config.includeIpAddress = false;
// Include Cookies, please note that DataExclusions are applied to all Cookie keys when enabled.
exceptionless.ExceptionlessClient.default.config.includeCookies = false;
// Include Form/POST Data, please note that DataExclusions are only applied to Form data keys when enabled.
exceptionless.ExceptionlessClient.default.config.includePostData = false;
// Include Query String information, please note that DataExclusions are applied to all Query String keys when enabled.
exceptionless.ExceptionlessClient.default.config.includeQueryString = false;
```

#### Node.js
```javascript
var exceptionless = require('exceptionless');

// Include the username if available.
exceptionless.ExceptionlessClient.default.config.includeUserName = false;
// Include the MachineName in MachineInfo.
exceptionless.ExceptionlessClient.default.config.includeMachineName = false;
// Include Ip Addresses in MachineInfo and RequestInfo.
exceptionless.ExceptionlessClient.default.config.includeIpAddress = false;
// Include Cookies, please note that DataExclusions are applied to all Cookie keys when enabled.
exceptionless.ExceptionlessClient.default.config.includeCookies = false;
// Include Form/POST Data, please note that DataExclusions are only applied to Form data keys when enabled.
exceptionless.ExceptionlessClient.default.config.includePostData = false;
// Include Query String information, please note that DataExclusions are applied to all Query String keys when enabled.
exceptionless.ExceptionlessClient.default.config.includeQueryString = false;
```

## Versioning
By specifying an application version you can [enable additional functionality](https://github.com/exceptionless/Exceptionless/wiki/Versioning). It's a good practice to specify an application version if possible using the code below.

### JavaScript
```javascript
exceptionless.ExceptionlessClient.default.config.setVersion("1.2.3");
```

### Node.js
```javascript
var exceptionless = require('exceptionless');
exceptionless.ExceptionlessClient.default.config.setVersion("1.2.3");
```