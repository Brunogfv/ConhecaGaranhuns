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
      longitude: -36.4767
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
      latitude: -8.8835,
      longitude: -36.4845
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
      latitude: -8.8769,
      longitude: -36.4854
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
      latitude: -8.8910,
      longitude: -36.4930
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
      latitude: -8.8770,
      longitude: -36.4870
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
      latitude: -8.8906,
      longitude: -36.4920
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
  },
  {
    id: '9',
    name: 'Seminário São José',
    category: 'Construção histórica',
    neighborhood: 'Heliópolis',
    address: 'Avenida Rui Barbosa, 200, Heliópolis, Garanhuns - PE',
    openingHours: 'Visitação mediante agendamento | Capela aberta durante as celebrações',
    admission: 'Entrada gratuita',
    image: 'https://upload.wikimedia.org/wikipedia/commons/3/3b/Semin%C3%A1rio_S%C3%A3o_Jos%C3%A9_-_Garanhuns%2C_Pernambuco%2C_Brasil.jpg',
    coordinate: {
      latitude: -8.8875,
      longitude: -36.4925
    },
    summary:
      'Histórico seminário diocesano com ampla capela e belos jardins, marco da formação religiosa em Garanhuns desde 1927.',
    description:
      'O Seminário São José teve sua construção iniciada em 1926 e foi inaugurado em 16 de julho de 1927, sob a liderança do primeiro bispo de Garanhuns, Dom João Tavares de Moura. Funcionou inicialmente como seminário menor, abrigando seminaristas do ensino fundamental ao secundário, e em 1952 foi inaugurado o seminário maior. Destaca-se pela arquitetura imponente, com tijolos aparentes e um belo pátio interno cercado de colunas, arcos e vegetação. A capela é ampla e nos jardins frontais há um sino cercado de flores, sendo um dos imóveis históricos mais notáveis da cidade.'
  },
  {
    id: '10',
    name: 'Mosteiro de São Bento',
    category: 'Turismo religioso',
    neighborhood: 'Centro',
    address: 'Praça Tiradentes, 23, Centro, Garanhuns - PE',
    openingHours: 'Aberto a visitantes | Recomenda-se contato prévio',
    admission: 'Entrada gratuita',
    image: 'https://upload.wikimedia.org/wikipedia/commons/9/96/WalberMoura_MosteiroSaoBento_Garanhuns_PE_%2840013199575%29.jpg',
    coordinate: {
      latitude: -8.8908,
      longitude: -36.4952
    },
    summary:
      'Mosteiro beneditino fundado em 1940, famoso pela arquitetura medieval e pelos artesanatos, ícones, velas e licores produzidos pelos monges.',
    description:
      'O Mosteiro de São Bento de Garanhuns foi fundado em 3 de abril de 1940, com o objetivo de formar monges para o Nordeste do Brasil, e sua arquitetura é inspirada nos mosteiros beneditinos italianos da Idade Média. A cripta guarda o mural "O Milagre da Obediência", de Eros Martim Gonçalves, e o mosteiro possui fábrica de hóstias e hospedaria para receber visitantes e retiros. Os monges produzem artesanato, ícones, velas e licores, vendidos na loja do mosteiro. É um espaço de espiritualidade, silêncio e retiro, sendo um dos atrativos religiosos mais visitados da cidade.'
  },
  {
    id: '11',
    name: 'Palácio Municipal Celso Galvão',
    category: 'Construção histórica',
    neighborhood: 'Centro',
    address: 'Avenida Santo Antônio, 126, Centro, Garanhuns - PE',
    openingHours: 'Segunda a sexta: 08h às 17h',
    admission: 'Visitação externa gratuita',
    image: 'https://upload.wikimedia.org/wikipedia/commons/b/b4/Garanhuns-Prefeitura-Pal%C3%A1cio-Celso-Galv%C3%A3o.jpg',
    coordinate: {
      latitude: -8.8905,
      longitude: -36.4938
    },
    summary:
      'Sede histórica da Prefeitura de Garanhuns, marco arquitetônico do centro, especialmente famoso por suas decorações natalinas.',
    description:
      'Sede oficial do Poder Executivo de Garanhuns, o Palácio Municipal foi inaugurado em maio de 1943 pelo interventor Agamenon Magalhães, tendo sido concluído durante a gestão do prefeito Celso Galvão, que lhe empresta o nome. O prédio conserva suas linhas arquitetônicas originais e é um importante ponto de referência histórico no centro comercial da cidade. Todos os anos torna-se atração no evento "Encantos do Natal", com iluminações e decorações que atraem grande público.'
  },
  {
    id: '12',
    name: 'Praça Souto Filho',
    category: 'Praça',
    neighborhood: 'Heliópolis',
    address: 'Praça Souto Filho, Heliópolis, Garanhuns - PE',
    openingHours: 'Espaço público com visitação livre',
    admission: 'Entrada gratuita',
    image: 'https://upload.wikimedia.org/wikipedia/commons/7/71/Pra%C3%A7a_Dom_Moura_-_Garanhuns%2C_Pernambuco%2C_Brasil.jpg',
    coordinate: {
      latitude: -8.8895,
      longitude: -36.4952
    },
    summary:
      'Praça central conhecida pela Fonte Luminosa, que ao entardecer oferece um belo espetáculo de luzes.',
    description:
      'A Praça Souto Filho, popularmente chamada de Praça da Fonte Luminosa, é um dos cartões-postais de Garanhuns. Sua Fonte Luminosa oferece uma iluminação belíssima ao entardecer e à noite, atraindo moradores e turistas. A praça foi reaberta com novo design e nova fonte após reforma. Durante o Festival de Inverno de Garanhuns (FIG), o local recebe a Praça da Palavra, espaço dedicado à literatura.'
  },
  {
    id: '13',
    name: 'Praça Mestre Dominguinhos',
    category: 'Praça',
    neighborhood: 'Heliópolis',
    address: 'Rua Coronel Antônio Vítor, 100, Heliópolis, Garanhuns - PE',
    openingHours: 'Espaço público com visitação livre',
    admission: 'Entrada gratuita',
    image: 'https://upload.wikimedia.org/wikipedia/commons/b/b3/Garanhuns-p%C3%B3rtico.jpg',
    coordinate: {
      latitude: -8.8905,
      longitude: -36.4931
    },
    summary:
      'Praça cultural que homenageia o sanfoneiro Dominguinhos e é o principal palco do Festival de Inverno de Garanhuns (FIG).',
    description:
      'A Praça Mestre Dominguinhos é um dos principais espaços culturais e de lazer de Garanhuns, homenageando o consagrado sanfoneiro e compositor pernambucano Dominguinhos. É o palco principal do Festival de Inverno de Garanhuns (FIG), um dos maiores festivais culturais do Nordeste, reunindo música, arte e tradição. Com arquitetura marcante e áreas de convivência, a praça recebe shows de ritmos variados como forró, MPB, samba e rock ao longo do ano. Também abriga o projeto que celebra a memória do artista.'
  },
  {
    id: '14',
    name: 'Parque Esportivo Prefeito Luís Carlos de Oliveira',
    category: 'Parque urbano',
    neighborhood: 'Boa Vista',
    address: 'Bairro Boa Vista, Garanhuns - PE',
    openingHours: 'Diariamente: 05h às 22h',
    admission: 'Entrada gratuita',
    image: 'https://upload.wikimedia.org/wikipedia/commons/7/79/Parque_em_Garanhuns.jpg',
    coordinate: {
      latitude: -8.8961,
      longitude: -36.4855
    },
    summary:
      'Considerado o maior parque esportivo de Pernambuco, com mais de 25 mil m² e diversos equipamentos gratuitos de esporte e lazer.',
    description:
      'Inaugurado em 28 de dezembro de 2023 no bairro Boa Vista, no antigo Parque de Exposição de Animais, o Parque Esportivo Prefeito Luís Carlos de Oliveira é apontado como o maior parque esportivo de Pernambuco, com mais de 25 mil m². Conta com cerca de 14 equipamentos, incluindo campo de futebol, pista de corrida, quadras de tênis, vôlei e basquete 3x3, beach tennis, arena teatro, playground, academia e espaço pet. Tornou-se rapidamente um dos principais espaços de lazer e convivência da cidade.'
  },
  {
    id: '15',
    name: 'Vinícola Vale das Colinas',
    category: 'Enoturismo',
    neighborhood: 'Zona Rural',
    address: 'Fazenda São Silvestre, Zona Rural, Garanhuns - PE',
    openingHours: 'Visitas e degustações mediante agendamento',
    admission: 'Visitas guiadas (consultar valores)',
    image: 'https://upload.wikimedia.org/wikipedia/commons/2/21/Sert%C3%A3o_de_Guaranhuns_-PE_-_panoramio.jpg',
    coordinate: {
      latitude: -8.9399,
      longitude: -36.5235
    },
    summary:
      'Primeira vinícola de Garanhuns e do Planalto da Borborema, destino de enoturismo com vinhos de altitude.',
    description:
      'A Vinícola Vale das Colinas é a primeira vinícola de Garanhuns e do Planalto da Borborema, aproveitando a altitude de quase 900 metros e o clima frio característico da região para o cultivo de uvas e produção de vinhos. Localizada na zona rural, oferece visitas guiadas mediante agendamento, com degustações e contato com o processo de vinificação. Ajuda a consolidar Garanhuns como um novo terroir brasileiro e é um dos principais destinos de enoturismo do interior de Pernambuco.'
  },
  {
    id: '16',
    name: 'Parque Natural das Nascentes do Rio Mundaú',
    category: 'Reserva natural',
    neighborhood: 'Várzea',
    address: 'Área das nascentes do Rio Mundaú, Várzea, Garanhuns - PE',
    openingHours: 'Visitação mediante agendamento',
    admission: 'Entrada gratuita',
    image: 'https://upload.wikimedia.org/wikipedia/commons/6/62/Paisagem_-_panoramio_-_MAC%C3%8DLIO_GOMES.jpg',
    coordinate: {
      latitude: -8.9105,
      longitude: -36.5085
    },
    summary:
      'Unidade de conservação de 34 hectares que protege as nascentes do Rio Mundaú, um dos mais importantes rios do agreste pernambucano.',
    description:
      'O Parque Natural Municipal das Nascentes do Rio Mundaú é uma unidade de conservação de proteção integral com cerca de 34 hectares, localizada entre a zona urbana e rural de Garanhuns. A área preserva as nascentes do Rio Mundaú e abriga rica biodiversidade, com aproximadamente 65 espécies de flora e 66 de fauna catalogadas. O parque possui plano de manejo e é palco de ações de educação ambiental e reflorestamento com estudantes da região. É um dos principais pontos de ecoturismo e preservação ambiental do município.'
  },
  {
    id: '17',
    name: 'Igreja de São Sebastião',
    category: 'Turismo religioso',
    neighborhood: 'Boa Vista',
    address: 'Praça São Sebastião, 142, Boa Vista, Garanhuns - PE',
    openingHours: 'Missas: quinta e sábado às 19h30 | Domingo às 07h, 11h e 19h30',
    admission: 'Entrada gratuita',
    image: 'https://upload.wikimedia.org/wikipedia/commons/9/90/Garanhuns_-_Pernambuco_-_Brasil%282%29.jpg',
    coordinate: {
      latitude: -8.8905,
      longitude: -36.4975
    },
    summary:
      'Igreja histórica do bairro Boa Vista, cuja construção nasceu de promessas feitas durante uma epidemia de varíola no fim do século XIX.',
    description:
      'A história da Igreja de São Sebastião está ligada ao surgimento e crescimento do bairro Boa Vista, em Garanhuns. Sua construção teve início em 1894, a partir de votos feitos durante uma epidemia de varíola, e o templo foi inaugurado em 7 de setembro de 1922. Ao longo de mais de um século passou por várias reformas que modificaram significativamente sua estrutura original. Hoje é sede de paróquia da Diocese de Garanhuns e ponto de referência religiosa do bairro.'
  },
  {
    id: '18',
    name: 'Igreja de Nossa Senhora do Perpétuo Socorro',
    category: 'Turismo religioso',
    neighborhood: 'Heliópolis',
    address: 'Avenida Simoa Gomes, 27, Heliópolis, Garanhuns - PE',
    openingHours: 'Missas: sábado às 16h | Domingo às 07h, 09h e 19h',
    admission: 'Entrada gratuita',
    image: 'https://upload.wikimedia.org/wikipedia/commons/4/46/Garanhuns_-_Pernambuco_-_Brasil%283%29.jpg',
    coordinate: {
      latitude: -8.8862,
      longitude: -36.4938
    },
    summary:
      'Conhecida como "Igreja do Cuscuz" pelo formato abobadado de sua cúpula, é um dos templos mais reconhecíveis de Garanhuns.',
    description:
      'A Igreja de Nossa Senhora do Perpétuo Socorro é apelidada de "Igreja do Cuscuz" devido ao formato arredondado e abobadado de sua cúpula, que lembra o alimento típico. A construção começou em 1957 e foi inaugurada em 8 de dezembro de 1962, com projeto dos engenheiros Albert Reithler, premiado em Portugal e Paris, e seu filho Pierre Reithler. A torre sineira foi acrescentada em 1970. O convento associado ao templo deu origem ao Hospital Perpétuo Socorro.'
  },
  {
    id: '19',
    name: 'Centro Cultural Sesc Garanhuns',
    category: 'Centro cultural',
    neighborhood: 'Centro',
    address: 'Rua Cônego Benigno Lira, Centro, Garanhuns - PE',
    openingHours: 'Terça: 08h às 20h | Quarta a sábado: 08h às 22h | Domingo: 11h às 20h',
    admission: 'Entrada gratuita (algumas atividades podem ter custo)',
    image: 'https://upload.wikimedia.org/wikipedia/commons/e/e1/R%C3%A1dio_Jornal_-_Garanhuns%2C_Pernambuco%2C_Brasil.jpg',
    coordinate: {
      latitude: -8.8912,
      longitude: -36.4955
    },
    summary:
      'Equipamento cultural do Sesc dedicado a artes visuais, música, teatro e formação cultural em Garanhuns.',
    description:
      'Inaugurado em 2019, o Centro Cultural Sesc Garanhuns oferece programação sistemática de artes e cultura, incluindo exposições, oficinas, apresentações musicais e teatrais. Possui galerias de artes visuais e espaços de convivência voltados à formação artística da comunidade. É um dos principais polos culturais contemporâneos da cidade, complementando o circuito histórico do centro.'
  },
  {
    id: '20',
    name: 'Casa do Artesão',
    category: 'Cultura',
    neighborhood: 'Centro',
    address: 'Praça Dom Moura, Centro, Garanhuns - PE',
    openingHours: 'Segunda a sexta: 08h às 17h | Sábado: 08h às 12h',
    admission: 'Entrada gratuita',
    image: 'https://upload.wikimedia.org/wikipedia/commons/6/6e/Garanhuns_-_Pernambuco_-_Brasil%281%29.jpg',
    coordinate: {
      latitude: -8.8908,
      longitude: -36.4942
    },
    summary:
      'Espaço dedicado à exposição e comercialização do artesanato típico de Garanhuns e do agreste pernambucano.',
    description:
      'A Casa do Artesão reúne e valoriza a produção artesanal local, oferecendo aos visitantes peças típicas do agreste de Pernambuco. O espaço funciona como vitrine para os artesãos da região, promovendo a cultura material e a economia criativa. É um ponto de referência para quem busca conhecer e adquirir o artesanato garanhuense, com trabalhos em cerâmica, bordado, madeira e fibras naturais.'
  },
  {
    id: '21',
    name: 'Feira do Troca (CEAGA)',
    category: 'Feira',
    neighborhood: 'São José',
    address: 'CEAGA, Avenida Frei Caneca, São José, Garanhuns - PE',
    openingHours: 'Domingos, a partir das 05h até por volta do meio-dia',
    admission: 'Entrada gratuita',
    image: 'https://upload.wikimedia.org/wikipedia/commons/3/37/Garanhuns_-_Pernambuco_-_Brasil%284%29.jpg',
    coordinate: {
      latitude: -8.8952,
      longitude: -36.4884
    },
    summary:
      'Tradicional feira dominical de trocas, onde se negociam de tudo, de pássaros e ferramentas a antiguidades e comidas típicas.',
    description:
      'A Feira do Troca acontece aos domingos no CEAGA (Centro de Abastecimento de Garanhuns) e é uma das mais tradicionais e curiosas manifestações populares da cidade. Nela, vendedores e visitantes trocam, vendem e barganham objetos usados, ferramentas, animais, pássaros, plantas, antiguidades e comidas típicas como pastéis. É um ponto de encontro cultural que reúne moradores de Garanhuns e de cidades vizinhas do Agreste, com ambiente informal e comércio de rua que fazem dela uma experiência autêntica.'
  },
  {
    id: '22',
    name: 'Distrito de Iratama',
    category: 'Distrito rural',
    neighborhood: 'Iratama',
    address: 'Distrito de Iratama, Zona Rural, Garanhuns - PE',
    openingHours: 'Acesso livre (visitação diurna)',
    admission: 'Entrada gratuita',
    image: 'https://upload.wikimedia.org/wikipedia/commons/7/70/Garanhuns_%28PE%29_vista_do_Monte_Magano.jpg',
    coordinate: {
      latitude: -8.8347,
      longitude: -36.4589
    },
    summary:
      'Um dos distritos rurais de Garanhuns, marcado por paisagens de serra, clima ameno e atividade agrícola.',
    description:
      'Iratama é um dos distritos rurais que compõem o município de Garanhuns, ao lado de Miracica e São Pedro. Situado em meio às colinas do Agreste, caracteriza-se pela paisagem rural, clima ameno e atividades ligadas à agricultura familiar e à pecuária. Preserva o modo de vida do interior pernambucano e oferece cenários naturais para o turismo rural, sendo uma opção para quem deseja conhecer o entorno de Garanhuns além do perímetro urbano.'
  },
  {
    id: '23',
    name: 'Distrito de São Pedro',
    category: 'Distrito rural',
    neighborhood: 'São Pedro',
    address: 'Distrito de São Pedro, Zona Rural, Garanhuns - PE',
    openingHours: 'Acesso livre (visitação diurna)',
    admission: 'Entrada gratuita',
    image: 'https://upload.wikimedia.org/wikipedia/commons/0/09/Vista_parcial_de_Garanhuns%2C_PE.jpg',
    coordinate: {
      latitude: -8.9241,
      longitude: -36.5342
    },
    summary:
      'Distrito rural de Garanhuns com paisagens de serra e forte vocação agrícola.',
    description:
      'São Pedro é um dos distritos rurais do município de Garanhuns, junto a Iratama e Miracica. Localizado na região serrana do Agreste, tem forte vocação agrícola e mantém características típicas da vida no campo. Suas paisagens de colinas e clima fresco fazem parte do potencial de turismo rural da cidade, sendo um destino para quem busca tranquilidade e contato com a natureza fora do centro urbano.'
  },
  {
    id: '24',
    name: 'Distrito de Miracica',
    category: 'Distrito rural',
    neighborhood: 'Miracica',
    address: 'Distrito de Miracica, Zona Rural, Garanhuns - PE',
    openingHours: 'Acesso livre (visitação diurna)',
    admission: 'Entrada gratuita',
    image: 'https://upload.wikimedia.org/wikipedia/commons/b/b8/Garanhuns-vista-geral.jpg',
    coordinate: {
      latitude: -8.8563,
      longitude: -36.5501
    },
    summary:
      'Distrito rural de Garanhuns cercado por serras e propriedades agrícolas.',
    description:
      'Miracica é um dos distritos rurais que integram o município de Garanhuns, junto de Iratama e São Pedro. Cercado por serras e áreas de cultivo, mantém o caráter interiorano do Agreste pernambucano. A economia local gira em torno da agricultura e da pecuária de pequeno porte, e suas paisagens naturais o incluem entre os destinos de turismo rural do município.'
  },
  {
    id: '25',
    name: 'Lago Mundaú',
    category: 'Balneário',
    neighborhood: 'Zona Rural',
    address: 'Açude Mundaú, Rio Mundaú, Garanhuns - PE',
    openingHours: 'Acesso livre durante o dia',
    admission: 'Entrada gratuita',
    image: 'https://upload.wikimedia.org/wikipedia/commons/6/62/Paisagem_-_panoramio_-_MAC%C3%8DLIO_GOMES.jpg',
    coordinate: {
      latitude: -8.9156,
      longitude: -36.5234
    },
    summary:
      'Reservatório do Rio Mundaú com capacidade de quase 2 milhões de m³, usado para abastecimento e lazer.',
    description:
      'O Lago Mundaú (Açude Mundaú) é o mais importante reservatório da bacia hidrográfica de Garanhuns, com capacidade de aproximadamente 1.968.600 m³. Formado a partir do Rio Mundaú, tem papel fundamental no abastecimento de água da cidade. Suas margens e o espelho d\'água compõem paisagens que atraem visitantes para contemplação e lazer, integrando o conjunto de recursos hídricos que renderam a Garanhuns a fama de terra de nascentes e fontes minerais.'
  }
];

export default places;
