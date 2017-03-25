import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import assert from 'assert';

import { configMongo } from './config';
import members from './routes/member';

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

mongoose.connect(configMongo.databaseURL, (err, db) => {
  assert.equal(err, null);
});

app.use('/member', members);


module.exports = app;
