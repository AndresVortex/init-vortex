import Joi  from 'joi' ;

const id = Joi.number().integer()
const name = Joi.string();
const description = Joi.string();




export const createRoleSchema = Joi.object({

  name: name.required(),
  description

})

export const updateRoleSchema = Joi.object({

  name,
  description

})

export const getRoleSchema = Joi.object({

  id: id.required()

})


