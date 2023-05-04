const express = require('express');
const port = 3000;

const app = express();
const bodyParser = require('body-parser');

//
require('./db');
require('./models/user');
const authroutes = require('./routes/authroutes');
app.use(bodyParser.json());
app.use(authroutes);
//

app.get('/', (req, res)=>{
    res.send('SERVER HOME PAGE');
})
// app.post('/signup',(req,res)=>{
//     console.log(req.body);
//     res.send('This is signUp Page from index.js dir');
// })
app.listen(port, () => {
    console.log('server is running on port ${port}');
})