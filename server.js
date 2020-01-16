var express = require('express');
var bodyParser = require('body-parser');
var port = 3000;
var rp = require('request-promise');

var app = new express();

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.get('/', function(req, res, next) {
    res.send("Online");
});



app.post('/test', function(req, res, next) {
//     var sql = require('mssql');
//     var config = {
//         user: 'sa',
//         password: 'psdsystem',
//         server: '192.168.40.7',
//         database: 'IntershipDB',
//         options: {
//             instanceName: 'sqlexpress'
//         }
//     };
//     sql.close();
//     sql.connect(config, function(err) {
//         if (err) console.log('ERROR : ' + err);

//         // var query = 'SELECT XFsahGrand FROM TPOSTSalHD\
//         // WHERE XVBchCode = \'' + req.body.uname + '\'\
//         // AND XDSahDocDate BETWEEN \'' + req.body.fdate + '\'\
//         // AND  \'' + req.body.ldate + '\'\
//         // ';

//         var query = 'SELECT * FROM TCNMEmp';
//         var request = new sql.Request();
//         request.query(query, function(err, recordset) {
//             if (err) console.log('ERROR : ' + err);

//             if (recordset != undefined && recordset.recordset.length > 0) {
//                 res.send(recordset.recordset);
//             } else {
//                 res.send("No data found.");
//             }
//         });
//     });
    
    res.send("complete krab");
});

app.listen(process.env.PORT || port, function() {
    console.log('Node start on port : ' + port);
});
