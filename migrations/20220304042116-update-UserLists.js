module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    await queryInterface.addColumn('UsersLists', 'listId', {
      type: Sequelize.INTEGER,
      references: {
        model: 'Lists',
        key: 'id',
      },
      onDelete: 'cascade',
    });
    await queryInterface.addColumn('UsersLists', 'userId', {
      type: Sequelize.INTEGER,
      references: {
        model: 'Users',
        key: 'id',
      },
      onDelete: 'cascade',
    });
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.removeColumn('Userslists', 'listId');
    await queryInterface.removeColumn('Userslists', 'userId');
  },
};
