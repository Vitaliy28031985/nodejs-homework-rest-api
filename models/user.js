const {Schema, model} = require('mongoose');
const bcrypt = require('bcryptjs');
// const Joi = require('joi');

const userSchema = Schema(
   {
      password: {
        type: String,
        required: [true, 'Set password for user'],
      },
      email: {
        type: String,
        required: [true, 'Email is required'],
        unique: true,
      },
      subscription: {
        type: String,
        enum: ["starter", "pro", "business"],
        default: "starter"
      },
      token: String
    }, {versionKey: false, timestamps: true});

    userSchema.methods.setPassword = function(password) {
    this.password = bcrypt.hashSync(password, bcrypt.genSaltSync(10));
    }

    userSchema.methods.coparePassword = function(password) {
      return bcrypt.compareSync(password, this.password);
    }

    const User = model("users", userSchema);

    module.exports = {
      User,
    }