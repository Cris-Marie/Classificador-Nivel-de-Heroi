let nomeHeroi = "Joãozinho"
let xpHeroi = 9500
let nivelHeroi = " "

if (xpHeroi > 10000) 
    nivelHeroi = "Radiante"
if (xpHeroi <= 10000)
    nivelHeroi = "Imortal"
if (xpHeroi <= 9000)
    nivelHeroi = "Ascendente"
if (xpHeroi <= 8000)
    nivelHeroi = "Platina"
if (xpHeroi <= 7000)
    nivelHeroi = "Ouro"
if (xpHeroi <= 5000)
    nivelHeroi = "Prata"
if (xpHeroi <= 2000)
    nivelHeroi = "Bronze"
if (xpHeroi <= 1000)
    nivelHeroi = "Ferro"

console.log("O Herói de nome " + nomeHeroi + " está no nível " + nivelHeroi)