const places = [
  {
    id: '1',
    name: 'Relógio das Flores',
    category: 'Ponto turístico',
    neighborhood: 'Heliópolis',
    address: 'Praça Tavares Correia, Heliópolis, Garanhuns',
    openingHours: 'Espaço público com visitação livre',
    admission: 'Entrada gratuita',
    image: 'https://picsum.photos/seed/relogio-flores/900/600',
    coordinate: {
      latitude: -8.8815,
      longitude: -36.4912
    },
    summary:
      'Um dos principais cartões-postais de Garanhuns, localizado no bairro de Heliópolis.',
    description:
      'O Relógio das Flores é um dos locais mais conhecidos de Garanhuns. O espaço combina jardinagem ornamental, paisagismo e um relógio instalado em uma estrutura decorada com flores. É bastante visitado por moradores e turistas, principalmente durante os eventos realizados na cidade.'
  },
  {
    id: '2',
    name: 'Parque Euclides Dourado',
    category: 'Parque urbano',
    neighborhood: 'Heliópolis',
    address: 'Avenida Júlio Brasileiro, Heliópolis, Garanhuns',
    openingHours: 'Consulte os horários definidos pela administração local',
    admission: 'Entrada gratuita',
    image: 'https://picsum.photos/seed/parque-euclides/900/600',
    coordinate: {
      latitude: -8.8858,
      longitude: -36.4925
    },
    summary:
      'Área verde destinada à convivência, caminhada, lazer e atividades esportivas.',
    description:
      'O Parque Euclides Dourado é uma importante área de lazer da cidade. O local possui espaços arborizados, pistas para caminhada, equipamentos esportivos e áreas utilizadas para atividades culturais e recreativas.'
  },
  {
    id: '3',
    name: 'Parque Ruber van der Linden',
    category: 'Parque natural',
    neighborhood: 'Centro',
    address: 'Rua Manoel Clemente, Centro, Garanhuns',
    openingHours: 'Consulte os horários definidos pela administração local',
    admission: 'Entrada gratuita',
    image: 'https://picsum.photos/seed/pau-pombo/900/600',
    coordinate: {
      latitude: -8.8902,
      longitude: -36.4940
    },
    summary:
      'Parque conhecido popularmente como Pau Pombo, com vegetação e espaços de contemplação.',
    description:
      'O Parque Ruber van der Linden, conhecido como Pau Pombo, é uma área de preservação localizada na região central de Garanhuns. O ambiente possui vegetação, trilhas, espaços para descanso e contato com a natureza.'
  },
  {
    id: '4',
    name: 'Castelo de João Capão',
    category: 'Construção histórica',
    neighborhood: 'Heliópolis',
    address: 'Avenida Caruaru, Heliópolis, Garanhuns',
    openingHours: 'Visitação conforme disponibilidade do espaço',
    admission: 'Consultar no local',
    image: 'https://picsum.photos/seed/castelo-capao/900/600',
    coordinate: {
      latitude: -8.8790,
      longitude: -36.4895
    },
    summary:
      'Construção singular que se tornou uma curiosidade arquitetônica e cultural da cidade.',
    description:
      'O Castelo de João Capão é uma construção idealizada por João Ferreira, conhecido como João Capão. Sua arquitetura inspirada em castelos tornou o imóvel uma atração curiosa e bastante conhecida entre os visitantes.'
  },
  {
    id: '5',
    name: 'Centro Cultural Alfredo Leite Cavalcanti',
    category: 'Cultura',
    neighborhood: 'Centro',
    address: 'Praça Dom Moura, Centro, Garanhuns',
    openingHours: 'Conforme a programação cultural',
    admission: 'Entrada gratuita para a maioria dos eventos',
    image: 'https://picsum.photos/seed/centro-cultural/900/600',
    coordinate: {
      latitude: -8.8915,
      longitude: -36.4935
    },
    summary:
      'Espaço destinado à realização de exposições, apresentações e atividades culturais.',
    description:
      'O Centro Cultural Alfredo Leite Cavalcanti funciona em um prédio de relevância histórica para a cidade. O espaço recebe exposições, apresentações artísticas, encontros e diferentes atividades relacionadas à cultura.'
  },
  {
    id: '6',
    name: 'Santuário Mãe Rainha',
    category: 'Turismo religioso',
    neighborhood: 'Magano',
    address: 'Região do Magano, Garanhuns',
    openingHours: 'Visitação conforme as atividades religiosas',
    admission: 'Entrada gratuita',
    image: 'https://picsum.photos/seed/mae-rainha/900/600',
    coordinate: {
      latitude: -8.8780,
      longitude: -36.4880
    },
    summary:
      'Local de visitação religiosa situado em uma área elevada da cidade.',
    description:
      'O Santuário Mãe Rainha é um espaço de oração, contemplação e turismo religioso. Sua localização também proporciona uma visão privilegiada de diferentes áreas da cidade.'
  },
  {
    id: '7',
    name: 'Catedral de Santo Antônio',
    category: 'Turismo religioso',
    neighborhood: 'Centro',
    address: 'Praça Dom Moura, Centro, Garanhuns',
    openingHours: 'Aberta durante os horários de celebração e visitação',
    admission: 'Entrada gratuita',
    image: 'https://picsum.photos/seed/catedral-garanhuns/900/600',
    coordinate: {
      latitude: -8.8918,
      longitude: -36.4932
    },
    summary:
      'Igreja matriz da cidade, com arquitetura imponente e grande valor histórico e religioso.',
    description:
      'A Catedral de Santo Antônio é a principal igreja de Garanhuns e um símbolo da fé e da história local. A construção possui arquitetura marcante e é palco de celebrações religiosas importantes ao longo do ano, especialmente durante as festas juninas e o período natalino.'
  },
  {
    id: '8',
    name: 'Teatro Álvaro de Carvalho',
    category: 'Cultura',
    neighborhood: 'Centro',
    address: 'Rua José de Alencar, Centro, Garanhuns',
    openingHours: 'Conforme a programação de espetáculos',
    admission: 'Variável conforme o evento',
    image: 'https://picsum.photos/seed/teatro-garanhuns/900/600',
    coordinate: {
      latitude: -8.8905,
      longitude: -36.4948
    },
    summary:
      'Espaço dedicado a apresentações teatrais, musicais e eventos culturais da cidade.',
    description:
      'O Teatro Álvaro de Carvalho é um dos principais palcos culturais de Garanhuns. O espaço recebe peças de teatro, shows musicais, festivais e eventos comunitários. É um importante ponto de encontro para artistas e apreciadores da cultura local, contribuindo para a preservação da identidade artística da cidade.'
  }
];

export default places;
