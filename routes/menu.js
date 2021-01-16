const express = require('express');
const Joi = require('joi');
const menuSchema = require('../models/menu_model');
const checkauth = require('../middleware/validation');

const router = express.Router();

/* GET home page. */
router.get('/', (req, res) => {
  res.render('index', { title: 'Expresssssss' });
});

router.post('/addmenu', checkauth, async (req, res) => {
  const payload = Joi.object({
    id_posisi: Joi.string().required(),
    id_parent: Joi.string().required(),
    nama_menu: Joi.date().required(),
    punya_sub: Joi.string().required(),
    link: Joi.string().required(),
    status_aktif: Joi.string().required(),
  });
  const schema = {
    id_posisi: req.body.id_posisi,
    id_parent: req.body.id_parent,
    nama_menu: req.body.nama_menu,
    punya_sub: req.body.punya_sub,
    link: req.body.link,
    status_aktif: req.body.status_aktif,
    urutan: req.body.urutan,
  };

  Joi.validate(schema, payload, () => {
    menuSchema.create({
      id_posisi: req.body.id_posisi,
      id_parent: req.body.id_parent,
      nama_menu: req.body.nama_menu,
      punya_sub: req.body.punya_sub,
      link: req.body.link,
      status_aktif: req.body.status_aktif,
      urutan: req.body.urutan,
    }).then((response) => {
      res.status(201).json({
        status: 200,
        messages: 'Menu berhasil ditambahkan',
        data: response,
      });
    }).catch((e) => {
      res.status(422).json({
        error: e.message,
      });
    });
  });
});

router.post('/getmenu', checkauth, (req, res) => {
  menuSchema.sequelize.query('SELECT `menu`.*, `posisi`.`nama_web` FROM `menu` '
    + 'JOIN `posisi` ON `menu`.`id_posisi` = `posisi`.`id_posisi`').then((response) => {
    res.status(200).json(response);
  }).catch((e) => {
    res.status(500).json(e);
  });
});

router.post('/getparentmenu', checkauth, (req, res) => {
  menuSchema.sequelize.query('SELECT id_menu,nama_menu FROM menu').then((response) => {
    res.status(200).json(response);
  }).catch((e) => {
    res.status(500).json(e);
  });
});

router.post('/getposisi', checkauth, (req, res) => {
  menuSchema.sequelize.query('SELECT * FROM posisi').then((response) => {
    res.status(200).json(response);
  }).catch((e) => {
    res.status(500).json(e);
  });
});

router.post('/getmenubyid', checkauth, (req, res) => {
  menuSchema.findAndCountAll({
    where: {
      id_menu: req.body.id_menu,
    },
  })
    .then((data) => {
      if (data.length < 1) {
        res.status(404).json({
          message: 'Not Found',
        });
      } else {
        res.status(200).json(data);
      }
      // });x
    })
    .catch((err) => {
      res.status(500).json({
        error: err,
        status: 500,
      });
    });
});

router.post('/deletemenu', checkauth, async (req, res) => {
  const validate = Joi.object().keys({
    id_menu: Joi.number().required(),
  });

  const payload = {
    id_menu: req.body.id_menu,
  };

  Joi.validate(payload, validate, (error) => {
    menuSchema.destroy({
      where: {
        id_menu: req.body.id_menu,
      },
    })
      .then(() => {
        res.status(200).json(
          {
            status: 200,
            message: 'Delete Succesfully',
          },
        );
      });
    if (error) {
      res.status(400).json({
        status: 'Required',
        messages: error.message,
      });
    }
  });
});

router.post('/updatemenu', checkauth, (req, res) => {
  const validate = Joi.object().keys({
    id_posisi: Joi.string().required(),
    id_parent: Joi.string().required(),
    nama_menu: Joi.string().required(),
    punya_sub: Joi.string().required(),
    status_aktif: Joi.string().required(),
    urutan: Joi.string().required(),
  });

  const payload = {
    id_posisi: req.body.id_posisi,
    id_parent: req.body.id_parent,
    nama_menu: req.body.nama_menu,
    punya_sub: req.body.punya_sub,
    status_aktif: req.body.status_aktif,
    urutan: req.body.urutan,
  };

  Joi.validate(payload, validate, () => {
    menuSchema.update({
      id_posisi: req.body.id_posisi,
      id_parent: req.body.id_parent,
      nama_menu: req.body.nama_menu,
      link: req.body.link,
      punya_sub: req.body.punya_sub,
      status_aktif: req.body.status_aktif,
      urutan: req.body.urutan,
    },
    {
      where: {
        id_menu: req.body.id_menu,
      },
    })
      .then(() => {
        res.status(200).json({
          message: 'Update Succesfully',
          status: 200,
        });
      }).catch((e) => {
        res.status(500).json({
          status: 500,
          messages: e.message,
        });
      });
  });
});

module.exports = router;
