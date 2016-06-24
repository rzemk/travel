/* eslint-disable new-cap, array-callback-return  */

import express from 'express';
import Country from '../models/country';
const router = module.exports = express.Router();

router.get('/', (req, res) => {
  Country.find((err, countries) => {
    res.render('countries/index', { countries });
  });
});

router.get('/new', (req, res) => {
  res.render('countries/new');
});

router.post('/', (req, res) => {
  const country = new Country(req.body);
  country.save(() => {
    res.redirect('/countries');
  });
});

router.get('/:id/show', (req, res) => {
  Country.findById(req.params.id, (err, country) => {
    res.render('countries/show', { country });
  });
});
