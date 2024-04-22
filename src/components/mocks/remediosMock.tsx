interface Produto {
  id: number;
  titulo: string;
  texto: string;
  data: string;
  categoria: Categoria;
  preco: number;
  imagemUrl: string;
}



const remediosMock: Produto[] = [
  {
    id: 1,
    titulo: "Paracetamol",
    texto: "Alívio rápido da dor e da febre.",
    data: "2024-04-23",
    categoria: "Analgésicos",
    preco: 5.99,
    imagemUrl: "url_da_imagem_1.jpg",
  },
  {
    id: 2,
    titulo: "Ibuprofeno",
    texto: "Reduz a inflamação e alivia a dor.",
    data: "2024-04-24",
    categoria: "Analgésicos",
    preco: 7.99,
    imagemUrl: "url_da_imagem_2.jpg",
  },
  {
    id: 3,
    titulo: "Dipirona",
    texto: "Alivia dores leves a moderadas e reduz a febre.",
    data: "2024-04-25",
    categoria: "Analgésicos",
    preco: 4.99,
    imagemUrl: "url_da_imagem_3.jpg",
  },
  {
    id: 4,
    titulo: "Omeprazol",
    texto: "Trata úlceras gástricas e refluxo ácido.",
    data: "2024-04-26",
    categoria: "Antiácidos",
    preco: 9.99,
    imagemUrl: "url_da_imagem_4.jpg",
  },
  {
    id: 5,
    titulo: "Amoxicilina",
    texto: "Antibiótico para infecções bacterianas.",
    data: "2024-04-27",
    categoria: "Antibióticos",
    preco: 12.99,
    imagemUrl: "url_da_imagem_5.jpg",
  },
  {
    id: 6,
    titulo: "Dorflex",
    texto: "Alívio rápido para dores musculares.",
    data: "2024-04-28",
    categoria: "Analgésicos",
    preco: 6.99,
    imagemUrl: "url_da_imagem_6.jpg",
  },
  {
    id: 7,
    titulo: "Ranitidina",
    texto: "Reduz a produção de ácido no estômago.",
    data: "2024-04-29",
    categoria: "Antiácidos",
    preco: 8.99,
    imagemUrl: "url_da_imagem_7.jpg",
  },
  {
    id: 8,
    titulo: "Atenolol",
    texto: "Controla a pressão arterial e a frequência cardíaca.",
    data: "2024-04-30",
    categoria: "Anti-hipertensivos",
    preco: 11.99,
    imagemUrl: "url_da_imagem_8.jpg",
  },
  {
    id: 9,
    titulo: "Captopril",
    texto: "Trata a pressão arterial alta e insuficiência cardíaca.",
    data: "2024-05-01",
    categoria: "Anti-hipertensivos",
    preco: 10.99,
    imagemUrl: "url_da_imagem_9.jpg",
  },
];

export default remediosMock;
