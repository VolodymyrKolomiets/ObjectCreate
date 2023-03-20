//Crear la clase Persona, con propiedades nombre, edad y género, y el método obtDetalles(), que muestra por pantalla las propiedades de la persona.

class Persona {
    constructor(nombre, edad, genero){
        this.nombre = nombre
        this.edad = edad
        this.genero = genero
    }
    obtDetalles(){
        console.log(this.nombre, this.edad, this.genero)
    }
};

let person = new Persona('Vlad', 34, 'hombre');
console.log(person);
person.obtDetalles();
//Crear la clase Estudiante, que hereda de Persona, e incluye las propiedades curso y grupo y el método registrar(), que muestre por pantalla el resultado.

class Estudiante extends Persona {
    constructor(nombre, edad, genero, curso, grupo){
        super(nombre, edad, genero)
        this.curso = curso
        this.grupo = grupo
    }
    registrar(){
        console.log(`${this.nombre} con la edad de ${this.edad} del ${this.curso} curso que pertenece al grupo ${this.grupo} se ha registrado correctamente`)
    }
};

let studiant = new Estudiante ('Maria', 29, 'mujer', 'segundo', 'modelado 3D')
console.log(studiant)
studiant.obtDetalles()
studiant.registrar()

//Crear la clase Profesor, que hereda de Persona, e incluye las propiedades asignatura y nivel y el método asignar(), que muestre por pantalla el resultado.

class Profesor extends Persona {
    constructor(nombre, edad, genero, asignatura, nivel){
        super(nombre, edad, genero)
        this.asignatura = asignatura
        this.nivel = nivel
    } 
    asignar(){
        console.log(`${this.nombre} es un ${this.genero} de ${this.edad} años y es profesor de ${this.asignatura} en ${this.nivel}`)
    }
};

let profe = new Profesor ('Juan', 40, 'hombre', 'matematicas', 'bachiller')
console.log(profe)
profe.asignar()


//Extras:

//Ejercicio POO 2 - kata Mayas y aztecas
//kata mayas y aztecas <- enlace en la pagina de ejercicio
 
class Warrior {
    constructor(life, power){
        this.life = life,
        this.power = power
    }
    attack(){
       return this.power
    }
    defend(damage) {
        this.life -= damage
    }
}

class Maya extends Warrior {
    constructor(life, power,) {
        super(life, power)
       
    }
    drinckColaCao (){
        this.life += 10
    }
} 


class Azteca extends Warrior {
    constructor(life, power,) {
        super(life, power)
    }
    drinkNesquik (){
      return  this.life += 10
    }
} 

let gerreroMaya = new Maya (32, 20)
let gerreroAzteca = new Azteca (28, 25)

gerreroMaya.drinckColaCao()    
gerreroAzteca.drinkNesquik()

let mayaAttack = gerreroMaya.attack() 
gerreroAzteca.defend(mayaAttack) 

let aztecaAtack = gerreroAzteca.attack()
gerreroMaya.defend(aztecaAtack)

console.log(gerreroMaya)
console.log(gerreroAzteca)
//Ejercicio POO 3 - Il sogno di volare
//POO - Il sogno di volare <- enlace en la pagina de ejercicio
