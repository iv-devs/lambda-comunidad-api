'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _assert = require('assert');

var _assert2 = _interopRequireDefault(_assert);

var _config = require('./config');

var _member = require('./routes/member');

var _member2 = _interopRequireDefault(_member);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const app = (0, _express2.default)();
app.use(_bodyParser2.default.urlencoded({ extended: false }));
app.use(_bodyParser2.default.json());

_mongoose2.default.connect(_config.configMongo.databaseURL, (err, db) => {
  _assert2.default.equal(err, null);
});

app.use('/member', _member2.default);

module.exports = app;