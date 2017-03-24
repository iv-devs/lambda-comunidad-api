import express from 'express';
import bodyParser from 'body-parser';
import firebase from 'firebase';

import { configFirebase } from './config';
import getProfileImage from './util/profile-image';

const initializeBD = (config) => {
  console.log('called initializeApp');
  console.log(config);
  firebase.initializeApp(config);
  const db = firebase.database();
  return db.ref('comunidad');
};

const db = initializeBD(configFirebase);
const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.post('/save-member', (req, res) => {
  console.log('init save member');
  const users = db.child('users');
  const params = req.body;

  getProfileImage(params.email, params.github)
  .then((avatarUrl) => {
    console.log('avatar obtained');
    params.avatarUrl = avatarUrl;
    users.push(params, (e) => {
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
  })
  .catch((err) => { console.log(err); })
  .then(() => { console.log('finish'); });
});

module.exports = app;
