const boom = require('@hapi/boom');
const { models }= require('../libs/sequelize');

class ProjectService{

  // method for created Project
  async create(data){
    const newProject = await models.Project.create(data);
    return newProject;
  }

  // method for returned all items of Project
  async findAll(){
    const rta = await models.Project.findAll();
    return rta;
  }

  // method for returned one item by id of Project
  async findOne(id){
    const project = await models.Project.findByPk(id,{
      include:['person',{
        association: 'language',
        include:'framework'
      }]
    });
    if(!project){
      throw boom.notFound('project not found');
    }
    return project;
  }

  // method for updated one Project by id
  async update(id, change){
    const project = await this.findOne(id);
    const rta = await project.update(change);
    return rta;
  }

  // method for deleted Project by id
  async delete(id){
    const project = await this.findOne(id);
    await project.destroy();
    return { id };
  }

}

module.exports = ProjectService;
