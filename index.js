
let nivel = partidasV(15, 5)

function partidasV(vitorias, derrotas){
    let saldoRank = vitorias - derrotas
    return saldoRank

}

function rank(){

    if(nivel <= 10){

       nivelB = "Ferro"

    }

    else if(nivel <= 20){

        nivelB = "Bronze"
    }

    else if(nivel <= 50){

        nivelB = "Prata"
    }

    else if(nivel <= 80){

        nivelB = "Ouro"
    }

    else if(nivel <= 90){

        nivelB = "Diamante"
    }

    else if(nivel <= 100){

        nivelB = "Lendário"
    }

    else if(nivel >= 101){

        nivelB = "Imortal"
    }

    return `O Herói tem de saldo de ${nivel} está no nível de ${nivelB}`


}

console.log(rank())