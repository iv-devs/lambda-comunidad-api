'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _profileImage = require('../util/profile-image');

var _profileImage2 = _interopRequireDefault(_profileImage);

var _member = require('../models/member');

var _member2 = _interopRequireDefault(_member);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const router = _express2.default.Router();

router.get('/', (req, res) => {
  const filters = {};

  _member2.default.find(filters, (err, members) => {
    console.log(members);
    res.json(members);
  });
});

router.post('/', (req, res) => {
  console.log('init save member');
  const params = req.body;
  const response = {};

  // get avatar
  (0, _profileImage2.default)(params.email, params.github).then(avatarUrl => {
    console.log('avatar obtained');
    params.avatarUrl = avatarUrl;
    console.log(params);

    // save member
    const newMember = new _member2.default(params);
    newMember.save().then(data => {
      response.status = 'OK';
      response.message = data;
      res.json(response);
    }).catch(err => {
      response.status = 'ERROR';
      response.message = err;
      res.json(response);
    });
  }).catch(err => {
    response.status = 'ERROR';
    response.message = err;
    console.log(err);
    res.json(response);
  });
});

module.exports = router;