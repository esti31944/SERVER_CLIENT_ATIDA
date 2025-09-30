// userModel.js

const mongoose = require("mongoose");
const Joi = require("joi");
const jwt = require("jsonwebtoken")
const { config } = require("../config/secret")


const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    date_created: {
        type: Date, default: Date.now()
    },
    role: {
        type: String, default: "user"
    }
});

// מייצר/מייצא מודל שבנוי מסכמה ושם קולקשן
exports.UserModel = mongoose.model("users", userSchema);

// exports.createToken = (user_id) => {
exports.createToken = (_id,role) => {
    // מייצר טוקן, שם תכולה - "מטען שלו שזה איידי של המשתמש"
    // מילה סודית שרק לנו מותר להכיר אותה
    // ותוקף
    // let token = jwt.sign({ _id: user_id }, config.tokenSecret, { expiresIn: "60mins" })
    let token = jwt.sign({ _id,role }, config.tokenSecret, { expiresIn: "60mins" })
    return token;
}

exports.validUser = (_reqBody) => {
    let joiSchema = Joi.object({
        name: Joi.string().min(2).max(99).required(),
        email: Joi.string().min(2).max(99).email().required(),
        password: Joi.string().min(3).max(99).required()
    })
    return joiSchema.validate(_reqBody);
}

exports.validLogin = (_reqBody) => {
    let joiSchema = Joi.object({
        email: Joi.string().min(2).max(99).email().required(),
        password: Joi.string().min(3).max(99).required()
    })
    return joiSchema.validate(_reqBody);
}