const express = require('express')
const router = express.Router();
const api = require('@dlwlrma00/animefreak2');

// get the list of all the pages
router.get('/', async (req, res) => {
    try {
        res.send("OK");
    }
    catch (err) {
        res.json({ "msg": err });
    }
})

// get details of a specific anime
router.get('/anime/:id', async (req, res) => {
    try {
        api
            .getSingleAnimeData(req.params.id)
            .then((AnimeObject) => {
                res.send(AnimeObject);
            })
            .catch((err) => {
                console.log(err);
            });
    }
    catch (err) {
        res.json({ "msg": err });
    }
})

// get the animes based on the search queries
router.get('/search/:q', async (req, res) => {
    try {
        api
            .search(req.params.q)
            .then((r) => {
                res.send(r);
            })
            .catch((err) => {
                console.log(err);
            });
    }
    catch (err) {
        res.json({ "msg": err });
    }
})


// get the specific episode source
router.get('/episode/:id(*)', async (req, res) => {
    try {
        // res.send("OK")
        console.log(req.params.id);
        api
            .animeVideoHandler(req.params.id)
            .then((episodeSource) => {
                res.send(episodeSource);
            })
            .catch((err) => {
                console.log(err);
            });
    }
    catch (err) {
        res.json({ "msg": err });
    }
})


module.exports = router
