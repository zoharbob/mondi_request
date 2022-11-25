const axios = require('axios');

(async () => {
    console.log('send request');
    const loginRes = await axios.post('http://api.cup2022.ir/api/v1/user/login', {
        email: 'test@test123.com',
        password: 'test123321'
    })

    console.log(loginRes);
})()
