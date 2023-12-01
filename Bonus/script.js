const listaMembri = [

    {
        "nome" : "Ciro Immobile",
        "ruolo" : "Capitano (mio padre)",
        "foto" : "/Bonus/img/FQDySt6XoAA202b.jpeg",
    },

    {
        "nome" : "Alessandro Montana",
        "ruolo" : "membro onorario",
        "foto" : "/Bonus/img/Immagine WhatsApp 2023-12-01 ore 21.12.28_0b820c08.jpg",
    },

    {
        "nome" : "Peppe Ciaccarell",
        "ruolo" : "spaccino di quartiere",
        "foto" : "/Bonus/img/Immagine WhatsApp 2023-12-01 ore 19.12.25_54938f1b.jpg",
    },

    {
        "nome" : "Gabriele Abu Nurmagomedov",
        "ruolo" : "Boss finale",
        "foto" : "/Bonus/img/Immagine WhatsApp 2023-12-01 ore 19.13.32_d5a8af31.jpg",
    },

    {
        "nome" : "Giorgio Belardoni",
        "ruolo" : "Gymbro certificato",
        "foto" : "/Bonus/img/Gigachad.webp",
    },

    {
        "nome" : "Alessio Brugi",
        "ruolo" : "Compra online robe inutili di doom",
        "foto" : "/Bonus/img/Immagine WhatsApp 2023-12-01 ore 19.11.48_89792d34.jpg",
    }
];



//creo una variabile per il container
const container = document.querySelector(".box");

for(i = 0; i < listaMembri.length; i++){
    let membroIesimo = listaMembri[i];
    

    //creo una variabile per creare i div e li assegno al container
    let card = document.createElement("div");

    //creo una variabile che mi crei le immagini
    let foto = document.createElement("img");
    foto.src = membroIesimo.foto;
    foto.classList.add("pic");

    //creo una variabile che mi crei le immagini
    let nome = document.createElement("h2");
    nome.append(membroIesimo.nome);

    //creo una variabile che mi crei le immagini
    let ruolo = document.createElement("h3");
    ruolo.append(membroIesimo.ruolo);

    container.append(card);

    card.append(foto, nome, ruolo);
};

