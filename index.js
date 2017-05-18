const express = require('express');
let app = express();

app.get('/',function(request,response){
    let header = request.headers;
    let object = {
        ipaddress: request.ip,
        language: header['accept-language'],
        software: header['user-agent']
    }
    response.send(object);
    repsonse.send(header);
});

app.listen(process.env.PORT || 3000);