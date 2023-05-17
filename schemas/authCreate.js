import joi from "joi";

export const authCreateSignUp = joi.object({
  email: joi.string()
    .email({ minDomainSegments: 2 })
    .required()
    .messages({
        'any.required': 'Email required',
        'string.empty': 'Email required',
        'string.email': 'Must be a valid email'
    }),
  password: joi.string()
    .min(4)
    .max(25)
    .required()
    .messages({
        'any.required': 'Password required',
        'string.empty': 'Password required',
        'string.max': 'Password too large'
    }),
  photo: joi.string()
    .uri()
    .messages({
        'any.required': 'Photo required',
        'string.empty': 'Photo required'
    }),
});
export const authCreateSignIn = joi.object({
  email: joi.string()
    .email({ minDomainSegments: 2 })
    .required()
    .messages({
      'any.required': 'Email required',
      'string.empty': 'Email required',
      'string.email': 'Must be a valid email'
    }),
  password: joi.string()
    .min(4)
    .max(25)
    .required()
    .messages({
      'any.required': 'Password required',
      'string.empty': 'Password required',
      'string.max': 'Password too large'
    }),
});
