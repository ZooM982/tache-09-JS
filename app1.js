
let tab1 = [];
for ( let i = 0; i<5; i++){
    tab1[i] = prompt("Ajouter les elements du premier tableau (tab1)")
}

document.write("<p>-les elements de tab1</p>")
for ( let i = 0; i<5; i++){
    document.write("[",tab1[i],"]")
}


let tab2 = [];
for ( let i = 0; i<5; i++){
    tab2[i] = prompt("Ajouter les elements e deuxieme tableau (tab2)")
}


document.write("<p>-les elements de tab2</p>")
for ( let i = 0; i<5; i++){
    document.write("[",tab2[i],"]")
}

let diff1 = tab1.filter(val => !tab2.includes(val))
let diff2 = tab2.filter(val => !tab1.includes(val))

let tab3 = diff1.concat(diff2)
document.write("<p>-les elements different de tab1 et de tab2</p>")
document.write("tab3=","[",tab3,"]")

let tab4 = tab1.filter(val => tab2.includes(val))
document.write("<p>-les elements identique de tab1 et de tab2</p>")
document.write("tab4=","[",tab4,"]<br>")




