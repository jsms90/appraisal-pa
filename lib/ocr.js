const request = require('request');
const apikey = require('../config.js');
const ocrEndpoint = `http://api.ocr.space/parse/image`;
const fs = require('fs');
const formdata = require('form-data');
const path = require('path');
const uploads = fs.readdirSync(__dirname + '/../uploads');
var newFile;


for(var i in uploads) {
   if(path.extname(uploads[i]) === ".jpg") {
       newFile = uploads[i];
   }
}


let formObj = {
  apikey: apikey,
  language: 'eng',
  isOverlayRequired: false,
  file: {
    value: fs.createReadStream(newFile)},
    options: {
      filename: 'certificate.png',
      contentType: 'png'
    }
};

module.exports = (req, rep) => {
  console.log("ocr");
  var options = { method: 'POST',
  url: 'https://api.ocr.space/Parse/Image',
  headers:
   { 'postman-token': '857bf365-e4c8-6fb7-3b76-3f14c2e3dd6c',
     'cache-control': 'no-cache',
     'content-type': 'multipart/form-data; boundary=---011000010111000001101001' },
  formData:
   { apikey: '9df0cfe81888957',
     isOverlayRequired: 'true',
     language: 'eng',
     file:
      { value: fs.createReadStream(newFile),
        options: { filename: 'certificate.png', contentType: null } } } };

request(options, function (error, response, body) {
  if (error) throw new Error(error);

  let data = JSON.parse(body);
  rep(data["ParsedResults"][0]["ParsedText"]);
});
}
