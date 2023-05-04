const express = require('express');
const port = 3000;

const app = express();
const bodyParser = require('body-parser');

//
require('./db');
app.use(bodyParser.json());
//

app.get('/', (req, res)=>{
    res.send('SERVER HOME PAGE');
})
// app.post('/signup',(req,res)=>{
//     console.log(req.body);
//     res.send('This is signUp Page');
// })
app.listen(port, () => {
    console.log('server is running on port ${port}');
})