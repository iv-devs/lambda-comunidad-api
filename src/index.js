import express from 'express';
import bodyParser from 'body-parser';
import firebase from 'firebase';

import { configFirebase } from './config';
import getProfileImage from './util/profile-image';

const initializeBD = () => {
  firebase.initializeApp(configFirebase);
  const db = firebase.database();
  return db.ref('comunidad');
};

const db = initializeBD();
const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.post('/save-member', (req, res) => {
  const users = db.child('users');
  const params = req.body;

  getProfileImage(params.email, params.github).then((avatarUrl) => {
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
      res.json(response);
    });
  });
});

module.exports = app;
