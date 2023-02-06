const { Model, DataTypes, Sequelize } = require("sequelize");
const { FRAMEWORK_TABLE } = require("./framework-model");
const { LANGUAGE_TABLE } = require("./language-model");
const { PERSON_TABLE } = require("./person-model");

const PROJECT_TABLE = "project";

const ProjectSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  personId: {
    allowNull: false,
    type: DataTypes.INTEGER,
    field: "person_id",
    references: {
      model: PERSON_TABLE,
      key: "id",
    },
    onDelete: "SET NULL",
    onUpdate: "CASCADE",
  },
  languageId: {
    allowNull: true,
    type: DataTypes.INTEGER,
    field: "language_id",
    references: {
      model: LANGUAGE_TABLE,
      key: "id",
    },
    onDelete: "SET NULL",
    onUpdate: "CASCADE",
  },
  frameworkId: {
    allowNull: true,
    type: DataTypes.INTEGER,
    field: "framework_id",
    references: {
      model: FRAMEWORK_TABLE,
      key: "id",
    },
    onDelete: "SET NULL",
    onUpdate: "CASCADE",
  },
  name: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  description: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  uriProject: {
    allowNull: false,
    type: DataTypes.STRING,
    unique: true,
    field: "uri_project",
  },
  createAt: {
    allowNull: true,
    type: DataTypes.DATE,
    defaultValue: Sequelize.NOW,
    field: "create_at",
  },
};

class Project extends Model {
  static associate(models) {
    this.belongsTo(models.Language, { as: "language" });
    this.belongsTo(models.Person, { as: "person" });
    this.belongsTo(models.Framework, {as: "framework"});
  }
  static config(sequelize) {
    return {
      sequelize,
      tableName: PROJECT_TABLE,
      modelName: "Project",
      timestamps: false,
    };
  }
}

module.exports = {
  PROJECT_TABLE,
  ProjectSchema,
  Project,
};
