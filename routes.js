module.exports = function(app) {
    app.get('/', function(request, response) {
        response.sendFile(__dirname + '/views/index.html')
    });
    app.get('/r0r', function(request, response) {
        response.sendFile(__dirname + '/views/apis/errorApi.html')
    });
    app.get('/rndr', function(request, response) {
        response.sendFile(__dirname + '/views/apis/render.html')
    });
    app.get('/offline', function(request, response) {
        response.sendFile(__dirname + '/offline/offline.html')
    });
    app.get('/planets', function(request, response) {
        response.sendFile(__dirname + '/views/planetOrder.html')
    });
    app.get('/go', function(request, response) {
        response.sendFile(__dirname + '/views/apis/go.html')
    });
    app.get('/uc', function(request, response) {
        response.sendFile(__dirname + '/views/apis/userclient.html')
    });
    app.get('/js', function(request, response) {
        response.sendFile(__dirname + '/srvnode.js')
    });
    app.get('/routes', function(request, response) {
        response.sendFile(__dirname + '/routes.js')
    })
};