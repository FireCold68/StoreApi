import Sequelize from 'sequelize';

const sequelize = new Sequelize(
    'storedb', //db Name
    'root', // userName
    'root', // password
    {
        dialect: 'mysql',
        host: 'localhost'
    }

);

export default sequelize;