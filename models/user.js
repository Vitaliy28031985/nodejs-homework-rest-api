const bcrypt = require('bcryptjs');
const Joi = require('joi');
const {Schema, model} = require('mongoose');
// eslint-disable-next-line no-useless-escape
const emailRegexp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

const userSchema = Schema(
   {
      name: {
         type: String,
         required: [true, 'name for user'],
       },
      email: {
        type: String,
        required: [true, 'Email is required'],
        unique: true,
      },
      password: {
        type: String,
        required: [true, 'Set password for user'],
      },

      token: {
        type: String,
        default: null
      },
        verify: {
          type: Boolean,
          default: false,
        },
        verificationToken: {
          type: String,
          required: [true, 'Verify token is required'],
        },
      
    }, {versionKey: false, timestamps: true});

    const resendEmailSchema = (req, res, next) => {
      const schema = Joi.object({
      email: Joi.string().pattern(emailRegexp).required(),  
    });
    
    const validationResult = schema.validate(req.body);
    
    if (validationResult.error) {
      return res.status(400).json({
        message: validationResult.error.details[0].message,
      });
    }
    
    next();
    };


    userSchema.methods.setPassword = function(password) {
      this.password = bcrypt.hashSync(password, bcrypt.genSaltSync(10));
      }
  
      userSchema.methods.coparePassword = function (password) {
        return bcrypt.compareSync(password, this.password);
      }


    const User = model("users", userSchema);

    module.exports = {
      User,
      resendEmailSchema
   }


