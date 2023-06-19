const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const slug = require('mongoose-slug-generator');

mongoose.plugin(slug);
const Toy = new Schema({
  name: {type: String, require: true,},
  description: {type: String},
  detailDes: {type: String},
  image: {type: String, require: true,},
  slug: {type: String, slug: 'name',}

}, {timestamps: true,});

module.exports = mongoose.model('Toy', Toy);