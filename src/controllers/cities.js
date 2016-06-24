/* eslint-disable new-cap, array-callback-return*/

import express from 'express';
import City from '../models/city';
import Country from '../models/country';
const router = module.exports = express.Router();

router.get('/', (req, res) => {
  City.find((err, cities) => {
    res.render('cities/index', { cities });
  });
});

router.get('/new', (req, res) => {
  Country.find((err, countries) => {
    res.render('cities/new', { countries });
  });
});

router.post('/', (req, res) => {
  const city = new City(req.body);
  city.save(() => {
    res.redirect('/cities');
  });
});

router.get('/:id/show', (req, res) => {
  City.findById(req.params.id, (err, city) => {
    res.render('cities/show', { city });
  });
});
