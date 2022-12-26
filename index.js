const express = require('express')
const cors = require('cors')
const app = express()
app.use(cors())

app.all('/', (req, res) => {
    console.log("Just got a request!")
    res.send('Hello World!')
})
app.get('/jump', (req, res) => {
    res.redirect('https://www.baidu.com/');
});
app.listen(process.env.PORT || 3000)