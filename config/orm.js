const connection = require('./connection');

connection.connect(err => {
    if (err) throw err;
    console.log(`id: ${connection.threadId}`);
});

const orm = {

    selectAll: (callback) => {
        connection.query ("SELECT * FROM burgers", (err, res) => {
             if (err) throw err;
            callback(res);
        })
    },
    insertOne: (name, callback) => {
        connection.query ("INSERT INTO burgers (burger_name, devoured) VALUES ( ?, 0 )", [name], (err, res) => {
           callback(res);
       })

    },

    updateOne: (id, devoured, callback) => {
        connection.query ( "UPDATE burgers SET devoured = ? WHERE id = ?", [devoured, id], (err, res) => {
            if (err) throw err;
            callback (res);
        } );
    }


}

module.exports = orm;