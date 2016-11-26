const request = require('request');
const apikey = require('../config.js');
const ocrEndpoint = 'https://api.ocr.space/parse/image';
const fs = require('fs');
const formdata = require('form-data');
//var myFile = fs.createReadStream(__dirname + '/../certificate.png');

var formObj = {
  myFile: fs.createReadStream(__dirname + '/../certificate.png')
};

module.exports = (done) => {
  console.log("")
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
  //console.log(formObj)
  let fileStream = fs.createReadStream(__dirname + '/../certificate.png')
  console.log({fileStream})

  var req = request.post(ocrEndpoint, function (err, resp, body) {
  if (err) {
    console.log('Error!');
  } else {
    console.log('URL: ' + body);
  }
  });
  var form = req.form();
  form.append('file', fileStream, {
  filename: 'myfile.png',
  contentType: 'image/png'});
  form.append('apikey', apikey);
  form.append('language', 'eng');
  form.append('isOverlayRequired', true);


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
}
//
// request.post({url:'http://service.com/upload', formData: formData}, function(err, httpResponse, body) {
//   if (err) {
//     return console.error('upload failed:', err);
//   }
//   console.log('Upload successful!  Server responded with:', body);
