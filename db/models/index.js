const { LanguageSchema, Language } = require("./language-model");
const { PersonSchema, Person } = require("./person-model");
const { FrameworkSchema, Framework } = require("./framework-model");
const { ProjectSchema, Project } = require("./project-model");

function setupModels(sequelize){
  Language.init(LanguageSchema, Language.config(sequelize));
  Person.init(PersonSchema, Person.config(sequelize));
  Framework.init(FrameworkSchema, Framework.config(sequelize));
  Project.init(ProjectSchema, Project.config(sequelize));

  Language.associate(sequelize.models);
  Person.associate(sequelize.models);
  Framework.associate(sequelize.models);
  Project.associate(sequelize.models);
};

module.exports = setupModels;
