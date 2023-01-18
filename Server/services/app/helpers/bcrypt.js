const bcrypt = require('bcrypt')

class Password {
    static hashPass(pass){
        return bcrypt.hashSync(pass, 12)
    }

    static comparePass(pass, hashed){
        return bcrypt.compareSync(pass, hashed)
    }
}

module.exports = Password