import express from 'express';
import getProfileImage from '../util/profile-image';
import Member from '../models/member';

const router = express.Router();

router.get('/', (req, res) => {
  const filters = {};

  Member.find(filters, (err, members) => {
    console.log(members);
    res.json(members);
  });
});

router.post('/', (req, res) => {
  console.log('init save member');
  const params = req.body;
  const response = {};

  // get avatar
  getProfileImage(params.email, params.github)
  .then((avatarUrl) => {
    console.log('avatar obtained');
    params.avatarUrl = avatarUrl;
    console.log(params);

    // save member
    const newMember = new Member(params);
    newMember.save()
    .then((data) => {
      response.status = 'OK';
      response.message = data;
      res.json(response);
    })
    .catch((err) => {
      response.status = 'ERROR';
      response.message = err;
      res.json(response);
    });
  })
  .catch((err) => {
    response.status = 'ERROR';
    response.message = err;
    console.log(err);
    res.json(response);
  });
});

module.exports = router;
