const Sequelize = require('sequelize');
const sequelize = require('../lib/connection');

const msuser = sequelize.define('msuser', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: Sequelize.STRING,
  },
  email: {
    type: Sequelize.STRING,
    allowNull: true,
    email: true,
  },
  image: {
    type: Sequelize.BLOB('long'),
    allowNull: true,
  },
  password: {
    type: Sequelize.STRING,
    allowNull: true,
    unique: true,
  },
  role_id: {
    type: Sequelize.INTEGER,
    defaultValue: 0,
  },
  is_active: {
    type: Sequelize.INTEGER,
    defaultValue: 0,
  },
  createdAt: Sequelize.DATE,
  updatedAt: Sequelize.DATE,
}, {
  freezeTableName: true,
});

// force: true will drop the table if it already exists
msuser.sync({ force: false }).then(() => {
//     // Table created
//     return msuser.create({
//         name: 'admin',
//         password: 'admin',
//         email : 'imamsatrianta@gmail.com'
//     });
});
module.exports = msuser;
