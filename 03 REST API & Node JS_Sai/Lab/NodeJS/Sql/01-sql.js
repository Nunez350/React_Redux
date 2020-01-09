var express = require('express');
var app = express();
var bodyParser = require('body-parser');

var mySql = require('mysql');

app.use(bodyParser.json());

var connection = mySql.createConnection({
    host: 'localhost',
    user: 'root',
    password: "saiallala",
    database: 'mydb'
});

connection.connect((err) => {
    if(err)
        throw err;
    else
        console.log("connected to MySql");
});

app.get('/tasks', (req, res) => {
    connection.query("Select * from tasks", (err, data) => {
        if(err) 
            throw err;
        else {
            console.log(res);
            res.send(data);
        }
    });
});

app.get('/tasks/:id', (req, res) => {
    connection.query("Select * from tasks where id = ? ", req.params.id, (err, data) => {
        if(err) 
            throw err;
        else {
            console.log(res);
            res.send(data);
        }
    }); 
});

app.post('/tasks', (req, res) => {
    var data = [req.body.task,req.body.status,new Date()]
    connection.query(" insert into tasks (task, status, created_at) values (?,?,?)", data, (err, data) => {
        if(err) 
            throw err;
        else {
            console.log(res);
            res.send(200, data); 
        }
    });
});

app.delete('/tasks/:id', (req, res) => {
    connection.query("delete from tasks where id = ? ", req.params.id, (err, data) => {
        if(err) 
            throw err;
        else {
            console.log(res);
            res.send(200 ,data);
        }
    }); 
});

app.listen(3000, () => {
    console.log("bruh... Its runnings.......")
})