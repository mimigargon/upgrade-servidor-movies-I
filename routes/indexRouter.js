const express = require('express');
const router = express.Router();
const movies = require('../movies');

router.get('/movies', (req, res) => {
    return res.send(movies);
});

router.get('/movies/:moviesId', (req, res) => {
    const moviesId = req.params.moviesId;

    if(!movies[moviesId]) {
        return res.send('No se encuentra esa película por ID');
    }

    return res.send(movies[moviesId]);
});


router.get('/movies/:moviesTitle', (req, res) => {
    const moviesTitle = req.params.moviesTitle;

    if(!movies[moviesTitle]) {
        return res.send('No se encuentra la película por ese título');
    }

    return res.send(movies[moviesTitle]);
});

router.get('/movies/:moviesGender', (req, res) => {
    const moviesGender = req.params.moviesGender;

    if(!movies[moviesGender]) {
        return res.send('No se encuentra la película por ese género');
    }

    return res.send(movies[moviesGender]);
});

router.get('/movies/:moviesYear', (req, res) => {
    const moviesYear = req.params.moviesGender;

    if(!movies[moviesYear]) {
        return res.send('No se encuentra la película por ese año');
    }

    return res.send(movies[moviesYear] > 2010);
});

module.exports = router; 