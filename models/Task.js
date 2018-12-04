  var mongoose = require("mongoose");

  //define article schema
  var Schema = mongoose.Schema;

  var articleSchema = new Schema({
    title: {
      type: String,
    },
    priorty: {
      type: Number
    },
    notes: {
      type: String,
    }

  });

  var Task = mongoose.model('Task', articleSchema);

  module.exports = Task;
  