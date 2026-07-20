# Conheça Garanhuns

Projeto final da disciplina de Programação em Dispositivos Móveis.

## Integrantes

- Alberto Breno
- Arthur Padilha
- Bruno Gomes
- Leandro Machado

## Descrição

O aplicativo apresenta uma lista de pontos turísticos,
culturais e naturais de Garanhuns — a Suíça Pernambucana.
O usuário pode pesquisar os locais e abrir uma tela com
informações detalhadas sobre cada ponto.

## Funcionalidades

- Listagem de 8 locais turísticos, culturais e naturais
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

## Tecnologias

- JavaScript
- React Native
- Expo
- React Navigation

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
│   └── PlaceCard
│       └── index.js
├── data
│   └── places.js
└── pages
    ├── Home
    │   └── index.js
    └── Details
        └── index.js
```

## Personalizações realizadas

- 8 locais cadastrados (2 a mais que o modelo base)
- Novo campo `admission` (entrada/ingresso) nos objetos e na tela de detalhes
- Cores personalizadas: verde `#1a6b4a` e verde claro `#e8f5ee`
- Título com tamanho 30 (personalizado)
- Cartões com borda, sombra e bordas arredondadas de 16px
- Texto introdutório: "Descubra os encantos turísticos, culturais e naturais da Suíça Pernambucana"
- Ícones emoji nos campos de informação
