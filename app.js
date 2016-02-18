
// top of your main app's file
var opbeat = require('opbeat').start({
  appId: 'b3cf79ccab',
  organizationId: '470d9f31bc7b4f4395143091fe752e8c',
  secretToken: '8210f7a075e4a0b30de1b5115942397162d5ac94'
})

var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});