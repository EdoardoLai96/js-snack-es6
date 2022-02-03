const biciclette = [

    {   
       nome: "Bici 1",
       peso: 10 
    },

    {   
       nome: "Bici 2",
       peso: 12 
    },

    {   
       nome: "Bici 3",
       peso: 14 
    },

    {   
       nome: "Bici 4",
       peso: 16 
    },


];

const pesoBici = []

for (let i= 0; i < biciclette.length; i++){
   let bicicletta = biciclette[i];

   const {peso} = bicicletta;
   console.log(peso)
   pesoBici.push(bicicletta.peso)
}

console.log(pesoBici)

console.log("La bici che pesa di meno è la 1, con un peso di " + Math.min(...pesoBici) + "kg")
