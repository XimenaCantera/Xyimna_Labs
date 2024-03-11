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

module.exports = class Trabajador {
    //todo Nuevo objeto para definir propiedades del modelo
    constructor(nombre, area, correo, local){
        this.Nombre = nombre;
        this.Area = area;
        this.Correo = correo;
        this.Local = local;
    }

    //todo Guardar nuevo objeto
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