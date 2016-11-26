const home={
  method:'GET',
  path:'/',
  handler: (request,response)=>{
      response('I am up and running :)');
  }
};


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
