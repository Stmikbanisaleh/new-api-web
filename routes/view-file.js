require('dotenv').config();

const express = require('express');

const checkauth = require('../middleware/validation');

const router = express.Router();

/* GET users listing. */
router.get('/file/:name', checkauth, async (req, res) => {
  const { name } = req.params;
  const url = `./public/file/${name}`;
  // console.log(url);
  res.download(url); // Set disposition and send it.
});

module.exports = router;
