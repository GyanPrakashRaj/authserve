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
app.listen(port, () => {
    console.log('server is running on port ${port}');
})
