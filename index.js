const express = require('express');
const port = 3000;

const app = express();
const bodyParser = require('body-parser');
// 
require('./db');
require('./models/user');
//
const authroutes = require('./routes/authroutes');
const requireToken = require('./Middlewares/AuthTokenRequired');
//
app.use(bodyParser.json());
app.use(authroutes);
//

app.get('/', requireToken, (req, res) => {
    console.log(req.user);
    res.send(req.user);
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})