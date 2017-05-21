let express = require('express');
let bodyParser = require('body-parser');

let app = express();

app.use(express.static(__dirname + '/../react-client/dist'));
// app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.listen(3000, function() {
  console.log('listening on port 3000!');
});
