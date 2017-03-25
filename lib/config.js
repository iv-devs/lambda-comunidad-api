'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
const configMongo = exports.configMongo = {
  databaseURL: process.env.DATABASE_URL || 'mongodb://<dbuser>:<dbpass>@ds141410.mlab.com:41410/comunidad'
};

exports.default = { configMongo: configMongo };