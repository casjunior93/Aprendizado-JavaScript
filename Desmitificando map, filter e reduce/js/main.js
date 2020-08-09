//filter: cria um novo array com todos os elementos que passaram no teste
const pets = [
  {
    name: "Rex",
    type: "dog",
    age: 10,
  },
  {
    name: "Miau",
    type: "gato",
    age: 2,
  },
  {
    name: "Miau",
    type: "gato",
    age: 1,
  },
];

const ehMenorQueCinco = (numero) => {
  return numero < 5;
};

const newPets = pets.filter((pet) => {
  return ehMenorQueCinco(pet.age);
});

// console.log(pets);
// console.log(newPets);

//varre o array e para cda elemento retorna um novo array com a mesma qntidade de elementos

const pets2 = [
  {
    name: "Rex",
    type: "dog",
    age: 10,
    weight: 0.01,
  },
  {
    name: "Miau",
    type: "gato",
    age: 2,
    weight: 0.01,
  },
  {
    name: "Remo",
    type: "peixe",
    age: 11,
    weight: 0.01,
  },
  {
    name: "Calo",
    type: "calopsita",
    age: 1,
    weight: 0.01,
  },
  {
    name: "Ronk",
    type: "porco",
    age: 3,
    weight: 0.01,
  },
];

const pets2Names = pets2.map((pet) => {
  return pet.name;
});

// console.log(pets2);
// console.log(pets2Names);

//reduce : executa uma função para cada elemento retornando um unico valor final

const pets3 = [
  {
    name: "Rex",
    type: "dog",
    age: 10,
    weight: 0.01,
  },
  {
    name: "Miau",
    type: "gato",
    age: 2,
    weight: 0.01,
  },
  {
    name: "Remo",
    type: "peixe",
    age: 11,
    weight: 0.01,
  },
  {
    name: "Calo",
    type: "calopsita",
    age: 1,
    weight: 0.01,
  },
  {
    name: "Ronk",
    type: "dog",
    age: 3,
    weight: 0.01,
  },
];

const totalPeso = pets3.reduce((acumulado, pet) => {
  if (pet.type !== "dog") return acumulado;

  return acumulado + pet.weight;
}, 0);

const total = pets3.reduce(
  (acumulado, pet) => {
    return {
      totalAge: acumulado.totalAge + pet.age,
      totalPeso: acumulado.totalPeso + pet.weight,
    };
  },
  {
    totalAge: 0,
    totalPeso: 0,
  }
);

console.log(totalPeso);

const totalPesoDogs = pets3
  .filter((pet) => {
    return pet.type === "dog";
  })
  .reduce((total, pet) => {
    return total + pet.weight;
  }, 0);

console.log(`Total dogs: ${totalPesoDogs}`);
