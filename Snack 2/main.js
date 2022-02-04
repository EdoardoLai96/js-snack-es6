function randomNumber (min , max){
    return Math.floor(Math.random() * (max - min + 1) + min)
}



const squadreDiCalcio = [
    {
      nome: "Milan",
      punti_fatti: 0,
      falli_subiti: 0 
       },
    {
      nome :"Juve",
      punti_fatti: 0,
      falli_subiti: 0 
       },
    {
      nome :"Inter",
      punti_fatti: 0,
      falli_subiti: 0 
       },
    {
      nome :"Roma",
      punti_fatti: 0,
      falli_subiti: 0 
       },
    {
      nome :"Cagliari",
      punti_fatti: 0,
      falli_subiti: 0
    },
];

for(let i=0;i<squadreDiCalcio.length;i++){
squadreDiCalcio[i].punti_fatti = randomNumber(0,10);
squadreDiCalcio[i].falli_subiti = randomNumber(0,10);
}



const soloNomiEFalli = [];

for(let i=0; i < squadreDiCalcio.length; i++){

    let squadra = squadreDiCalcio[i];

    const {nome, falli_subiti} = squadra;

    console.log(nome, falli_subiti)

    soloNomiEFalli.push({nome, falli_subiti});

}


console.log(soloNomiEFalli);






