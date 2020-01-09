let express = require('express');
let cookieParser = require('cookie-parser');
let app = express();

app.use(cookieParser());
app.get('/', (req,res) => {
    res.send('welcome to the express app');
});
let users = {
    name: 'Roy',
    Age: '18'
}
app.get('/setuser', (req,res) => {
    res.cookie("userData", users);
    res.send("sending user data");
});
app.get('/getuser1', (req,res)=> {
    res.send(req.cookies);
})
app.listen(3000);