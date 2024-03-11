const trabajadores = [
    {
        Nombre: "Ximena Cantera",
        Area: "Reparación",
        Correo: "xyimna@gmail.com",
        Local: "av.centro cd.48023",
    },
    {
        Nombre: "Yael Cortés",
        Area: "Mantenimiento",
        Correo: "yao@gmail.com",
        Local: "av. boulevard pricnipal cd.48083",
    }
];

module.exports = class Trabaja {
    //todo - Nuevo objeto para definir propiedades del modelo
    constructor(Nombre, Area, Correo, Local){
        this.Nombre = Nombre;
        this.Area = Area;
        this.Correo = Correo;
        this.Local = Local;
    }

    //todo - Guardar nuevo objeto
    save(){
        trabajadores.push({
            Nombre: this.Nombre,
            Area: this.Area,
            Correo: this.Correo,
            Local: this.Local,
        });
    }
    
    static fetchAll(){
        return trabajadores;
    }
}