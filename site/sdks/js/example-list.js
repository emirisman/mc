'use strict'

var AWS = require('aws-sdk');

var config = {
  accessKeyId: "ECHB22VEKH5I0X4K2T7P",
  secretAccessKey: "IiqhtimkamPZJtV4J8jztm74LpdTSbn7RUASyPzjje2+pfhLJ7nFRg==",
  endpoint: "localhost:9000",
  region: "",
  sslEnabled: false,
  s3ForcePathStyle: true,
};

AWS.config.update(config);

var s3 = new AWS.S3();
s3.listBuckets(function(err, data) {
  if (err) {
    console.log(err); // an error occurred
  } else {
    console.log(data); // successful response
  }
});


var params = {
  Bucket: "docs"
};

s3.listObjects(params, function(err, data) {
  if (err) console.log(err);
  else console.log(data);
});
