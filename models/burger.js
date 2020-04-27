const { selectAll, insertOne, updateOne } = require ('../config/orm');

let burger = {
    all: function(cb) {
        selectAll(function(res) {
          cb(res);
        });
      },

      create: function(burgerName, devoured, cb) {
        insertOne(burgerName, devoured, function(res) {
          cb(res);
        });
      },
      update: function(id, devoured, cb) {
        updateOne(id, devoured, function(res) {
          cb(res);
        });
    }
};

module.exports = burger;