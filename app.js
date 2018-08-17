let express = require('express');
let app = express();
let data = require('./data/data.json');
let feedback = require('./data/feedback.json');
var bodyParser = require('body-parser');

var http = require('http').Server(app);
var io = require('socket.io')(http);

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
app.use(require('./routes/chatroom'));

app.get('/chatroom', function(req, res){
    res.send('building chat');
})

io.on('connection', function(socket) {
    console.log('a user connected');
    socket.on('chat message', function(msg){
        io.emit('chat message', msg)
        console.log('message: ' + msg);
    });
});

http.listen(3000, ()=>{
    console.log("listening on port 3000");

})

// http.listen(3000, function(){
//     console.log('listening on port 3000');
// })