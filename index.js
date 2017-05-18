const express = require('express');
let app = express();

app.get('/',function(request,response){
    let header = request.headers;
    let object = {
        ipaddress: request.ip['X-Forwarded-For'] || request.connection.remoteAddress,
        language: header['accept-language'].split(',')[0],
        software: header['user-agent'].split('(')[0]
    }
    response.send(object);
    repsonse.send(header);
});

app.listen(process.env.PORT || 3000);