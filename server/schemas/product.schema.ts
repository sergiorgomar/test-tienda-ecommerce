import Joi from 'joi';

const productSchema = Joi.object({
    name: Joi.string().required(),
    description: Joi.string().required(),
    img_url: Joi.string().required(),
    price: Joi.number().required(),
    height: Joi.number().required(),
    length: Joi.number().required(),
    width: Joi.number().required(),
});

export default productSchema;

