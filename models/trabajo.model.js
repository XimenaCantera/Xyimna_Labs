//todo - BASE DE DATOS
const db = require('../util/database');

module.exports = class Trabajador {
    //todo - Nuevo objeto para definir propiedades del modelo
    constructor(Nombre, Correo, Local) {
        this.Nombre = Nombre;
        this.Correo = Correo;
        this.Local = Local;
    }

    //todo - Guardar nuevo objeto
    save() {
        return db.execute(
            `INSERT INTO trabajador (nombre, correo, local) VALUES (?, ?, ?)`,
            [this.Nombre, this.Correo, this.Local]
        );
    }
    
    //todo - Método para recuperar todos los trabajadores de la base de datos
    static fetchAll() {
        return db.execute('SELECT * FROM trabajador');
    }


    static fetch(id){
        if(id){
            return this.fetchOne(id);
        } else {
            return this.fetchAll();
        }
    }

    //todo - Método para recuperar un trabajador por su ID
    static fetchOne(id) {
        return db.execute('SELECT * FROM trabajador WHERE id = ?', [id]);
    }
};