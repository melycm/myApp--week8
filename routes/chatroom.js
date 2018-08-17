var express = require('express');
var router = express.Router();

router.get('/chatroom', function(req, res){

    res.render('chatroom', {
        pageTitle: 'Chat',
        pageId: 'chatroom'
    });
});

module.exports = router;