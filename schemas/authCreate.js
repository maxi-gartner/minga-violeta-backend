import joi from "joi";

export const authCreateSignUp = joi.object({
  email: joi.string().email({ minDomainSegments: 2 }).required(),
  password: joi.string().min(8).max(25).required(),
  photo: joi.string().uri(),
});
export const authCreateSignIn = joi.object({
  email: joi.string().email({ minDomainSegments: 2 }).required(),
  password: joi.string().min(8).max(25).required(),
});
