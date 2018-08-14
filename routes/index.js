let express = require('express');
let router = express.Router();

router.get('/', (req, res) => {
    res.send(`
        <link rel="stylesheet" href="/css/styles.css">
        <h1><b>Taylor Swift Albums</b></h1>
        <div class="main">
        <img src="/images/misc/background.jpg" style="height: 500px;"><br>
        </div>
        <div class="mainButtons">
        <button><a style="text-decoration: none;" href="albums">View All</a></button>
        <button><a style="text-decoration: none;" href="albums/0">Taylor Swift</a></button>
        <button><a style="text-decoration: none;" href="albums/1">Fearless</a></button>
        <button><a style="text-decoration: none;" href="albums/2">Speak Now</a></button>
        <button><a style="text-decoration: none;" href="albums/3">Red</a></button>
        <button><a style="text-decoration: none;" href="albums/4">1989</a></button>
        <button><a style="text-decoration: none;" href="albums/5">Reputation</a></button>
        </div>
    `)
})

module.exports = router;