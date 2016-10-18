var orm = require('orm');

var Quiz = module.exports = {
  properties: {
    name: String,
    id: {type: 'serial', key: true}
  }
};
