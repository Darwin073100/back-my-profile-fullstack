"use strict";

const {
  FRAMEWORK_TABLE,
  FrameworkSchema,
} = require("../models/framework-model");
const { LANGUAGE_TABLE, LanguageSchema } = require("../models/language-model");
const { PERSON_TABLE, PersonSchema } = require("../models/person-model");
const { PROJECT_TABLE, ProjectSchema } = require("../models/project-model");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    await queryInterface.createTable(PERSON_TABLE, PersonSchema);
    await queryInterface.createTable(LANGUAGE_TABLE, LanguageSchema);
    await queryInterface.createTable(FRAMEWORK_TABLE, FrameworkSchema);
    await queryInterface.createTable(PROJECT_TABLE, ProjectSchema);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.dropTable(FRAMEWORK_TABLE);
    await queryInterface.dropTable(PROJECT_TABLE);
    await queryInterface.dropTable(PERSON_TABLE);
    await queryInterface.dropTable(LANGUAGE_TABLE);
  },
};
