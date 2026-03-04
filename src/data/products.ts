import { Product } from '../types';

export const products: Product[] = [
  {
    id: 1,
    name: "Caneta Ecológica Papelão com detalhes translúcidos",
    price: "R$ 2,50",
    minQty: 100,
    image: "https://images.unsplash.com/photo-1585336261022-680e295ce3fe?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    tag: "CANETA ECOLÓGICA",
    tagColor: "bg-[#4A5D23]",
    categories: ["Linha Eco", "Escritório"],
    dimensions: "14cm x 1cm",
    weight: "10g",
    material: "Papelão Reciclado e Plástico Biodegradável",
    careInstructions: [
      "Manter em local seco",
      "Evitar contato com umidade excessiva",
      "Não expor ao sol por longos períodos"
    ]
  },
  {
    id: 2,
    name: "GARRAFA AÇO INOX",
    price: "R$ 17,50",
    minQty: 20,
    image: "https://images.unsplash.com/photo-1602143407151-11115cd4e69b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    tag: "BRINDES",
    tagColor: "bg-[#1A1A1A]",
    categories: ["Brindes", "Linha Eco"],
    dimensions: "25cm x 7cm",
    weight: "300g",
    material: "Aço Inoxidável 304",
    careInstructions: [
      "Lavar com água e sabão neutro",
      "Não utilizar esponjas abrasivas",
      "Não levar ao micro-ondas",
      "Secar bem após a lavagem"
    ]
  },
  {
    id: 3,
    name: "Chaveiro Metal com Detalhe em Couro Sintético",
    price: "R$ 5,90",
    minQty: 15,
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    tag: "BRINDES",
    tagColor: "bg-[#1A1A1A]",
    categories: ["Brindes"],
    dimensions: "8cm x 3cm",
    weight: "25g",
    material: "Metal e Couro Sintético",
    careInstructions: [
      "Limpar com pano seco",
      "Evitar contato com produtos químicos",
      "Não molhar o couro"
    ]
  },
  {
    id: 4,
    name: "Squeeze em alumínio de 600ml Tampa Prática",
    price: "R$ 12,90",
    minQty: 7,
    image: "https://images.unsplash.com/photo-1602143407151-11115cd4e69b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    tag: "BRINDES",
    tagColor: "bg-[#1A1A1A]",
    categories: ["Brindes", "Linha Eco"],
    dimensions: "22cm x 7cm",
    weight: "150g",
    material: "Alumínio",
    careInstructions: [
      "Lavar antes do primeiro uso",
      "Não utilizar para bebidas quentes",
      "Não levar ao congelador",
      "Lavar manualmente"
    ]
  },
  {
    id: 5,
    name: "Sacola algodão com alças",
    price: "R$ 8,50",
    minQty: 30,
    image: "https://images.unsplash.com/photo-1597484661643-2f5fef640dd1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    tag: "LINHA ECO",
    tagColor: "bg-[#27AE60]",
    categories: ["Linha Eco", "Brindes"],
    dimensions: "38cm x 42cm",
    weight: "120g",
    material: "Algodão Cru 180g",
    careInstructions: [
      "Lavar à mão ou em ciclo delicado",
      "Não utilizar alvejante",
      "Secar à sombra",
      "Passar em temperatura média"
    ]
  },
  {
    id: 6,
    name: "COPO TÉRMICO PREMIUM",
    price: "R$ 45,00",
    minQty: 10,
    image: "https://images.unsplash.com/photo-1577937927133-66ef06acdf18?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    tag: "BRINDES",
    tagColor: "bg-[#1A1A1A]",
    categories: ["Brindes"],
    dimensions: "17cm x 8cm",
    weight: "350g",
    material: "Aço Inoxidável Parede Dupla",
    careInstructions: [
      "Não lavar em máquina de lavar louças",
      "Não utilizar no micro-ondas",
      "Lavar com esponja macia",
      "Evitar quedas"
    ]
  },
  {
    id: 7,
    name: "Caderno Personalizado Capa Dura",
    price: "R$ 15,90",
    minQty: 50,
    image: "https://images.unsplash.com/photo-1544816155-12df9643f363?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    tag: "ESCRITÓRIO",
    tagColor: "bg-[#2C3E50]",
    categories: ["Escritório", "Brindes"],
    dimensions: "21cm x 15cm (A5)",
    weight: "300g",
    material: "Papel Pólen 80g e Capa Dura",
    careInstructions: [
      "Manter longe de umidade",
      "Limpar capa com pano seco",
      "Evitar dobrar a capa"
    ]
  },
  {
    id: 8,
    name: "Mochila Notebook Executiva",
    price: "R$ 89,90",
    minQty: 10,
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    tag: "INFORMÁTICA",
    tagColor: "bg-[#2980B9]",
    categories: ["Informática", "Escritório"],
    dimensions: "45cm x 32cm x 15cm",
    weight: "800g",
    material: "Poliéster 600D Impermeável",
    careInstructions: [
      "Limpar com pano úmido",
      "Não lavar na máquina",
      "Secar à sombra",
      "Não passar ferro"
    ]
  },
  {
    id: 9,
    name: "Kit Boas Vindas Premium",
    price: "R$ 120,00",
    minQty: 5,
    image: "https://images.unsplash.com/photo-1629904853716-f004b377c814?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    tag: "BRINDES",
    tagColor: "bg-[#1A1A1A]",
    categories: ["Brindes", "Escritório", "Informática"],
    dimensions: "30cm x 25cm x 10cm (Caixa)",
    weight: "1.2kg",
    material: "Diversos (Papel, Metal, Plástico)",
    careInstructions: [
      "Verificar instruções individuais de cada item",
      "Manter a caixa em local seco"
    ]
  },
  {
    id: 10,
    name: "Power Bank 10000mAh",
    price: "R$ 65,00",
    minQty: 20,
    image: "https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    tag: "INFORMÁTICA",
    tagColor: "bg-[#2980B9]",
    categories: ["Informática", "Brindes"],
    dimensions: "14cm x 7cm x 1.5cm",
    weight: "220g",
    material: "Plástico ABS Resistente",
    careInstructions: [
      "Não expor a altas temperaturas",
      "Não molhar",
      "Carregar totalmente antes do primeiro uso",
      "Evitar quedas bruscas"
    ]
  },
  {
    id: 11,
    name: "Bloco de Notas Ecológico com Caneta",
    price: "R$ 9,90",
    minQty: 100,
    image: "https://images.unsplash.com/photo-1517842645767-c639042777db?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    tag: "LINHA ECO",
    tagColor: "bg-[#27AE60]",
    categories: ["Linha Eco", "Escritório"],
    dimensions: "18cm x 13cm",
    weight: "150g",
    material: "Papel Reciclado e Papelão",
    careInstructions: [
      "Manter em local seco",
      "Evitar umidade",
      "Não dobrar"
    ]
  },
  {
    id: 12,
    name: "Fone de Ouvido Bluetooth",
    price: "R$ 79,90",
    minQty: 15,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    tag: "INFORMÁTICA",
    tagColor: "bg-[#2980B9]",
    categories: ["Informática"],
    dimensions: "18cm x 16cm x 8cm",
    weight: "250g",
    material: "Plástico e Espuma Sintética",
    careInstructions: [
      "Limpar almofadas com pano seco",
      "Não expor à chuva",
      "Guardar em local protegido",
      "Carregar a bateria regularmente"
    ]
  }
];
