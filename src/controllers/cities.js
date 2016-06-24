/* eslint-disable new-cap */

import express from 'express';
import City from '../models/city';
const router = module.exports = express.Router();

router.get('/', (req, res) => {
  res.render('countries/index');
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
  res.render('countries/show');
});
