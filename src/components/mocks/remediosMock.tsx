import Produto from "../../models/Produto";
import categoriasMock from "./categoriasMock";

const remediosMock: Produto[] = [
  {
    id: 1,
    titulo: "Paracetamol",
    texto: "Alívio rápido da dor e da febre.",
    data: "2024-04-23",
    categoria: categoriasMock[0], // Analgésicos
    preco: 5.99,
    imagemUrl: "https://i.imgur.com/4pwY8SR.png",
  },
  {
    id: 2,
    titulo: "Ibuprofeno",
    texto: "Reduz a inflamação e alivia a dor.",
    data: "2024-04-24",
    categoria: categoriasMock[0], // Analgésicos
    preco: 7.99,
    imagemUrl: "https://i.imgur.com/GwHCZTX.png",
  },
  {
    id: 3,
    titulo: "Dipirona",
    texto: "Alivia dores leves a moderadas e reduz a febre.",
    data: "2024-04-25",
    categoria: categoriasMock[0], // Analgésicos
    preco: 4.99,
    imagemUrl: "https://i.imgur.com/fFSTjFx.png",
  },
  {
    id: 4,
    titulo: "Omeprazol",
    texto: "Trata úlceras gástricas e refluxo ácido.",
    data: "2024-04-26",
    categoria: categoriasMock[1], // Antiácidos
    preco: 9.99,
    imagemUrl: "https://i.imgur.com/TVRjDHn.png",
  },
  {
    id: 5,
    titulo: "Amoxicilina",
    texto: "Antibiótico para infecções bacterianas.",
    data: "2024-04-27",
    categoria: categoriasMock[2], // Antibióticos
    preco: 12.99,
    imagemUrl: "https://i.imgur.com/346E5qh.png",
  },
  {
    id: 6,
    titulo: "Dorflex",
    texto: "Alívio rápido para dores musculares.",
    data: "2024-04-28",
    categoria: categoriasMock[0], // Analgésicos
    preco: 6.99,
    imagemUrl: "https://i.imgur.com/n4FiqPu.png",
  },
  {
    id: 7,
    titulo: "Ranitidina",
    texto: "Reduz a produção de ácido no estômago.",
    data: "2024-04-29",
    categoria: categoriasMock[1], // Antiácidos
    preco: 8.99,
    imagemUrl: "https://i.imgur.com/wM7iRnp.png",
  },
  {
    id: 8,
    titulo: "Atenolol",
    texto: "Controla a pressão arterial e a frequência cardíaca.",
    data: "2024-04-30",
    categoria: categoriasMock[3], // Anti-hipertensivos
    preco: 11.99,
    imagemUrl: "https://i.imgur.com/1rSNVb9.png",
  },
  {
    id: 9,
    titulo: "Captopril",
    texto: "Trata a pressão arterial alta e insuficiência cardíaca.",
    data: "2024-05-01",
    categoria: categoriasMock[3], // Anti-hipertensivos
    preco: 10.99,
    imagemUrl: "https://i.imgur.com/ULshDhK.png",
  },
  {
    id: 10,
    titulo: "Cloridrato de Sertralina",
    texto: "Antidepressivo utilizado para tratar depressão, transtorno obsessivo-compulsivo.",
    data: "2024-05-02",
    categoria: categoriasMock[4], // Antidepressivos
    preco: 15.99,
    imagemUrl: "https://i.imgur.com/8M7yGNi.png",
  },
  {
    id: 11,
    titulo: "Loratadina",
    texto: "Antialérgico utilizado para aliviar os sintomas da alergia, como espirros, coriza, coceira no nariz e nos olhos, e urticária.",
    data: "2024-05-03",
    categoria: categoriasMock[5], // Antialérgicos
    preco: 8.49,
    imagemUrl: "https://i.imgur.com/G2aS5of.png",
  },
  {
    id: 12,
    titulo: "Sinvastatina",
    texto: "Reduz os níveis de colesterol e triglicerídeos no sangue, diminuindo o risco de doenças cardiovasculares.",
    data: "2024-05-04",
    categoria: categoriasMock[6], // Estatinas
    preco: 7.99,
    imagemUrl: "https://i.imgur.com/5MGPvWz.png",
  },
  {
    id: 13,
    titulo: "Cloridrato de Fluoxetina",
    texto: "Antidepressivo utilizado para tratar depressão.",
    data: "2024-05-05",
    categoria: categoriasMock[4], // Antidepressivos
    preco: 12.99,
    imagemUrl: "https://i.imgur.com/suMEkQ2.png",
  },
  {
    id: 14,
    titulo: "Cetoprofeno",
    texto: "Anti-inflamatório utilizado para tratar inflamações, dores e febre.",
    data: "2024-05-06",
    categoria: categoriasMock[7], // Anti-inflamatórios não esteroides (AINEs)
    preco: 6.79,
    imagemUrl: "https://i.imgur.com/EPp4iTD.png",
  },
  {
    id: 15,
    titulo: "Levotiroxina Sódica",
    texto: "Utilizado para tratar hipotireoidismo, uma condição em que a glândula tireoide não produz hormônios tireoidianos suficientes.",
    data: "2024-05-07",
    categoria: categoriasMock[8], // Hormônios da tireoide
    preco: 9.99,
    imagemUrl: "https://i.imgur.com/Zoe2ewQ.png",
  },
];

export default remediosMock;
