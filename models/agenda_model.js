const Sequelize = require('sequelize');
const sequelize = require('../lib/connection');

const agendamodel = sequelize.define('agenda', {
  id_agenda: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  tanggal_awal: {
    type: Sequelize.DATE,
  },
  tanggal_akhir: {
    type: Sequelize.DATE,
  },
  nama_agenda: {
    type: Sequelize.STRING,
  },
  keterangan: {
    type: Sequelize.STRING,
  },
  foto: {
    type: Sequelize.INTEGER,
    allowNull: true,
  },
  createdAt: Sequelize.DATE,
  updatedAt: Sequelize.DATE,
}, {
  freezeTableName: true,
});

// force: true will drop the table if it already exists
agendamodel.sync({ force: false }).then(() => {
// Table created
// return mspaten.create({
//     name: 'admin',
//     password: 'admin',
//     email : 'imamsatrianta@gmail.com'
// });
});
module.exports = agendamodel;
