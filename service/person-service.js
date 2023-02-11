const boom = require('@hapi/boom');
const { models }= require('../libs/sequelize');

class PersonService{

  // method for created Person
  async create(data){
    const newPerson = await models.Person.create(data);
    return newPerson;
  }

  // method for returned all items of Person
  async findAll(){
    const rta = await models.Person.findAll({
      include:[{
        association: 'project',
        include:[{
          association: 'language',
          include: 'framework'
        }]
      }]
    });
    return rta;
  }

  // method for returned one item by id of Person
  async findOne(id){
    const person = await models.Person.findByPk(id,{
      include:['project',{
        association: 'project',
        include:['language',{
          association: 'language',
          include: 'framework'
        }]
      }]
    });
    if(!person){
      throw boom.notFound('person not found');
    }
    return person;
  }

  // method for updated one Person by id
  async update(id, change){
    const person = await this.findOne(id);
    const rta = await person.update(change);
    return rta;
  }

  // method for deleted Person by id
  async delete(id){
    const person = await this.findOne(id);
    await person.destroy();
    return { id };
  }

}

module.exports = PersonService;
