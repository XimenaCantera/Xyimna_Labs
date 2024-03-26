const db = require('../util/database');

module.exports = class Trabaja {
    constructor(Nombre, Area, Correo, Local, Area_id) {
        this.Nombre = Nombre;
        this.Area = Area;
        this.Correo = Correo;
        this.Local = Local;
        this.Area_id = Area_id;
    }

    save() {
        return db.execute(
            `INSERT INTO trabajadores (Nombre, Area, Correo, Local, Area_id) 
            VALUES (?, ?, ?, ?, ?)`,
            [this.Nombre, this.Area, this.Correo, this.Local, this.Area_id]
        );
    }

    static fetchAll() {
        return db.execute('SELECT * FROM trabajadores');
    }

    static fetch(id) {
        if (id) {
            return this.fetchOne(id);
        } else {
            return this.fetchAll();
        }
    }

    static fetchOne(id) {
        return db.execute('SELECT * from trabajadores WHERE id = ?', [id]);
    }
};
