const places = [
  {
    id: '1',
    name: 'Relógio das Flores',
    category: 'Ponto turístico',
    neighborhood: 'Heliópolis',
    address: 'Praça Tavares Correia, Heliópolis, Garanhuns - PE',
    openingHours: 'Espaço público com visitação livre',
    admission: 'Entrada gratuita',
    image: 'https://upload.wikimedia.org/wikipedia/commons/e/e0/Garanhuns-rel%C3%B3gio-flores.jpg',
    coordinate: {
      latitude: -8.8815,
      longitude: -36.4912
    },
    summary:
      'Principal cartão-postal de Garanhuns, localizado na Praça Tavares Correia, no bairro Heliópolis.',
    description:
      'Inaugurado em 25 de janeiro de 1981, o Relógio das Flores é o cartão-postal mais famoso de Garanhuns. O monumento possui 4 metros de diâmetro, mecanismo de cristal de quartzo e números formados por plantas e flores. Está estrategicamente localizado na entrada da cidade, sendo parada obrigatória para fotos. As flores ao redor do relógio são trocadas periodicamente, mantendo o local sempre vibrante e fotogênico.'
  },
  {
    id: '2',
    name: 'Parque Euclides Dourado',
    category: 'Parque urbano',
    neighborhood: 'Heliópolis',
    address: 'Avenida Júlio Brasileiro, 363-425, Heliópolis, Garanhuns - PE',
    openingHours: 'Segunda a sexta: 05h às 21h | Sábado, domingo e feriados: 05h às 19h',
    admission: 'Entrada gratuita',
    image: 'https://upload.wikimedia.org/wikipedia/commons/3/34/Parque_Euclides_Dourado_%28Parque_dos_Eucaliptos%29_-_Garanhuns%2C_Pernambuco%2C_Brasil.jpg',
    coordinate: {
      latitude: -8.8858,
      longitude: -36.4925
    },
    summary:
      'Também conhecido como Parque dos Eucaliptos, é o maior parque urbano de Garanhuns, com 8 hectares de área verde.',
    description:
      'Inaugurado em 1925, o Parque Euclides Dourado é o parque mais antigo de Garanhuns e um dos cinco mais antigos do Brasil. Conhecido popularmente como Parque dos Eucaliptos, possui 8 hectares com pista de cooper, quadras poliesportivas, pista de skate, parque infantil, academia da cidade, planetário e biblioteca pública. Durante o Festival de Inverno de Garanhuns, o parque recebe apresentações musicais de diversos gêneros.'
  },
  {
    id: '3',
    name: 'Parque Ruber van der Linden',
    category: 'Parque natural',
    neighborhood: 'Centro',
    address: 'Rua Manoel Clemente, Santo Antônio, Garanhuns - PE',
    openingHours: 'Diariamente: 08h às 17h',
    admission: 'Entrada gratuita',
    image: 'https://upload.wikimedia.org/wikipedia/commons/8/8a/Parque_Ruber_Van_Der_Linden_-_Garanhuns%2C_Pernambuco%2C_Brasil.jpg',
    coordinate: {
      latitude: -8.8902,
      longitude: -36.4940
    },
    summary:
      'Conhecido como Pau Pombo, é uma reserva ambiental no centro da cidade, com vegetação nativa e lago artificial.',
    description:
      'O Parque Ruber van der Linden, mais conhecido como Pau Pombo, é uma área de preservação ambiental localizada no centro de Garanhuns. O nome popular faz alusão à grande quantidade de árvores e pombos existentes no local. O parque conta com vegetação nativa, lago artificial, coreto e o busto do engenheiro Ruber van der Linden, que dá nome oficial ao espaço. É um destino certo para quem deseja contato com a natureza, observar bromélias e fazer piqueniques.'
  },
  {
    id: '4',
    name: 'Castelo de João Capão',
    category: 'Construção histórica',
    neighborhood: 'Heliópolis',
    address: 'Rua Marcos Antônio de Andrade Costa Junior, Heliópolis, Garanhuns - PE',
    openingHours: 'Visitação conforme disponibilidade do espaço',
    admission: 'Consultar no local',
    image: 'https://upload.wikimedia.org/wikipedia/commons/2/21/BRUNO_LIMA_CASTELO_DE_JO%C3%83O_CAP%C3%83O_GARANHUNS_PE.jpg',
    coordinate: {
      latitude: -8.8790,
      longitude: -36.4895
    },
    summary:
      'Construção singular idealizada por João Ferreira da Silva, o João Capão, que realizou o sonho de construir seu próprio castelo.',
    description:
      'O Castelo de João Capão é fruto do sonho de João Ferreira da Silva, um eletricista e encanador que, desde criança, alimentava o desejo de construir um castelo medieval. A construção teve início no começo dos anos 2000 e foi erguida com recursos próprios. O castelo tornou-se uma das atrações mais curiosas e visitadas de Garanhuns, despertando o interesse de turistas pela sua arquitetura singular e pela história inspiradora de seu criador. João Capão faleceu em 2016, mas sua família mantém o espaço aberto à visitação.'
  },
  {
    id: '5',
    name: 'Centro Cultural Alfredo Leite Cavalcanti',
    category: 'Cultura',
    neighborhood: 'Centro',
    address: 'Avenida Afonso Pena, 85, Santo Antônio, Garanhuns - PE',
    openingHours: 'Conforme a programação cultural',
    admission: 'Entrada gratuita para a maioria dos eventos',
    image: 'https://upload.wikimedia.org/wikipedia/commons/4/49/Centro_Cultural_-_Garanhuns%2C_Pernambuco%2C_Brasil.jpg',
    coordinate: {
      latitude: -8.8915,
      longitude: -36.4935
    },
    summary:
      'Antiga Estação Ferroviária de Garanhuns, tombada como patrimônio histórico, hoje funciona como centro cultural e teatro.',
    description:
      'O Centro Cultural Alfredo Leite Cavalcanti funciona no prédio da antiga Estação Ferroviária de Garanhuns, inaugurada em 1887 como parte do ramal da Estrada de Ferro Sul de Pernambuco. A estação funcionou até a década de 1960 e, em 1979, foi restaurada e transformada em centro cultural. O prédio preserva a arquitetura inglesa do século XIX e abriga o Teatro Luiz Souto Dourado, além de exposições e atividades culturais. O espaço é tombado pela FUNDARPE como patrimônio histórico.'
  },
  {
    id: '6',
    name: 'Santuário Mãe Rainha',
    category: 'Turismo religioso',
    neighborhood: 'Severiano Moraes Filho',
    address: 'Rua XV de Novembro, 219, Severiano Moraes Filho, Garanhuns - PE',
    openingHours: 'Segunda a sexta: 06h30 às 17h | Sábado: 06h30 às 12h',
    admission: 'Entrada gratuita',
    image: 'https://upload.wikimedia.org/wikipedia/commons/6/63/Santu%C3%A1rio_M%C3%A3e_Rainha_-_Garanhuns%2C_Pernambuco%2C_Brasil%281%29.jpg',
    coordinate: {
      latitude: -8.8780,
      longitude: -36.4880
    },
    summary:
      'Santuário do movimento de Schoenstatt, localizado no bairro Severiano Moraes Filho, voltado à oração e contemplação.',
    description:
      'O Santuário Mãe Rainha é um espaço de oração e turismo religioso, gerenciado pelas Irmãs de Maria de Schoenstatt. Localizado em uma área tranquila da cidade, o santuário atrai fiéis e visitantes que buscam momentos de paz e espiritualidade. Sua localização também proporciona uma bela vista de diferentes áreas de Garanhuns. O movimento de Schoenstatt tem forte presença na cidade, e o santuário recebe romarias e celebrações ao longo do ano.'
  },
  {
    id: '7',
    name: 'Catedral de Santo Antônio',
    category: 'Turismo religioso',
    neighborhood: 'Centro',
    address: 'Avenida Santo Antônio, 5, Santo Antônio, Garanhuns - PE',
    openingHours: 'Aberta durante os horários de celebração e visitação',
    admission: 'Entrada gratuita',
    image: 'https://upload.wikimedia.org/wikipedia/commons/1/13/Igreja_Matriz_de_Santo_Ant%C3%B4nio_-_Garanhuns%2C_Pernambuco%2C_Brasil.jpg',
    coordinate: {
      latitude: -8.8918,
      longitude: -36.4932
    },
    summary:
      'Primeiro templo católico de Garanhuns, datado de 1859, elevado a catedral em 1918 com a criação da Diocese.',
    description:
      'A Catedral de Santo Antônio é o primeiro templo católico erguido em Garanhuns, datado de 1859 e restaurado em 1872. Foi elevada à categoria de catedral em 1918, quando da criação da Diocese de Garanhuns. Sua fachada tem cinco portas em madeira com arcaduras e elementos decorativos em massa, duas janelas à altura do coro, dois óculos com vitrais e uma torre quadrangular com campanário. No alto, encontra-se a imagem de Santo Antônio, esculpida em concreto pelo artista João Bina. A catedral é um símbolo da fé e da história local.'
  },
  {
    id: '8',
    name: 'Cristo do Magano',
    category: 'Turismo religioso',
    neighborhood: 'Magano',
    address: 'Alto do Magano, Magano, Garanhuns - PE',
    openingHours: 'Espaço público com visitação livre',
    admission: 'Entrada gratuita',
    image: 'https://upload.wikimedia.org/wikipedia/commons/9/9c/Cristo_do_Magano_-_Garanhuns%2C_Pernambuco%2C_Brasil.jpg',
    coordinate: {
      latitude: -8.8783,
      longitude: -36.5183
    },
    summary:
      'Monumento no ponto mais elevado de Garanhuns (1.030 m), com vista panorâmica de 360 graus da cidade.',
    description:
      'O Cristo do Magano está situado no Alto do Magano, o ponto mais elevado de Garanhuns, a 1.030 metros acima do nível do mar, sendo considerado o Cristo de maior altitude do Brasil. A estátua foi esculpida em 1954 pelo artista Renato Pantaleão, tem 4 metros de altura e está sobre um mirante em forma de fortaleza de pedra. Do alto, é possível observar grande parte da área urbana de Garanhuns e, em dias de céu limpo, extensas áreas do Agreste pernambucano. O local é um dos mais visitados da cidade, especialmente no fim da tarde para apreciar o pôr do sol.'
  }
];

export default places;
