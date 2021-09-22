# Desafio Final

O Desafio final consiste em 2 desafios médios e um 3 desafio bônus, cuja complexidade é um pouco maior.

## Desafios médios

### 1. Implementar uma barra de pesquisa para filtrar os filmes

A barra de pesquisa deve ter o seguinte funcionamento:
  1. Deve seguir o mesmo alinhamento de itens conforme a imagem abaixo:
  **imagem da searchbar aqui**
  2. Quando o usuário começar a digitar, um ícone de limpar deve aparecer no canto direito, e quando pressionado, limpar os dados do campo de texto, e fazer o teclado desaparecer, conforme o vídeo baixo
  **video de pressionando o o x da searchbar**
  3. Para cada letra digitada pelo usuário, deve aplicar um filtro na lista de filme para mostrar apenas os títulos do filmes que possuam determinado conjunto de caracteres, conforme o vídeo abaixo:
  **video filtrando dados**
  4. Caso o usuário digite um conjunto de caracteres que não esteja presente em nenhum título de nenhum filme, deverá mostrar uma messagem de erro, informando que não conseguiu encontrar nenhum filme com o conjunto de caracteres informado, conforme o vídeo abaixo:
  **video mostrando tela de erro ao tentar filtrar caracteres que nao existem**
  
### 2. Implementar as sessões disponíveis para um determinado filme

Na tela de **MovieDetail** será preciso listar as sessões disponíveis por dia, para isso, precisará ser feito alguns ajustes no código atual:

**OBS.:** Para fazer manipulações de data, fica ao critério de cada um usar o objeto Date do próprio javascript, quanto usar algum pacote facilitador.

1. O código do *SegmentedControl* está com os dias fixados, porém esses dias precisam ser interativos contanto da data atual + 3 dias subsequentes. Por exemplo:
    * Caso o dia atual seja segunda-feira, os valores do *SegmentedControl* deverá ser: 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira'.
    * Caso o dia atual seja domingo, os valores do *SegmentedControl* deverá ser: 'Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira'.
    
2. Para buscar dados de um dia específico, será preciso fazer uma requisição GET para o seguinte endpoint: <br />
`https://osf-rn-training-bff.herokuapp.com/movies/{movieId}/sessions/date/{date}`<br />
`movieId` é referente ao id do filme <br />
`date` será a data correspondente ao dia da semana, essa data só será aceita no formato: <b>YYYY-MM-DD</b> outro formato o serviço retonará um erro.

3. Para cada mudança de tabs do *SegmentedControl* deverá listar as sessões disponíveis do dia, e seguir algumas especificações:
    <br />
    3.1 Enquanto estiver carregando as informações, um indicador de carregamento deverá ser exibido, conforme a imagem abaixo: 
    **imagem de loading**
    <br />
    3.2 Quando houver uma erro de requisição, deve mostrar uma mensagem de erro conforme a imagem abaixo: <br />
    <br />
    **imagem de erro**
    3.3 Quando os dados forem obtidos com sucesso, os dados nome do cinema, horario e detalhes da sessão devem ser exibidos, conforme a imagem abaixo: <br />
    **image de dados da sessão**
    
    
## Desafios Bônus

### 1. Implementar um sistema de cache de requisições usando por exemplo o pacote [React Query](https://react-query.tanstack.com/)

### 2. Adicionar o pacote [Lint-staged](https://github.com/okonet/lint-staged) para funcionar em conjunto com o [Husky](https://github.com/typicode/husky) ja configurado no projeto

### 3. Adicionar suporte para mais cidades
  
  Para acessarem todas as cidades disponíveis suportadas pela api, será necessário fazer uma requisição `GET` para o endpoint:<br />
  `https://osf-rn-training-bff.herokuapp.com/cities`
  <br />
  <br />
  Será preciso adicionar na tela de home um componente que será possivel selecionar qual cidade o usuário quer vizualizar os filmes disponíveis. Para listar os filmes disponíveis por uma cidade, deverá ser feita uma requisição `GET` para o endpoint:<br />
  `https://osf-rn-training-bff.herokuapp.com/movies/city/{cityId}`<br />
  `cityId` será retornado no endpoint de `/cities` <br /><br />
  
  Requisitos de layout:
  Devera haver um ícone que abrirá a lista de cidades, onde mostrará apenas o nome da cidade e se ela foi selecionada

    


