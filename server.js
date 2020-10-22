
const http = require('http');
const fs =  require('fs');
const _ = require('lodash');
const server = http.createServer(function (request, response) {
  response.writeHead(200, {'Content-Type': 'text/html'});

  //lodash
  const num = _.random(0 , 100);
  console.log(num);

  let path = './views/';

  switch (request.url) {
      case '/':
          path += 'index.html';
          break;
      case '/abo':
          path +='about.html'
          break;
      default:
          path += '404.html';
          break;
  }
  fs.readFile(path , (err , data) => { 

      if (err) {
          console.log(err);
      }else {
          response.write(data);
          response.end();
      }
  })

  //response.end('Hello World');
}).listen(8081);

console.log('Server running at http://127.0.0.1:8081/');