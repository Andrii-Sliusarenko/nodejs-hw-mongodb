import Joi from 'joi';
import { mailFormat } from '../constants/index.js';
export const registerUserSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().pattern(mailFormat).required(),
  password: Joi.string().min(6).required(),
});
export const loginUserSchema = Joi.object({
  email: Joi.string().pattern(mailFormat).required(),
  password: Joi.string().min(6).required(),
});

export const requestResetEmailSchema = Joi.object({
  email: Joi.string().email().required(),
});

export const resetPasswordSchema = Joi.object({
  password: Joi.string().required(),
  token: Joi.string().required(),
});
