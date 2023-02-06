const { Model, DataTypes, Sequelize } = require("sequelize");
const { LANGUAGE_TABLE } = require("./language-model");

const FRAMEWORK_TABLE = "framework";

const FrameworkSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  languageId: {
    allowNull: false,
    type: DataTypes.INTEGER,
    field: "language_id",
    references:{
      model: LANGUAGE_TABLE,
      key: 'id'
    },
    onDelete: 'SET NULL',
    onUpdate: 'CASCADE'
  },
  name: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  version: {
    allowNull: true,
    type: DataTypes.STRING
  },
  uriImg: {
    allowNull: true,
    type: DataTypes.STRING,
    field: "uri_img",
  },
  description: {
    allowNull: true,
    type: DataTypes.STRING,
  },
  createdAt: {
    allowNull: true,
    type: DataTypes.DATE,
    defaultValue: Sequelize.NOW,
    field: "created_at",
  },
  updatedAt: {
    allowNull: true,
    type: DataTypes.DATE,
    defaultValue: Sequelize.NOW,
    field: "updated_at",
  }
};

class Framework extends Model {
  static associate(models) {
    this.belongsTo(models.Language, { as: "language" });
    this.hasMany(models.Project,{
      as: 'project',
      foreignKey: 'frameworkId'
    });
  }
  static config(sequelize) {
    return {
      sequelize,
      tableName: FRAMEWORK_TABLE,
      modelName: "Framework",
      timastamps: false,
    };
  }
}

module.exports = {
  FRAMEWORK_TABLE,
  FrameworkSchema,
  Framework,
};
