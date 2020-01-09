var express = require('express');
var app = express();
var bodyParser = require('body-parser');
//odyParser.urlencoded({extended: true});

app.use(bodyParser.json());

var mysql = require('mysql')
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database:'mydb'
})

connection.connect(function(err) {
    if (err) throw err;
    else
    console.log("conected to mysql")
});

app.get('/tasks', (req,res) => {
    connection.query("Select * from tasks", function (err,data) {
        if (err) throw err;
        else {
            console.log(res);
            res.send(data);
        }
    });
});

app.get('/tasks/:id-', (req,res) => {
    connection.query("select task from tasks where id = ?", req.params.id, function (err,data){
        if (err) throw err;
        else {
            console.log(data);
            res.send(data);
        }
    });
})

app.post('/tasks', (req,res) => {
 var data = [req.body.task, req.body.status];
    
    connection.query("INSERT INTO  tasks ( task, status) VALUES (?,?) ", data, function (err,data){
    //connection.query("select task from tasks where id = ?", req.params.id, function (err,data){
        if (err) throw err;
        else {
            console.log(data);
            res.send(200, data.insertId);
        }
    });
})

app.delete('/tasks/:id', (req,res) => {
    connection.query("delete from tasks where id = ?", req.params.id, function (err,data){
        if (err) throw err;
        else {
            console.log(data);
            res.send(data);
        }
    });
})





app.listen(3001, ()=> {
    console.log("listening on port 3001");
});
