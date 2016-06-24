/* eslint-disable new-cap */

import express from 'express';
import Person from '../models/person';
const router = module.exports = express.Router();

router.get('/', (req, res) => {
  res.render('person/index');
});

router.get('/new', (req, res) => {
  res.render('person/new');
});

router.post('/', (req, res) => {
  const person = new Person(req.body);
  person.save(() => {
    res.redirect('/person');
  });
});

router.get('/:id/show', (req, res) => {
  res.render('person/show');
});
