const hapi = require('hapi');
const server = new hapi.Server();
const routes = require('./routes.js');
const path = require('path');
const inert = require('inert');
const vision = require('vision');

server.connection({
  port: process.env.PORT | 5000
});

/*server.register([inert,vision], (err) => {
  if (err) throw err;
   server.views({
  engine: {
  hbs: require('handlebars')
}
  relativeTo: __dirname,
  path: //path
}) //tell where are the handlebar templates!
  server.route(routes);
});*/

module.exports = server;
