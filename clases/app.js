class Peaple {
  constructor(name, lastname) {
    this.name = name;
    this.lastname = lastname;
  }



  hi() {
    return `hola me llamo ${this.name} ${this.lastname}`;
  }

  fullName() {
    return `${this.name} ${this.lastname}`;
  }
}

class Student extends Peaple {
  constructor(name, lastname, career) {
    super(name, lastname);
    this.career = career;
  }

  identification() {
    return `Nombre:${this.name} ${this.lastname} carrera: ${this.career}`;
  }

  hi() {
    return super.hi() + ' es estudiante de la carrera ' + this.career;
  }
}

const arnold = new Peaple('Arnold', 'Bazan');

const arnoldMatriculado = new Student('Arnold', 'Bazan', 'ingenieria de software');

console.log(arnold);
console.log(arnold.hi());
console.log(arnold.fullName());

console.log(arnoldMatriculado.identification());

console.log(arnoldMatriculado.hi());
console.log(arnoldMatriculado.fullName());
