/* eslint-disable func-names */

import mongoose from 'mongoose';
//import request from 'request';
const Schema = mongoose.Schema;

const citySchema = new Schema({
  name: String,
  photos: { type: Array, default: [] },
  amount: Number,
  country: { type: String, ref: 'Country' },
  people: [{ type: String, ref: 'Person', default: [] }],
  balance: Number,
});
/*
citySchema.methods.getWeather = function (cb) {
  // api.openweathermap.org/data/2.5/weather?q=London
  //const url = `http://api.openweathermap.org/data/2.5/weather?q=${this.name}&appid=a9872c04c33223e38ab151d6e91f8514`;
  const url = 'http://api.openweathermap.org/data/2.5/weather?q=Miami&appid=a9872c04c33223e38ab151d6e91f8514';
  console.log('url', url);
  request({ url, json: true }, (err, rsp, body) => {
    console.log('err', err);
    console.log('body', body);
    cb(err, body);
  });
};
*/

module.exports = mongoose.model('City', citySchema);
