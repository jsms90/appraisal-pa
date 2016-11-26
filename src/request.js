const request = require('request');
const apikey = require('./config.js');
const ocrEndpoint = 'https://api.ocr.space/parse/image';



function request(url,cb){
  request(url,(err,req,body)=>{
      if (err) throw err;
      cb(null,body);
  });
};

module.exports=request;
