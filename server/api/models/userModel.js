var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
    firstName: {
        type: String,
        required: "Something sassy that sorting hat would say"
    },
    lastName: {
        type: String,
        required: "Something sassy that sorting hat would say"
    },
    gender: {
        type: [{
            type: String,
            enum: ["witch","wizard"]
        }],
        required: "Something sassy that sorting hat would say"
    },
    house: {
        type: [{
                type: String,
                enum: ["unsorted","Gryffindor","Hufflepuff","Ravenclaw","Slytherin"]
        }],
        default: ["unsorted"]
    },
    role: {
        type: String,
        default: "student"
    },
    school: {
        type: String,
        default: "Hogwarts School of Witchcraft and Wizardry"
    },
    ministryOfMagic: {
        type: Boolean,
        default: false
    },
    orderOfThePhoenix: {
        type: Boolean,
        default: false
    },
    dumbledoresArmy: {
        type: Boolean,
        default: false
    },
    deathEater: {
        type: Boolean,
        default: false
    },
    bloodStatus: {
        type: [{
                type: String,
                enum: ["half-blood","pure-blood","unknown"]
        }],
        required: "What ?? you're not a muggle are you?"
    },
    species: {
        type: String,
        default: "human"
    },
    wand: {
        type: String,
        default: ""
    },
    patronus: {
        type: String,
        default: ""
    },
    boggart: {
        type: String,
        default: ""
    }
});

module.exports = mongoose.model('User', UserSchema, 'users');