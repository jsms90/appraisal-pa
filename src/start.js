const server = require('./server.js');

server.start((err)=>{
  if (err) throw err;
  console.log(`Server is running at port ${server.info.uri}`);
})
