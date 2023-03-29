// var figlet = require('figlet');

// figlet('Sungkwang Lim', function(err, data) {
//     if (err) {
//         console.log('Something went wrong...');
//         console.dir(err);
//         return;
//     }
//     //console.log(data)
// });
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/dog/:var', (req, res) => {
    const q = req.params;
    console.log(q);
    const y = req.query;
    console.log(y);
    res.send({'dogvar': q.var});
})

app.get('/sound/:name', (req, res) => {
    const { name } = req.params;
    console.log(name);
    switch (name) {
        case 'dog':
            res.json({'sound':'멍멍'})
            break;
        case 'cat':
            res.json({'sound':'야옹'})
            break;
        case 'duck':
            res.json({'sound':'꽥꽥'})
            break;
        default:
            res.json({'sound':'알수없음.다시선택하세요.'})
            break;
    }
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})