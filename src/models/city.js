/* eslint-disable func-names */

import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const citySchema = new Schema({
  name: String,
  photos: { type: Array, default: [] },
  amount: Number,
  country: { type: String, ref: 'Country' },
  people: [{ type: String, ref: 'Person', default: [] }],
  balance: Number,
});


module.exports = mongoose.model('City', citySchema);
