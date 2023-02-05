const boom = require('@hapi/boom');
const { models }= require('../libs/sequelize');

class FrameworkService{

  // method for created Framework
  async create(data){
    const newFramework = await models.Framework.create(data);
    return newFramework;
  }

  // method for returned all items of Framework
  async findAll(){
    const rta = await models.Framework.findAll();
    return rta;
  }

  // method for returned one item by id of Framework
  async findOne(id){
    const framework = await models.Framework.findByPk(id,{
      include:['language']
    });
    if(!framework){
      throw boom.notFound('framework not found');
    }
    return framework;
  }

  // method for updated one Framework by id
  async update(id, change){
    const framework = await this.findOne(id);
    const rta = await framework.update(change);
    return rta;
  }

  // method for deleted Framework by id
  async delete(id){
    const framework = await this.findOne(id);
    await framework.destroy();
    return { id };
  }

}

module.exports = FrameworkService;
