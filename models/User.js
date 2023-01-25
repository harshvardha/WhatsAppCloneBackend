import { Schema, model } from "mongoose";

const userSchema = new Schema({
    iss: {
        type: String
    },
    nbf: {
        type: Number
    },
    sub: {
        type: String,
        required: true
    },
    email: {
        type: String
    },
    enail_verified: {
        type: Boolean
    },
    azp: {
        type: String
    },
    name: {
        type: String,
        required: true
    },
    picture: {
        type: String,
        required: true
    },
    given_name: {
        type: String
    },
    family_name: {
        type: String
    },
    iat: {
        type: Number
    },
    exp: {
        type: Number
    },
    jti: {
        type: String
    }
});

export default model('Users', userSchema);