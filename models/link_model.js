const Sequelize = require('sequelize');
const sequelize = require('../lib/connection');

const linkmodel = sequelize.define('link_terkait', {
  id_link: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  kategori: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  nama_link: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  url_web: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  logo: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  createdAt: Sequelize.DATE,
  updatedAt: Sequelize.DATE,
},{
    freezeTableName: true,
});

// force: true will drop the table if it already exists
linkmodel.sync({ force: false }).then(() => {
// Table created
// return mspaten.create({
//     name: 'admin',
//     password: 'admin',
//     email : 'imamsatrianta@gmail.com'
// });
});
module.exports = linkmodel;
