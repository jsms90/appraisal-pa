const ocr = require('../lib/ocr.js');
const fs = require('fs');

const login={
  method:'GET',
  path:'/login',
  handler: (request, response) => {
    response.view('login');
  }
};

const home={
  method:'GET',
  path:'/',
  handler: (request, response)=> {
    const certificates = [{
      "lastValidated": "2014-04-28T17:27:22.000Z",
      "hostedUrl": "http://example.org/badge-assertion.json",
      "assertion": {
        "uid": "abcde12345",
        "recipient": "sha256$abcde1345",
        "badge": {
          "name": "Badge Name",
          "description": "Badge description.",
          "image": "https://dab1nmslvvntp.cloudfront.net/wp-content/uploads/2014/11/1415490092badge.png",
          "criteria": "https://example.org/criteria",
          "issuer": {
            "name": "King's Cross College",
            "url": "http://issuersite.org",
            "_location": "http://example.org/issuer-organization.json",
            "origin": "http://issuersite.org"
          },
          "_location": "http://issuersite.org/badge-class.json"
        },
        "verify": {
          "url": "http://example.org/badge-assertion.json",
          "type": "hosted"
        },
        "issuedOn": 1398705955,
        "_originalRecipient": {
          "identity": "sha256$abcde1345",
          "type": "email",
          "hashed": true
        },
        "issued_on": 1398705955
      },
      "imageUrl": "https://backpack.openbadges.org/images/badge/abcde12345.png"
    },
    {
      "lastValidated": "2014-04-28T17:27:22.000Z",
      "hostedUrl": "http://example.org/badge-assertion.json",
      "assertion": {
        "uid": "abcde12345",
        "recipient": "sha256$abcde1345",
        "badge": {
          "name": "Badge Name",
          "description": "Badge description.",
          "image": "https://dab1nmslvvntp.cloudfront.net/wp-content/uploads/2014/11/1415490092badge.png",
          "criteria": "https://example.org/criteria",
          "issuer": {
            "name": "King's Cross College",
            "url": "http://issuersite.org",
            "_location": "http://example.org/issuer-organization.json",
            "origin": "http://issuersite.org"
          },
          "_location": "http://issuersite.org/badge-class.json"
        },
        "verify": {
          "url": "http://example.org/badge-assertion.json",
          "type": "hosted"
        },
        "issuedOn": 1398705955,
        "_originalRecipient": {
          "identity": "sha256$abcde1345",
          "type": "email",
          "hashed": true
        },
        "issued_on": 1398705955
      },
      "imageUrl": "https://backpack.openbadges.org/images/badge/abcde12345.png"
    }
  ]
  response.view('index', {certificates});
}
}

const upload = {
  method: 'GET',
  path: '/upload',
  handler: ocr
}

  const newFile = {
    method: 'POST',
    path: '/newfile',
    config: {
      payload: {
            output: 'stream',
            parse: true,
            allow: 'multipart/form-data'
        },
        handler: function (request, reply) {
          console.log("in handler");
          //console.log(request);
              var data = request.payload;
              console.log(request.payload);
              if (data.file) {
                console.log("got file");
                  var name = data.file.hapi.filename;
                  var path = __dirname + "/../uploads/" + name;
                  console.log(path);
                  var file = fs.createWriteStream(path);

                  file.on('error', function (err) {
                      console.error(err)
                  });

                  data.file.pipe(file);

                  data.file.on('end', function (err) {
                      var ret = {
                          filename: data.file.hapi.filename,
                          headers: data.file.hapi.headers
                      }
                      //console.log(JSON.stringify(ret));
                      reply(JSON.stringify(ret));
                  })
              }

          }
  }
  }

//to serve static files
const files = {
  method: 'GET',
  path: '/{files*}',
  handler: {
    directory: {
      path: '.' // the directory where we we have all our static files
    }
  }
};
// module.exports = [home, upload, files, login];
module.exports = [home, files, login, upload, newFile];
