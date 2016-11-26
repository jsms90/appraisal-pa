var tesseract = require('tesseract.js')

/*tesseract.recognize('./recipe.jpg')
    .progress(message => console.log(message))
    .catch(err => console.error(err))
    .then(result => console.log(result))
    .finally(resultOrError => console.log(resultOrError));*/

/*    tesseract.recognize('./recipe.jpg')
        .progress(function(message){console.log('progress is: ', message)})*/

var html_text= tesseract.recognize('./certificate.png')
        .then(function(result){console.log('result is: ', result);return result.text;});

console.log('I have my final text',html_text);
