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


router.get('/movies/title/:title', (req, res) => {
    const moviesTitle = movies.filter(movie => movie.title.toLowerCase() == req.params.title.toLowerCase());
    
    return res.send(moviesTitle);
       
    });

router.get('/movies/genre/:genre', (req, res) => {
    const moviesGenre = movies.filter(movie => movie.genre.toLowerCase() == req.params.genre.toLowerCase());
     return res.send(moviesGenre);
});

router.get('/movies/year/:year', (req, res) => {
    const moviesYear = movies.filter(movie => movie.year > 2010);

    if (moviesYear.length > 0) {
        return res.send(moviesYear);
    }else{
        return res.send('No se encuentra la película por año')
    }

   
});

module.exports = router; 