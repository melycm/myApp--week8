let express = require('express');
let app = express();
let data = require('./data/data.json');

app.set('appData', data);

app.set('view engine', 'ejs');
app.use(express.static('public'));

app.use(require('./routes/index'));
app.use(require('./routes/albums'));

app.get('/', (req, res) => {

    res.render('index',{
        pageTitle: "Taylor Swift Albums",
        pageID: 'Home',
        speakers: data.index
    })
});

app.get('/albums', (req, res) => {

    res.render('index',{
        pageTitle: "Albums",
        pageID: 'Albums',
        speakers: data.albums
    })
});

app.listen(3000, ()=>{
    console.log("listening on port 3000");

})