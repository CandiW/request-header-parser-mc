const express = require('express');
let app = express();

app.get('/',function(request,response){
    let header = request.headers;
    let object = {
        ipaddress: header['x-forwarded-for'] || request.connection.remoteAddress,
        language: header['accept-language'].split(',')[0],
        software: header['user-agent'].split('(')[1].match(/\$\d+(?=\))/g)
    }
    response.send(object);
});

app.listen(process.env.PORT || 3000);