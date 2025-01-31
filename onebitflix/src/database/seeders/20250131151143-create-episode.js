'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('episodes', [
      {
        name: 'Video de teste',
        synopsis: 'Video de teste',
        order: 1,
        video_url: 'videos/teste.mp4',
        seconds_long: 1620,
        course_id: 100,
        created_at: new Date(),
        updated_at: new Date()
      },
    ])
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('episodes', null, { where: { name: 'Video de teste@email.com' } })
  }
};
