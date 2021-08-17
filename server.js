require('dotenv').config();
const restify = require('restify');
const corsMiddleware = require('restify-cors-middleware');
const path = require('path');

const cors = corsMiddleware({
    origins: ['*'],
    allowHeaders: ['authorization']
});

const httpOptions = {
    name: 'api-projecta',
    version: '1.0.0'
};
const http = restify.createServer(httpOptions);

http.pre(cors.preflight);
http.use(cors.actual);
http.use(restify.plugins.acceptParser(http.acceptable));
http.use(restify.plugins.queryParser());
http.use(restify.plugins.bodyParser());
http.listen(8080, function () {
    console.log(http.url);
    require('./Structure/routesHandler')(http, path.join(__dirname, './Routes'));
});
