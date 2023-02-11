//@ts-check
const { Model, DataTypes, Sequelize } = require("sequelize");

const PERSON_TABLE = "person";

const PersonSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  name: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  lastName: {
    allowNull: false,
    type: DataTypes.STRING,
    field: 'last_name'
  },
  email: {
    allowNull: false,
    type: DataTypes.STRING,
    unique: true
  },
  phone: {
    allowNull: true,
    type: DataTypes.STRING,
  },
  address: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  uriImg: {
    allowNull: true,
    type: DataTypes.STRING,
    field: 'uri_img'
  },
  description: {
    allowNull: true,
    type: DataTypes.TEXT,
  },
  linkedin: {
    allowNull: true,
    type: DataTypes.STRING,
  },
};

class Person extends Model{
  static associate(models){
    this.hasMany(models.Project,{
      as: 'project',
      foreignKey: 'personId'
    });
  }
  static config(sequelize){
    return{
      sequelize,
      tableName: PERSON_TABLE,
      modelName: 'Person',
      timestamps: false
    }
  }
}

module.exports = {
  PERSON_TABLE,
  PersonSchema,
  Person
};
