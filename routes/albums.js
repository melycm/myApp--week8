let express = require('express');
let router = express.Router();


router.get('/albums', (req, res) => {

    let dataFile = req.app.get("appData");
    let myHTML = "";

    dataFile.albums.forEach(function(item){
        myHTML += `
            <h2>${item.albumname}</h2>
            <img class="cdPic" src="/images/albums/${item.shortname}_ts.png" width="300">
            <p>${item.summary}</p>
            <p>${item.tracklist}</p>
        `;

    })

    res.send(`
    <link rel="stylesheet" href="/css/styles.css">
    <div class="main">
    <h1>Albums</h1>
    </div>
    <ul>
        ${myHTML}
    </ul>
    <button><a style="text-decoration: none;" href="/">Home</a></button>
    `)

})

router.get('/albums/:albumID', (req, res) => {

    let dataFile = req.app.get("appData");
    let myHTML;

    let albums = dataFile.albums[req.params.albumID];

    res.send(`
        <link rel="stylesheet" href="/css/styles.css">
        <h2>${albums.name}</h2>
        <img src="/images/albums/${albums.shortname}_ts.png" width="300">
        <p>${albums.summary}</p>
        <p>${albums.tracklist}</p>
        <button><a style="text-decoration: none;" href="/">Home</a></button>
    `)
})

module.exports = router;