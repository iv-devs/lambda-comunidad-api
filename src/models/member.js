import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const memberSchema = new Schema({
  github: String,
  name: String,
  email: String,
  role: String,
  bio: String,
  url: String,
  avatarUrl: String,
  isStaff: Boolean,
  skills: [String],
  badges: [String],
});

module.exports = mongoose.model('member', memberSchema);
