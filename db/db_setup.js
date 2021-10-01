const knex = require("knex");
const knexfile = require("./knexfile");
const {Model}= require("objection");

function SetupDb(){
    const db = knex(knexfile.development);
    Model.knex(db);
};

module.exports = SetupDb;