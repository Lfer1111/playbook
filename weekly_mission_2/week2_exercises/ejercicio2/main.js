// Toma la siguiente lista de explorers:

const explorers = [
 {
   name: "Explorer 1",
   exercises_completed: 10,
   rate: 99,
   city: "CDMX",
   stack: [
     "js",
     "c#"
   ],
   missions: {
     onboarding: {
       isFinished: true,
       exercisesFinished: true
     },
     frontend: {
       isFinished: true,
       exercisesFinished: true
     }
   }
 },
 {
   name: "Explorer 2",
   exercises_completed: 9,
   city: "Veracruz",
   rate: 50,
   stack: [
     "js"
   ],
   missions: {
     onboarding: {
       isFinished: false,
       exercisesFinished: false
     },
     frontend: {
       isFinished: false,
       exercisesFinished: false
     }
   }
 },
 {
   name: "Explorer 3",
   exercises_completed: 3,
   city: "Sonora",
   rate: 100,
   stack: [
     "elixir"
   ],
   missions: {
     onboarding: {
       isFinished: true,
       exercisesFinished: true
     },
     frontend: {
       isFinished: false,
       exercisesFinished: false
     }
   }
 }
]


// Sobre esta lista, realiza lo siguiente:

// Imprime el nombre (propiedad name) de cada explorer en la lista, usa FOR EACH
console.log(">> Imprime el nombre (propiedad name) de cada explorer en la lista, usa FOR EACH")
explorers.forEach(explorer => console.log(explorer.name))
console.log("")

// Imprime el stack de cada explorer, usa FOR EACH
console.log(">> Imprime el stack de cada explorer, usa FOR EACH")
explorers.forEach(explorer => console.log(explorer.stack))
console.log("")

// Crea una nueva lista con las listas de stacks de cada explorer, usa MAP
console.log(">> Crea una nueva lista con las listas de stacks de cada explorer, usa MAP")
const stacks = explorers.map(explorer => explorer.stack)
console.log(stacks)
console.log("")

// Obtén la lista de explorers que tengan en su stack "js", usa FILTER (para validar un elemento en un lista se usa el método includes)
console.log(">> Obtén la lista de explorers que tengan en su stack 'js', usa FILTER (para validar un elemento en un lista se usa el método includes)")
const jsFilter = explorers.filter((js) => 
    js["stack"].includes("js")
    )
console.log(jsFilter)
console.log("")

// Busca el primer explorer que sea de la CDMX, usa FIND
console.log(">> Busca el primer explorer que sea de la CDMX, usa FIND")
const mexico = explorers.find((explorer) => 
    explorer["city"].toLowerCase() === "cdmx"
    )
console.log(mexico)
console.log("")

// Obtén la suma de todos los exercises_completed, usa REDUCE
console.log(">> Obtén la suma de todos los exercises_completed, usa REDUCE")
const result = explorers.reduce((acc, current) =>
            acc + current.exercises_completed, 0
)
console.log(result)
console.log("")
        
// Obtén la validación si al menos uno de los explorers tiene la propiedad exercisesFinished en frontend como true, usa SOME
console.log(">> Obtén la validación si al menos uno de los explorers tiene la propiedad exercisesFinished en frontend como true, usa SOME")
const validacion = explorers.some(front => 
    front["missions"]["frontend"]["exercisesFinished"] === true
    )
console.log(validacion)
console.log("")

// Obtén la validación si todos los explorers tienen la propiedad isFinished del onboarding como true. Usa EVERY.
console.log(">> Obtén la validación si todos los explorers tienen la propiedad isFinished del onboarding como true. Usa EVERY.")
const validacion2 = explorers.every(onboard => 
    onboard["missions"]["onboarding"]["isFinished"] === true
    )
console.log(validacion2)
console.log("")
