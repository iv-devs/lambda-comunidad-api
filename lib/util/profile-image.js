'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _gravatar = require('gravatar');

var _gravatar2 = _interopRequireDefault(_gravatar);

var _request = require('request');

var _request2 = _interopRequireDefault(_request);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const apiGithub = 'https://api.github.com/users';

const getProfileImage = (email, githubUser) => new Promise((resolve, reject) => {
  console.log('trying get profiles images');
  let avatarUrl = '';
  const options = {
    url: `${apiGithub}/${githubUser}`,
    headers: {
      'User-Agent': 'request'
    }
  };

  if (githubUser) {
    (0, _request2.default)(options, (error, response, body) => {
      if (error) {
        reject(error);
      }

      avatarUrl = JSON.parse(body).avatar_url;
      if (avatarUrl === '') {
        avatarUrl = _gravatar2.default.url(email);
      }

      resolve(avatarUrl);
    });
  } else {
    avatarUrl = _gravatar2.default.url(email);
    resolve(avatarUrl);
  }
});
exports.default = getProfileImage;