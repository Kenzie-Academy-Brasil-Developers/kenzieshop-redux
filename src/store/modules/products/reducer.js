const products = [
  {
    id: 1,
    name: "Código Limpo: Habilidades práticas Agile Software",
    categorie: "Livros",
    description: "Edição em português, por Robert C. Martin",
    price: 59.86,
    image:
      "https://images-na.ssl-images-amazon.com/images/I/4153E2zZmTS._SY344_BO1,204,203,200_QL70_ML2_.jpg",
  },
  {
    id: 2,
    name: "TDD - Desenvolvimento guiado por testes",
    categorie: "Livros",
    description: "Edição em português, por Kent Beck",
    price: 180,
    image:
      "https://images-na.ssl-images-amazon.com/images/I/41fhcrnUm7L._SY344_BO1,204,203,200_QL70_ML2_.jpg",
  },
  {
    id: 3,
    name: "Notebook Acer Aspire 5",
    categorie: "Informática",
    description:
      "Intel Core I5-10210U, 8GB ram, SSD 256GB, 15.6 full HD, Windows 10, Preto",
    price: 4049,
    image:
      "https://images.kabum.com.br/produtos/fotos/184925/notebook-acer-aspire-5-intel-core-i5-10210u-8gb-ram-ssd-256gb-15-6-full-hd-windows-10-preto-a515-54-55l0_1638188860_gg.jpg",
  },
  {
    id: 4,
    name: "Domain-Driven Design: Atacando as complexidades do coração do software",
    categorie: "Livros",
    description: "Edição português, por Eric Evans",
    price: 67.87,
    image:
      "https://images-na.ssl-images-amazon.com/images/I/51HGF9mg6iL._SX323_BO1,204,203,200_.jpg",
  },
  {
    id: 5,
    name: "Combo Teclado e Mouse sem fio Longetech",
    categorie: "Informática",
    description:
      "Teclado com apoio para as mãos e mouse destro, conexão USB, pilhas inclusas e layout ABNT2",
    price: 206.9,
    image: "https://m.media-amazon.com/images/I/317dmT+uGlL._AC_.jpg",
  },
];

const productsReducer = (state = products, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default productsReducer;
