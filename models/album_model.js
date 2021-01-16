const Sequelize = require('sequelize');
const sequelize = require('../lib/connection');

const albummodel = sequelize.define('album', {
  id_album: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  judul_album: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  album_seo: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  keterangan: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  gambar: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  aktif: {
    type: Sequelize.INTEGER,
    allowNull: true,
  },
  hits_album: {
    type: Sequelize.INTEGER,
    allowNull: true,
  },
  tgl_posting: {
    type: Sequelize.INTEGER,
    allowNull: true,
  },
  jam: {
    type: Sequelize.INTEGER,
    allowNull: true,
  },
  hari: {
    type: Sequelize.INTEGER,
    allowNull: true,
  },
  username: {
    type: Sequelize.INTEGER,
    allowNull: true,
  },
  createdAt: Sequelize.DATE,
  updatedAt: Sequelize.DATE,
}, {
  freezeTableName: true,
});

// force: true will drop the table if it already exists
albummodel.sync({ force: false }).then(() => {
// Table created
// return mspaten.create({
//     name: 'admin',
//     password: 'admin',
//     email : 'imamsatrianta@gmail.com'
// });
});
module.exports = albummodel;
