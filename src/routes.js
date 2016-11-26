const ocr = require('../lib/ocr.js')
const home={
  method:'GET',
  path:'/',
  handler: (request,response)=>{
      response('I am up and running :)');
  }
};


const upload={
  method:'POST',
  path: '/upload',
  handler: ocr((err,response,body)=>{
      if (err) throw err;
      console.log(body);
      //cb(null,body);
  })
}


//to serve static files
const files ={
  method: 'GET',
  path: '/{files*}',
  handler: {
    directory: {
      path: '.' // the directory where we we have all our static files
    }
  }
}

module.exports = [home, files];
