import gravatar from 'gravatar';
import request from 'request';

const apiGithub = 'https://api.github.com/users';

const getProfileImage = (email, githubUser) => new Promise((resolve, reject) => {
  console.log('trying get profiles images');
  let avatarUrl = '';
  const options = {
    url: `${apiGithub}/${githubUser}`,
    headers: {
      'User-Agent': 'request',
    },
  };

  if (githubUser) {
    request(options, (error, response, body) => {
      if (error) {
        reject(error);
      }

      avatarUrl = JSON.parse(body).avatar_url;
    });
  }
  if (avatarUrl === '') {
    avatarUrl = gravatar.url(email);
  }

  resolve(avatarUrl);
});
export default getProfileImage;
