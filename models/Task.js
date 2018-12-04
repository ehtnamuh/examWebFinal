  var mongoose = require("mongoose");

  //define article schema
  var Schema = mongoose.Schema;

  var articleSchema = new Schema({
    title: {
      type: String,
      required: "Title required"
    },
    priorty: {
      type: Number,
      required: "Priority required",
      min: 0,
      max: 10
    },
    notes: {
      type: String,
      required: "Notes required"
    }

  });

  var Task = mongoose.model('Task', articleSchema);

  module.exports = Task;
  