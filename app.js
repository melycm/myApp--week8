let express = require('express');
let app = express();
let data = require('./data/data.json');

app.set('appData', data);

app.set('view engine', 'ejs');
app.use(express.static('public'));

app.locals.siteTitle = "T.S Albums"

app.use(require('./routes/index'));
app.use(require('./routes/albums'));


app.listen(3000, ()=>{
    console.log("listening on port 3000");

})