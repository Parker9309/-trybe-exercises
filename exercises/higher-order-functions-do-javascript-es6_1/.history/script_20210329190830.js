const newEmployees = (candidato) => {
  const employees = {
    id1: candidato('Pedro Guerra'),
    id2: candidato('Luiza Drumond'), 
    id3: candidato('Carla Paiva') 
  }
  return employees;
};

const candidato = (fullName) => {
  const email = fullName.toLowerCase().split(' ').join('_');
  return {fullName, email: `${email}@betrybe.com}`;
}

console.log(newEmployees(candidato));