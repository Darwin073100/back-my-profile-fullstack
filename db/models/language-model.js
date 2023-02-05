//@ts-check
const { Model, DataTypes, Sequelize } = require("sequelize");

const LANGUAGE_TABLE = "language";

const LanguageSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  name: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  uriImg: {
    allowNull: false,
    type: DataTypes.STRING,
  },
};

class Language extends Model{
  static associate(models){
    this.hasMany(models.Project,{
      as: 'Project',
      foreignKey: 'languageId'
    });
    this.hasMany(models.Framework,{
      as: 'Framework',
      foreignKey: 'languageId'
    });
  }
  static config(sequelize){
    return{
      sequelize,
      tableName: LANGUAGE_TABLE,
      modelName: 'Language',
      timestamps: false
    }
  }
}

module.exports = {
  LANGUAGE_TABLE,
  LanguageSchema,
  Language
};
