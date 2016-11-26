const request = require('request');
const apikey = require('../config.js');
const ocrEndpoint = 'https://api.ocr.space/parse/image';
const fs = require('fs');
const formdata = require('form-data');
var myFile = fs.createReadStream(__dirname + '/../certificate.png');

var formObj = {
  apikey: apikey,
  language: "eng",
  isOverlayRequired: false,
  file: myFile
}

module.exports = (done) => {
  // var options = {
  //   url: ocrEndpoint,
  //   form: {
  //         apikey: apikey,
  //         language: "eng",
  //         isOverlayRequired: false,
  //         // file: fs.readFile(__dirname + '/../certificate.png', function(err, data) {
  //         //   if (err) console.log(err);
  //         //   console.log(data);
  //         //   return data.toString();
  //         // })
  //       //file:
  //       file: myFile
  //       }
  //     }
  //soptions.form.append('file', __dirname + '/../certificate.png')
  request.post({url: ocrEndpoint, formData: formObj}, function (err, httpResponse, body) {
    if (err) {
      return console.error('upload failed:', err);
    }
    console.log('Upload successful!  Server responded with:', body);
  });
}
//
// request.post({url:'http://service.com/upload', formData: formData}, function(err, httpResponse, body) {
//   if (err) {
//     return console.error('upload failed:', err);
//   }
//   console.log('Upload successful!  Server responded with:', body);
