import Joi  from 'joi' ;


const id = Joi.number().integer();
const name = Joi.string();
const lastName = Joi.string();
const dateBirth = Joi.date();
const email = Joi.string().email();
const password = Joi.string().min(8);
const role = Joi.string().min(5);


export const createUserSchema = Joi.object({
  name: name.required(),
  lastName: lastName.required(),
  dateBirth,
  email: email.required(),
  password: password.required(),
  role: role.required(),
})

export const updateUserSchema = Joi.object({
  name,
  lastName,
  dateBirth,
  email,
  password,
  role,
})
export const getUserSchema = Joi.object({
  id: id.required(),
})




