const express = require('express');
const app = express();
const axios = require('axios');
const bodyParser = require('body-parser');

const port = process.env.PORT || 4000;

app.use(bodyParser.json());

app.get('/login', async (req, res) => {
    console.log('login request');
    const loginRes = await axios.post('http://api.cup2022.ir/api/v1/user/login', {
        email: 'test@test123.com',
        password: 'test123321'
    })

    console.log(loginRes.data);
    res.send(loginRes.data);
});

app.post('/game', async (req, res) => {
    console.log('game request');
    const reqBody = req.body;
    const token = req.headers.token;

    const gameRes = await axios.post('http://api.cup2022.ir/api/v1/bydate', reqBody, {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })

    console.log(gameRes.data);
    res.send(gameRes.data);
});


app.listen(port, () => console.log('listening on port', port));
