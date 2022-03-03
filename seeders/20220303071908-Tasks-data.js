module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    return queryInterface.bulkInsert('Tasks', [{
      name: 'Rice',
      createdAt: new Date(),
      updatedAt: new Date(),
      list_id: 1,
    },
    {
      name: 'Yoga',
      createdAt: new Date(),
      updatedAt: new Date(),
      list_id: 2,
    },
    ]);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    return queryInterface.bulkDelete('Tasks', null, {});
  },
};
