const express = require('express')
const app = express()
const path = require('path');
const port = 3000

app.use('/css', express.static(__dirname + '/css/'))
app.use('/js', express.static(__dirname + '/js/'))
app.use('/images', express.static(__dirname + '/images/'))

// app.use(express.static(path.join(__dirname, 'public')))


app.get('/', function(req, res){
    res.sendFile(__dirname + '/main.html');
  });

app.listen(port, () => {
  console.log(__dirname + '/js/');

  console.log(`Example app listening on port ${port}`)
})