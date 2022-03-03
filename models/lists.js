const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Lists extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Tasks }) {
      // define association here
      Lists.hasMany(Tasks);
    }
  }
  Lists.init({
    listName: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Lists',
  });
  return Lists;
};
