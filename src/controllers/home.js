/* eslint-disable new-cap */

import express from 'express';
const router = module.exports = express.Router();

router.get('/', (req, res) => {
  res.render('home/index');
});

router.get('/about', (req, res) => {
  res.render('home/about');
});

router.get('/faq', (req, res) => {
  res.render('home/faq');
});

// router.get('/person', (req, res) => {
//   res.render('person/new');
// });
//
// router.post('/person', (req, res) => {
//   console.log('req', req.body);
//   res.render('person/index');
// });
//
// router.get('/person/index', (req, res) => {
//   const people = [];
//   people.push({ name: 'bob', })
//   res.render('person/new', people);
// });
