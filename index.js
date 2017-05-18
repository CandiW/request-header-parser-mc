const express = require('express');
let app = express();


function getHeader(header){
    console.log(header);
    return JSON.stringify(header);
}

app.get('/',function(request,response){
    let header = getHeader(request.headers);
    let object = {
        ipaddress: request.ip,
        language: header.accept-language,
        software: header.user-agent
    }
    response.send(object);
});

app.listen(process.env.PORT || 3000);