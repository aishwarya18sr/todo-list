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
      Users.belongsToMany(Lists, {
        through: UsersLists,
        foreignKey: 'listId',
        onDelete: 'cascade',
      });
      Lists.belongsToMany(Users, {
        through: UsersLists,
        foreignKey: 'userId',
        onDelete: 'cascade',
      });
    }
  }
  UsersLists.init({
    // userId: {
    //   type: DataTypes.INTEGER,
    //   field: 'userId',
    // },
    // listId: {
    //   type: DataTypes.INTEGER,
    //   field: 'listId',
    // },
  }, {
    sequelize,
    modelName: 'UsersLists',
  });
  return UsersLists;
};
