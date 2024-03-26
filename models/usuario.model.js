const db = require('../util/database');

module.exports = class Usuario {
    constructor(mi_userNombre, mi_userCorreo, mi_Contra2) {
        this.usuNombre = mi_userNombre;
        this.usuEmail = mi_userCorreo;
        this.usuContra2 = mi_Contra2;
    }
    
    save() {
        return db.execute(
            `INSERT INTO usuario (usuNombre, usuEmail, usuContra2) 
            VALUES (?, ?, ?)`, 
            [this.usuNombre, this.usuEmail, this.usuContra2]);
    }
    
    static fetchOne(usuNombre) {
        return db.execute('Select * from usuario WHERE usuNombre = ?', [usuNombre]);
    }
}