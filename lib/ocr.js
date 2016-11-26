const request = require('request');
const apikey = require('../config.js');
const ocrEndpoint = 'https://api.ocr.space/parse/image';

module.exports = (done) => {
/*  const params = {
    apikey: apikey,
    language: "eng",
    isOverlayRequired: "true",
    url: 'https://www.edrawsoft.com/template/student-certificate300.png'
  //  file
};*/


  var options={
    url: ocrEndpoint,
        form: {
        apikey: apikey,
        language: "eng",
        isOverlayRequired: "true",
        url: 'https://www.edrawsoft.com/template/student-certificate300.png'
        //file:
      }
  }
  // whatever you need
  return request.post(options, done);
};
