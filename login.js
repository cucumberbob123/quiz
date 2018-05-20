const sqlite3 = require('sqlite3')
const bcrypt = require('bcrypt')
const knex = require('knex')({
    client: 'sqlite3',
    debug: true,
    connection: {
        filename: 'users.db'
    }
  });

function createUser(username, password) {
    const db = new sqlite3.Database('users.db', (err) => {
        if (err) {
            console.error(err.message);
        }
    })

    //bcrypt.compare(possword, hash, (err, res) => console.log(res))

    bcrypt.hash(password, 4, (err, hash) => {
        if (err) {
            console.error(err)
        }
        db.all('insert into users(username, password) values(?,?)', username, hash)
    })
}

function verifyUser(username, password) {
    console.log('veryifyUser', username)
    if ( !username ) {
        throw('missing username');
    }
    return knex.select('password').from('users').
    where({"username": username})
    .then(rows => {
        console.log(`got rows`, rows);
        if ( !rows.length ) {
            console.log(`no rows for ${username}`);
            return false;
        }
        const hash = rows [0].password;
        console.log(`got password hash ${hash}`);
        return bcrypt.compare(password, hash);
    }).catch(err => {
        console.error(`wtf got error from knex? ${err}`);
    })
}

module.exports.createUser = createUser
module.exports.verifyUser = verifyUser