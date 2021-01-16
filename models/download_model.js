const Sequelize = require('sequelize');
const sequelize = require('../lib/connection');

const downloadmodel = sequelize.define('download', {
  id_download: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  judul: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  nama_file: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  publisher: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  penulis: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  tgl_posting: {
    type: Sequelize.DATE,
    allowNull: true,
  },
  hits: {
    type: Sequelize.INTEGER,
    allowNull: true,
  },
  createdAt: Sequelize.DATE,
  updatedAt: Sequelize.DATE,
}, { freezeTableName: true });

// force: true will drop the table if it already exists
downloadmodel.sync({ force: false }).then(() => {
// Table created
// return mspaten.create({
//     name: 'admin',
//     password: 'admin',
//     email : 'imamsatrianta@gmail.com'
// });
});
module.exports = downloadmodel;
