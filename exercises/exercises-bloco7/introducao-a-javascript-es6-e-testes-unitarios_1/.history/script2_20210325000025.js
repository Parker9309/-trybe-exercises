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
console.log(objLength(lesson1));

const objValue = (object) => Object.value(object)
console.log(objValue(lesson1))

const allLessons = Object.assign({}, { lesson1, lesson2, lesson3 })
console.log (allLessons)

function getStudentTotal (lessons) {
  const keys = Object.keys (lessons)
  let total = 0

  for(let i = 0; i <= keys.length; i++){
    const currentKey = keys[i]
    total += lessons[currentKey].numeroEstudantes
  }
  return total
}
console.log(getStudentTotal(allLessons))       //código tirado do vídeo do gabarito