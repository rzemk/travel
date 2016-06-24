/* eslint-disable func-names */

import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const personSchema = new Schema({
  name: String,
  photo: String,
  age: Number,
  gender: String,
  balance: { type: Number, default: 0 },
  cities: [{ type: String, ref: 'City', default: [] }],
  createdAt: { type: Date, default: Date.now },
});
// photos: {[String], default: [] },
module.exports = mongoose.model('Person', personSchema);
