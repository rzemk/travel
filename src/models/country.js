/* eslint-disable func-names */

import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const countrySchema = new Schema({
  name: String,
  photos: { type: Array, default: [] },
  cities: [{ type: String, ref: 'City', default: [] }],
  balance: { type: Number, default: 0 },
  createdAt: { type: Date, default: Date.now },
});
// photos: {[String], default: [] },
module.exports = mongoose.model('Country', countrySchema);
