const cloudinary = require('cloudinary').v2;

var storage = cloudinary.config({
    cloud_name: "dbitan5zn",
    api_key: "568236287745862",
    api_secret: "85DZNYZCqL4VD6H-yrYASM66B4M"
  });

  module.exports = storage;