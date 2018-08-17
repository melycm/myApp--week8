let express = require('express');
let app = express();
let data = require('./data/data.json');
let feedback = require('./data/feedback.json');
var bodyParser = require('body-parser');

// app.use(function(req, res) {
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Headers", 
//     "Origin, X-Requested-With, Content-Type, Accept");
// });

app.set('appData', data);
app.set('feedbackData', feedback);

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended:false}))

app.locals.siteTitle = "T.S Albums";

app.use(require('./routes/index'));
app.use(require('./routes/albums'));
app.use(require('./routes/feedback'));
app.use(require('./routes/api'));


app.listen(3000, ()=>{
    console.log("listening on port 3000");

})