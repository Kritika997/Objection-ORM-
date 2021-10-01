
exports.seed = async function(knex) {
  await knex.raw("TRUNCATE TABLE channel"),
  await knex.raw("TRUNCATE TABLE user"),
  await knex.raw("TRUNCATE TABLE video"),

  await knex('channel').insert([
    {
      id:1,
      username:"channel1",
    },
    {
      id:2,
      username:"channel2",
    },
  ]);

  await knex('user').insert([
    {
      id:1,
      name:"user1",
      email:"user1@gmail.com",
      channelId:1
    },
    {
      id:2,
      name:"user2",
      email:"user2@gmail.com",
      channelId:2
    },
    {
      id:3,
      name:"user3",
      email:"user3@gmail.com",
      channelId:3
    },
  ]);

  return knex("video").insert([
    {
      id:1,
      title:"videoByuser1",
      channelId:3
    },
    {
      id:2,
      title:"videoByuser2",
      channelId:3
    },
    {
      id:3,
      title:"videoByuser3",
      channelId:3
    },
  ]);
};
