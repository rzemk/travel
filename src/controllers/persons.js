/* eslint-disable new-cap, array-callback-return */

import express from 'express';
import Person from '../models/person';
const router = module.exports = express.Router();

router.get('/', (req, res) => {
  Person.find((err, people) => {
    res.render('person/index', { people });
  });
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
  Person.findById(req.params.id, (err, person) => {
    res.render('person/show', { person });
  });
});
