let nomeHeroi = " Vinicius Monstro "
let sofreuDano = false
let vitorias = 58
let derrotas = 7
let nivel = ""
let novoXP = ""
    if(sofreuDano){novoXP=8000
}
    else{("Enfrentou boss Final ")
novoXP=6995
}

numeroTotalPartida(vitorias,derrotas)
console.log(numeroTotalPartida+" é o resultado do Ranking ")




function numeroTotalPartida(){
    numeroTotalPartida = vitorias-derrotas
    
       }
       if(let = numeroTotalPartida<=10){
        console.log("ferro")}
        if(let = numeroTotalPartida>=11 && numeroTotalPartida<=20 ){
            console.log("Bronze")}
            if(let = numeroTotalPartida>=21 && numeroTotalPartida<=50 ){
                console.log("Prata")}
                if(let = numeroTotalPartida>=51 && numeroTotalPartida<=80 ){
                    console.log("Ouro")}
                    if(let = numeroTotalPartida>=81 && numeroTotalPartida<=90 ){
                        console.log("diamante")}
                        if(let = numeroTotalPartida>=91 && numeroTotalPartida<=100 ){
                            console.log("lendario")}
                                if(let = numeroTotalPartida>101){
                                    console.log("imortal")}


 let ouro = true
    if(ouro){
    numeroTotalPartida = "Ouro"
}
      

            console.log(novoXP+ " é o resultado final do XP")
let xpFinal =  6995
for(let i= 6995;i<7015;i++){
  xpFinal+=1
  console.log("tomou poção magica " + i)
}
if(let = xpFinal<=1000){
    console.log("ferro")}
    if(let = xpFinal>=1001 && xpFinal<=2000 ){
        console.log("Bronze")}
        if(let = xpFinal>=2001 && xpFinal<=5000 ){
            console.log("Prata")}
            if(let = xpFinal>=6001 && xpFinal<=7001 ){
                console.log("Ouro")}
                if(let = xpFinal>=7001 && xpFinal<=8000 ){
                    console.log("platina")}
                    if(let = xpFinal>=8001 && xpFinal<=9000 ){
                        console.log("Ascendente")}
                        if(let = xpFinal>=9001 && xpFinal<=1000 ){
                            console.log("Imortal")}
                            if(let = xpFinal>=10001){
                                console.log("Radiante")}

let platina = true
if(platina){
    nivel = " platina"
}
console.log ("O heroi" + nomeHeroi + "esta no nivel"+ nivel)
console.log ("O heroi "+ nomeHeroi+ "esta no Ranking "+ numeroTotalPartida)