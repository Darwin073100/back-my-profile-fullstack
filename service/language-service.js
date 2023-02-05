const boom = require('@hapi/boom');
const { models }= require('../libs/sequelize');

class LanguageService{

  // method for created Language
  async create(data){
    const newLanguage = await models.Language.create(data);
    return newLanguage;
  }

  // method for returned all items of Language
  async findAll(){
    const rta = await models.Language.findAll();
    return rta;
  }

  // method for returned one item by id of Language
  async findOne(id){
    const language = await models.Language.findByPk(id,{
      include:['framework']
    });
    if(!language){
      throw boom.notFound('language not found');
    }
    return language;
  }

  // method for updated one Language by id
  async update(id, change){
    const language = await this.findOne(id);
    const rta = await language.update(change);
    return rta;
  }

  // method for deleted Language by id
  async delete(id){
    const language = await this.findOne(id);
    await language.destroy();
    return { id };
  }

}

module.exports = LanguageService;
