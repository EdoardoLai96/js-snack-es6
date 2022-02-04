const biciclette = [

    {   
       nome: "Bici 1",
       peso: 20 
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


let biciPiuLeggera = biciclette[0];


for (let i= 0; i < biciclette.length; i++){
   let bicicletta = biciclette[i];

   if(biciPiuLeggera.peso > bicicletta.peso){
      biciPiuLeggera = bicicletta;

   }

}

console.log(biciPiuLeggera);

const {nome , peso} = biciPiuLeggera;

let myId = document.getElementById("myId");

myId.innerHTML = (`la bici che pesa di meno è la ${nome} e pesa ${peso}`);

// console.log(pesoBici)

// console.log("La bici che pesa di meno è la 1, con un peso di " + Math.min(...pesoBici) + "kg")
