module.exports = function(server) {
    server.get('/', function(req, res, next) {
        res.send(200, 'API ONLINE');
        next();
    });
}