const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

const addNewKey = (object, key, value) => {
  object[key] = value;
};

addNewKey(lesson2, 'turno', 'noite');

const listKeys = (object) =>  Object.keys(object);
console.log(listKeys(lesson1));

const objLength = (object) =>  Object.keys(object).length;
console.log(sizeObj(lesson1));