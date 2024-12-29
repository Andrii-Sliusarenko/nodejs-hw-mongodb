import Joi from 'joi';
import { mailFormat } from '../constants/index.js';
export const registerUserSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().pattern(mailFormat).required(),
  password: Joi.string().required(),
});
