# Conheça Garanhuns

Projeto final da disciplina de Programação em Dispositivos Móveis.

## Integrantes

- **Alberto Breno** — Desenvolvimento da tela principal (Home): FlatList, filtro por categoria (chips), toggle entre lista e mapa, botão de favoritos na home
- **Arthur Padilha** — Criação de componentes reutilizáveis (PlaceCard), implementação do campo de pesquisa com filtro por nome/categoria/bairro, indicador de carregamento e mensagem de lista vazia
- **Bruno Gomes** — Configuração inicial do projeto, criação do repositório GitHub, configuração do React Navigation (App.js), estrutura de pastas e integração geral
- **Leandro Machado** — Desenvolvimento da tela de detalhes (informações, mapa, favoritos, compartilhar), campo personalizado `admission`, personalização visual (cores, imagens reais, README)

## Descrição

O aplicativo apresenta uma lista de pontos turísticos,
culturais e naturais de Garanhuns — a Suíça Pernambucana.
O usuário pode pesquisar os locais e abrir uma tela com
informações detalhadas sobre cada ponto.

## Funcionalidades

- Listagem de 25 locais turísticos, culturais, religiosos e naturais
- Pesquisa por nome, categoria ou bairro
- Filtro por categoria (chips)
- Mapa interativo (lista/mapa toggle)
- Mini-mapa na tela de detalhes
- Navegação entre telas (Home e Detalhes)
- Tela de detalhes com informações completas
- Indicador de carregamento (ActivityIndicator)
- Tratamento de lista vazia
- Campo personalizado: informação sobre entrada/ingresso
- Imagens reais via Wikimedia Commons
- Endereços corrigidos com dados oficiais
- Sistema de favoritos com persistência (AsyncStorage)
- Compartilhamento do local (Share nativo)

## Tecnologias

- JavaScript
- React Native
- Expo
- React Navigation
- @expo/vector-icons (ícones)
- react-native-maps (mapa)
- AsyncStorage (persistência dos favoritos)

## Como executar

1. Instale as dependências:

```bash
npm install
```

2. Inicie o projeto:

```bash
npx expo start
```

3. Escaneie o QR Code com o Expo Go ou pressione `w` para abrir no navegador.

## Estrutura

```
src
├── components
│   ├── PlaceCard
│   │   └── index.js
│   └── MapViewWrapper
│       ├── index.native.js
│       └── index.web.js
├── data
│   └── places.js
├── hooks
│   └── useFavorites.js
└── pages
    ├── Home
    │   └── index.js
    └── Details
        └── index.js
```

## Personalizações realizadas

- 25 locais cadastrados (muito acima do mínimo de 8), pesquisados em fontes reais (Prefeitura de Garanhuns, Wikipédia, GuiaGaranhuns)
- Novo campo `admission` (entrada/ingresso) nos objetos e na tela de detalhes
- Cores personalizadas: verde `#1a6b4a` e verde claro `#e8f5ee`
- Título com tamanho 30 (personalizado)
- Cartões com borda, sombra e bordas arredondadas de 16px
- Texto introdutório apresentado em um modal de boas-vindas na primeira abertura (persistido com AsyncStorage)
- Ícones vetoriais (@expo/vector-icons) nos campos de informação e ações
