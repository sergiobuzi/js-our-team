// Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team. 
// Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto.
// MILESTONE 0:
// Creare l’array di oggetti con le informazioni fornite.

const listaMembri = [

    {
        "nome" : "Ciro Immobile",
        "ruolo" : "Capitano (mio padre)",
        "foto" : "img/angela-caroll-chief-editor.jpg",
    },

    {
        "nome" : "Alessandro Montana",
        "ruolo" : "membro",
        "foto" : "im/angela-caroll-chief-editor.jpg",
    },

    {
        "nome" : "Peppe Ciaccarell",
        "ruolo" : "spaccino",
        "foto" : "img/angela-caroll-chief-editor.jpg",
    },

    {
        "nome" : "Gabriele Abu Nurmagomedov",
        "ruolo" : "Boss finale",
        "foto" : "img/angela-caroll-chief-editor.jpg",
    },

    {
        "nome" : "Giorgio Beleardelli",
        "ruolo" : "Gymbro",
        "foto" : "img/angela-caroll-chief-editor.jpg",
    },

    {
        "nome" : "Alessio Rugi",
        "ruolo" : "Coprare online robe inutili di doom",
        "foto" : "img/angela-caroll-chief-editor.jpg",
    }
];



// MILESTONE 1:
// Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto

    //avvio un ciclo che mi parte da 0 fino alla lunghezza dell'array che stampi nome, ruolo e foto del membro
for(i = 0; i < listaMembri.length; i++){
    let membroIesimo = listaMembri[i];

    //console log del nome del membro
    console.log("Il membro si chiama:", membroIesimo.nome);

    //console log del ruolo del membro
    console.log("svolge il ruolo di:", membroIesimo.ruolo);

    //console log della foto del membro
    console.log("la foto:", membroIesimo.foto);


// MILESTONE 2:
// Stampare le stesse informazioni su DOM sotto forma di stringhe

    //creo una variabile per mandare a schermo le informazioni
    const stringa = document.querySelector(".string");
    stringa.append(membroIesimo.nome);
    stringa.append(membroIesimo.ruolo);
    stringa.append(membroIesimo.foto);
};

