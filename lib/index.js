'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _firebase = require('firebase');

var _firebase2 = _interopRequireDefault(_firebase);

var _config = require('./config');

var _profileImage = require('./util/profile-image');

var _profileImage2 = _interopRequireDefault(_profileImage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const initializeBD = config => {
  console.log('called initializeApp');
  console.log(config);
  _firebase2.default.initializeApp(config);
  const db = _firebase2.default.database();
  return db.ref('comunidad');
};

const db = initializeBD(_config.configFirebase);
const app = (0, _express2.default)();

// parse application/x-www-form-urlencoded
app.use(_bodyParser2.default.urlencoded({ extended: false }));

// parse application/json
app.use(_bodyParser2.default.json());

app.post('/save-member', (req, res) => {
  console.log('init save member');
  const users = db.child('users');
  const params = req.body;

  (0, _profileImage2.default)(params.email, params.github).then(avatarUrl => {
    console.log('avatar obtained');
    params.avatarUrl = avatarUrl;
    users.push(params, e => {
      const response = {};
      if (e) {
        response.status = 'ERROR';
        response.message = e;
      } else {
        response.status = 'OK';
        response.message = 'member saved';
      }

      console.log(response);
      res.json(response);
    }).catch(console.log);
  }).catch(err => {
    console.log(err);
  }).then(() => {
    console.log('finish');
  });
});

module.exports = app;