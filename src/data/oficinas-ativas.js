import imgDados from "@assets/mago/oficinas/mago-dados.png";
import imgRedes from "@assets/mago/oficinas/mago-redes.png";
import imgWeb from "@assets/mago/oficinas/mago-web.png";
import imgLinux from "@assets/mago/oficinas/mago-linux.png";
import imgNuvem from "@assets/mago/oficinas/mago-nuvem.jpeg";
/*
 * COMO CADASTRAR UMA OFICINA:
 * Preencha o bloco no array abaixo. 'linkInscricao' é o caminho da URL que abrirá
 * a página detalhada da oficina (ex: "/oficinas/oficina-de-web").
 * Importe a imagem correspondente lá no topo de assets/mago/oficinas.
 */
export const oficinasAtivasData = [
  {
    id: "oficina-computação-nuvem",
    titulo: "Oficina de Computação em Nuvem",
    descricao:
      "A oficina tem como objetivo desenvolver a capacidade técnica para criação de servidores virtuais, publicação de aplicações simples na internet, gerenciamento de permissões de acesso, armazenamento de arquivos em nuvem e monitoramento básico de recursos.",
    turmas: ["Segunda, Quarta e Sexta: 11h às 13h"],
    formato: "Presencial",
    linkInscricao: "/oficinas/oficina-computacao-nuvem",
    imagem: imgNuvem,
    alt: "Mago ao lado ",
  },
   {
    id: "oficina-linux",
    titulo: "Oficina de Linux: Ciclo 3",
    descricao:
      "Faça seu proprio kernel e aprenda a fundo como o linux e feito.",
    turmas: ["Segunda, Terça e Quinta: 17h às 19h"],
    formato: "Presencial",
    linkInscricao: "/oficinas/oficina-de-linux",
    imagem: imgLinux,
    alt: "Mago ao lado do pinguim Tux",
  },
  {
    id: "intro-redes",
    titulo: "Introdução de Redes para Cibersegurança: Ciclo 2",
    descricao:
      "Esta oficina oferece uma introdução prática e essencial ao universo de Redes de Computadores sob a ótica da cibersegurança.",
    turmas: ["Segunda, Terça e Quinta: 11h às 13h"],
    formato: "Presencial",
    linkInscricao: "/oficinas/intro-redes",
    imagem: imgRedes,
    alt: "Mago flutuando na matrix",
  },
  {
    id: "oficina-web",
    titulo: "Oficina de Web (JavaScript): Ciclo 2",
    descricao:
      "Construa sites rápidos e modernos do zero, focando em componentização e layouts responsivos.",
    turmas: ["Quarta e Sexta: 11h às 13h"],
    formato: "Presencial",
    linkInscricao: "/oficinas/oficina-de-web",
    imagem: imgWeb,
    alt: "Mago pensando em desenvolvimento web",
  },
 
  {
    id: "machine-learning",
    titulo: "Ciência de Dados - Machine Learning: Ciclo 2",
    descricao:
      "Oferece uma introdução prática e acessível ao mundo do Machine Learning e Ciência de Dados.",
    turmas: ["Terça e Quarta: 11h às 13h"],
    formato: "Presencial",
    linkInscricao: "/oficinas/machine-learning",
    imagem: imgDados,
    alt: "Mago jogando dados",
  },
];
