const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class UsersLists extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Lists, Users }) {
      UsersLists.hasOne(Lists, {
        foreignKey: 'listId',
        onDelete: 'cascade',
      });
      UsersLists.hasOne(Users, {
        foreignKey: 'userId',
        onDelete: 'cascade',
      });
      // define association here
    }
  }
  UsersLists.init({
    userId: DataTypes.INTEGER,
    listId: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'UsersLists',
  });
  return UsersLists;
};
