const bcrypt = require("bcryptjs");

exports.seed = function(knex) {
  
  return knex('users').insert([

    { username: "boo", password: bcrypt.hashSync("who")},
    { username: "hola", password: bcrypt.hashSync("amigo")},
    { username: "who", password: bcrypt.hashSync("boo")},

  ]);
};