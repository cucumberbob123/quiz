const sqlite3 = require('sqlite3')
const bcrypt = require('bcrypt')

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
        db.all('insert into users(username, password) values(?,?,?)', username, hash)
    })
}

function verifyUser(username, password){
    const db = new sqlite3.Database('users.db', err => {
        if (err) {
            console.error(err.message)
        }
    })
    const dbPass = db.all('select password from users where username=?', username)
}