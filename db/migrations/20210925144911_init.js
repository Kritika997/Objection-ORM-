const { knexSnakeCaseMappers } = require("objection");

exports.up = function(knex) {
    return knex.schema
    .createTable("channel",(table)=>{
        table.increments()
        table.string("username",255).notNullable();
        table.timestamps(true,true);
    })
    .createTable("user",(table)=>{
        table.increments();
        table.string("name",255).notNullable();
        table.string("email",255).notNullable().unique();
        table.integer("channelId",255).references("id").inTable("channel");
        table.timestamps(true,true);
    })
    .createTable("video",(table)=>{
        table.increments();
        table.string("title",255).notNullable();
        table.integer("channelId",255).references("id").inTable("channel");
        table.timestamps(true,true);
    });
  
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("channel").dropTableIfExists("user").dropTableIfExists("video")
};
