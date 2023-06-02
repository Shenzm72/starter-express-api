const express = require('express')
const cors = require('cors')
const md5 = require('js-md5')
const app = express()
app.use(cors())

const PWD = 'szm666';
app.all('/', (req, res) => {
    console.log("Just got a request!")
    res.send('Hello World!')
})
app.get('/jump', (req, res) => {
    res.redirect('https://www.baidu.com/');
});
app.get('/login', (req, res) => {
    if (req.query.pwd === md5(PWD)) {
        res.json({
            code: 0,
            msg: '',
            success: true,
        });
    } else {
        res.json({
            code: -1,
            msg: '密码错误',
            success: false,
        });
    }
});
app.listen(process.env.PORT || 3000)