/* eslint-disable func-names */

import mongoose from 'mongoose';
import request from 'request';
const Schema = mongoose.Schema;

const citySchema = new Schema({
  name: String,
  photos: { type: Array, default: [] },
  amount: Number,
  country: { type: String, ref: 'Country' },
  people: [{ type: String, ref: 'Person', default: [] }],
  balance: Number,
});

citySchema.methods.getWeather = function (cb) {
  // api.openweathermap.org/data/2.5/weather?q=London
  const descriptions = [];
  const weather = {};
  const url = `http://api.openweathermap.org/data/2.5/weather?q=${this.name}&appid=a9872c04c33223e38ab151d6e91f8514`.replace(/\s/g, '');
  // const url = 'http://api.openweathermap.org/data/2.5/weather?q=New_Orleans&appid=a9872c04c33223e38ab151d6e91f8514';
  // console.log('url', url);
  request({ url, json: true }, (err, rsp, body) => {
    // console.log('err', err);
    console.log('body', body);
    // console.log('bm', body.weather);
    body.weather.forEach( function (v) {
      descriptions.push(v.main);
      // console.log('object', v);
    });
    weather.descriptions = descriptions;
    weather.temperature = body.main.temp;
    console.log('before call back', weather);
    cb(err, weather);
  });
};


module.exports = mongoose.model('City', citySchema);
