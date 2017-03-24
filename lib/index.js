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

_firebase2.default.initializeApp(_config.configFirebase);

const app = (0, _express2.default)();

// parse application/x-www-form-urlencoded
app.use(_bodyParser2.default.urlencoded({ extended: false }));

// parse application/json
app.use(_bodyParser2.default.json());

app.get('/', (req, res) => {
  const params = req.body;
  params.email = 'ceel2004@hotmail.com';
  params.github = 'DMaster69';

  (0, _profileImage2.default)(params.email, params.github).then(avatarUrl => {
    const db = _firebase2.default.database();
    const ref = db.ref('comunidad');
    const usersRef = ref.child('users');
    params.avatarUrl = avatarUrl;
    usersRef.push(params, e => {
      console.log(e);
      res.json({ message: 'hola' });
    });
  });
});

module.exports = app;