const express = require('express');
const app = express();
const axios = require('axios');

const port = process.env.PORT || 4000;

app.get('/', async (req, res) => {
    console.log('send request');
    const loginRes = await axios.post('http://api.cup2022.ir/api/v1/user/login', {
        email: 'test@test123.com',
        password: 'test123321'
    })

    console.log(loginRes.data);
    res.send(loginRes.data);
});

app.listen(port, () => console.log('listening on port', port));
