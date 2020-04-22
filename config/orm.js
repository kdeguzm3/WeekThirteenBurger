const connection = require('./connection');

connection.connect(err => {
    if (err) throw err;
    console.log(`id: ${connection.threadId}`);
});

const orm = {

    selectAll: () => {
        connection.query ("SELECT * FROM burgers", (err, res) => {
             if (err) throw err;
            console.table(res);
        })
    },
    insertOne: (name) => {
        connection.query ("INSERT INTO burgers (burger_name, devoured) VALUES ( ?, 0 )", [name], (err, res) => {
            if (err) throw err;
           console.table(res.affectedRows + "entries created.");
       })

    },

    updateOne: () => {

    }


}

orm.selectAll();

module.exports = orm;