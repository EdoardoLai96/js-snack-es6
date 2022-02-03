function randomNumber (min , max){
    return Math.floor(Math.random() * (max - min + 1))
}



const squadreDiCalcio = [
    {
      nome: "Milan",
      punti_fatti: randomNumber(0, 10),
      falli_subiti: randomNumber(0,5)
    },
    {
      nome :"Juve",
      punti_fatti: randomNumber(0, 10),
      falli_subiti: randomNumber(0,5)
    },
    {
      nome :"Inter",
      punti_fatti: randomNumber(0, 10),
      falli_subiti: randomNumber(0,5)
    },
    {
      nome :"Roma",
      punti_fatti: randomNumber(0, 10),
      falli_subiti: randomNumber(0,5)
    },
    {
      nome :"Cagliari",
      punti_fatti: randomNumber(0, 10),
      falli_subiti: randomNumber(0,5)
    },
];
const soloNomiEFalli = [];

for(let i=0; i < squadreDiCalcio.length; i++){

    let squadra = squadreDiCalcio[i]
    const {nome, falli_subiti} = squadra;
    console.log(nome, falli_subiti)

    soloNomiEFalli.push({nome, falli_subiti});

}


console.log(soloNomiEFalli);






