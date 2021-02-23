const constructores = new Object({
    constructor_Humano(){
        this.name;
        this.maquina;
        return this;
    }
});
const data = {
    Humanos:{
        name : "Willmer",
        maquina : "Cortana"
    }
}
const constructor_Humano = constructores.constructor_Humano.bind(data.Humanos);
const Humano = new Object();
Humano.__proto__.constructor = constructor_Humano();
const Metodos = Object.assign(Humano);
Metodos.saludar = ()=>{
    return `Hola ${Humano.__proto__.constructor.name} como estas te saluda ${Humano.__proto__.constructor.maquina}`;
};
Object.freeze(Humano);
console.log(Metodos.saludar());



// const constructores = ()=>{
//     this.name;
//     this.maquina;
// };

// const data = {
//     name : "Willmer",
//     maquina : "Cortana"
// };


// constructores.call(data);
// let obj = new constructores();
// console.log(obj);


// const Humanos = Object.create(obj);
// Humanos.saludar = ()=>{
//     return `Hola ${this.name} como estas te saluda ${this.maquina}`;
// };

// console.log(Humanos);


// call
// aplly
// bing



// const informacion = Object.create(Humanos);
// informacion.name = "Willmer";
// informacion.maquina = "Cortana";


// console.log(informacion);
// console.log(informacion.saludar());
