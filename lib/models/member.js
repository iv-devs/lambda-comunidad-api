'use strict';

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Schema = _mongoose2.default.Schema;

const memberSchema = new Schema({
  github: String,
  name: String,
  email: String,
  role: String,
  bio: String,
  url: String,
  avatarUrl: String,
  isStaff: Boolean,
  skills: [String],
  badges: [String]
});

module.exports = _mongoose2.default.model('member', memberSchema);