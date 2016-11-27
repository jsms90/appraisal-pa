const request = require('request');
const apikey = require('../config.js');
const ocrEndpoint = `http://api.ocr.space/parse/image`;
const fs = require('fs');
const formdata = require('form-data');
//const http = require('http');
//var myFile = fs.createReadStream(__dirname + '/../certificate.png');

let formObj = {
  apikey: apikey,
  language: 'eng',
  isOverlayRequired: false,
  file: {
    value: fs.createReadStream(__dirname + '/../certificate.png')},
    options: {
      filename: 'certificate.png',
      contentType: 'png'
    }
};

module.exports = () => {
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
      { value: fs.createReadStream(__dirname + "/../certificate.png"),
        options: { filename: 'certificate.png', contentType: null } } } };

request(options, function (error, response, body) {
  if (error) throw new Error(error);

  console.log(body);
});
}


  // var req = request.post(ocrEndpoint, function (err, resp, body) {
  // if (err) {
  //   console.log('Error!');
  // } else {
  //   console.log('URL: ' + body);
  // }
  // });
  // var form = new formdata();
  // form.append('file', fileStream, {
  //   filename: 'myfile.png',
  //   contentType: 'image/png'
  // });
  // form.append('apikey', apikey);
  // form.append('language', 'eng');
  // form.append('isOverlayRequired', true);


/*
  return request.post({
    url: ocrEndpoint,
    form: {
      apikey: apikey,
      language: "eng",
      isOverlayRequired: false,
      //file: formObj
      file: formObj
    }, function (err, httpResponse, body) {
    if (err) {
      return ;//console.error('upload failed:', err);
    }
    console.log('Upload successful!  Server responded with:', body);
  }
}, done);
*/
//
// request.post({url:'http://service.com/upload', formData: formData}, function(err, httpResponse, body) {
//   if (err) {
//     return console.error('upload failed:', err);
//   }
