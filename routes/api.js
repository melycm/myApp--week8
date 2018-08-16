let express = require('express');
let router = express.Router();
var bodyParser = require('body-parser');
var fs = require('fs');

var data = require('../data/feedback.json');

router.use(bodyParser.urlencoded({ extended: false }));

router.use(bodyParser.json());
router.get('/api', (req, res) =>{
    res.json(data);

});

router.get('/api', (req, res) =>{
    res.json(data);
});

router.post('/api', function(req, res){
    data.unshift(req.body);

    fs.writeFile('/data/feedback.json', JSON.stringify(data), 'utf8', function(err){
        if(err){
            console.error(err);
        }
    })
    console.log(req.body);
    console.log(req.body.name);
    console.log(req.body.message);
    res.json(data);
})

module.exports = router;