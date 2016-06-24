/* eslint-disable new-cap */

import express from 'express';
const router = module.exports = express.Router();

router.get('/', (req, res) => {
  res.render('person/index');
});

router.get('/new', (req, res) => {
  res.render('person/new');
});

router.post('/new', (req, res) => {
  res.redirect('person/index');
});

router.get('/:id/show', (req, res) => {
  res.render('person/show');
});
