# Desafio Final

O Desafio final consiste em 2 desafios médios e 3 desafios bônus, cuja complexidade é um pouco maior.

## Desafios médios

### 1. Implementar uma barra de pesquisa para filtrar os filmes

* Deve seguir o mesmo alinhamento de itens conforme a imagem abaixo:

  ![expected_search_bar](https://user-images.githubusercontent.com/12262451/134399887-50d5e821-d100-44bd-838f-1a200c0bd8fb.png)


* Quando o usuário começar a digitar, um ícone de limpar deve aparecer no canto direito, e quando pressionado, limpar os dados do campo de     texto, e fazer o teclado desaparecer, conforme o vídeo baixo:


  https://user-images.githubusercontent.com/12262451/134400069-d4430666-255a-4764-848d-54d22bc30924.mov


* Para cada letra digitada pelo usuário, deve aplicar um filtro na lista de filme para mostrar apenas os títulos do filmes que possuam determinado conjunto de caracteres, conforme o vídeo abaixo:


  https://user-images.githubusercontent.com/12262451/134398869-78964894-a6b1-400f-befa-86bf18ff0780.mov


* Caso o usuário digite um conjunto de caracteres que não esteja presente em nenhum título de nenhum filme, deverá mostrar uma messagem de erro, informando que não conseguiu encontrar nenhum filme com o conjunto de caracteres informado, conforme o vídeo abaixo:
  

  https://user-images.githubusercontent.com/12262451/134399590-ec8a3289-7da8-4e7a-9069-0409cb9715f3.mov


### 2. Implementar as sessões disponíveis para um determinado filme

**OBS.:** Para fazer manipulações de data, fica ao critério de cada um usar o objeto Date do próprio javascript, quanto usar algum pacote facilitador.

Na tela de **MovieDetail** será preciso listar as sessões disponíveis por dia, para isso, precisará ser feito alguns ajustes no código atual:

* O código do *SegmentedControl* está com os dias fixados, porém esses dias precisam ser interativos contanto da data atual + 3 dias subsequentes. Por exemplo:
    * Caso o dia atual seja segunda-feira, os valores do *SegmentedControl* deverá ser: 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira'.
    * Caso o dia atual seja domingo, os valores do *SegmentedControl* deverá ser: 'Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira'.
    
* Para buscar dados de um dia específico, será preciso fazer uma requisição GET para o seguinte endpoint: <br />
`https://osf-rn-training-bff.herokuapp.com/movies/{movieId}/sessions/date/{date}`<br />
`movieId` é referente ao id do filme <br />
`date` será a data correspondente ao dia da semana, essa data só será aceita no formato: <b>YYYY-MM-DD</b> outro formato o serviço retonará um erro.

* Para cada mudança de tabs do *SegmentedControl* deverá listar as sessões disponíveis do dia, e seguir algumas especificações:
    <br />
    * Enquanto estiver carregando as informações, um indicador de carregamento deverá ser exibido, conforme a imagem abaixo: 
    
    ![Screen Shot 2021-09-22 at 15 28 38](https://user-images.githubusercontent.com/12262451/134400967-13089f84-f2e0-46e9-8640-143eb33fd9e3.png)

    * Quando houver uma erro de requisição, deve mostrar uma mensagem de erro conforme a imagem abaixo: <br />
    
    ![Screen Shot 2021-09-22 at 15 32 49](https://user-images.githubusercontent.com/12262451/134401588-d24401b0-616b-4951-9ba4-3292beec0660.png)

    * Quando os dados forem obtidos com sucesso, os dados nome do cinema, horario e detalhes da sessão devem ser exibidos, conforme a imagem abaixo:
    
    ![Screen Shot 2021-09-22 at 15 33 37](https://user-images.githubusercontent.com/12262451/134401704-bd633207-e9d5-4d27-9c25-d2e2d3af33cd.png)

## Desafios Bônus

### 1. Implementar um sistema de cache de requisições usando por exemplo o pacote [React Query](https://react-query.tanstack.com/)

### 2. Adicionar o pacote [Lint-staged](https://github.com/okonet/lint-staged) para funcionar em conjunto com o [Husky](https://github.com/typicode/husky) ja configurado no projeto

### 3. Adicionar suporte para mais cidades (Ainda não disponível)

  Para acessarem todas as cidades disponíveis suportadas pela api, será necessário fazer uma requisição `GET` para o endpoint:<br />
  `https://osf-rn-training-bff.herokuapp.com/cities`
  <br />
  <br />
  Será preciso adicionar na tela de home um componente que será possivel selecionar qual cidade o usuário quer vizualizar os filmes disponíveis. Para listar os filmes disponíveis por uma cidade, deverá ser feita uma requisição `GET` para o endpoint:<br />
  `https://osf-rn-training-bff.herokuapp.com/movies/city/{cityId}`<br />
  `cityId` será retornado no endpoint de `/cities` <br /><br />
  
  Requisitos de layout:
  Devera haver um ícone que abrirá a lista de cidades, onde mostrará apenas o nome da cidade e se ela foi selecionada

    
## Avaliação

Deverá ser feito um fork desse projeto, adicionar no `README.md` o template abaixo e enviar um email para os facilitadores do curso seguindo esse padrão:<br /><br />
Título do email: Nome do aluno - Desafio final<br />
Conteúdo do email: `link do projeto no github`

## Desafios médios

### 1. Implementar uma barra de pesquisa para filtrar os filmes
- [ ] Concluído Total
- [ ] Concluído Parcial
- [ ] Não Concluído

**GIF, screenshot ou video da funcionalidade aqui**

### 2. Implementar as sessões disponíveis para um determinado filme
- [ ] Concluído Total
- [ ] Concluído Parcial
- [ ] Não Concluído

**GIF, screenshot ou video da funcionalidade aqui**

## Desafios bônus

### 1. Implementar um sistema de cache de requisições
- [ ] Concluído Total
- [ ] Concluído Parcial
- [ ] Não Concluído

**GIF, screenshot ou video da funcionalidade aqui**

### 2. Adicionar o pacote Lint-staged
- [ ] Concluído Total
- [ ] Concluído Parcial
- [ ] Não Concluído

**GIF, screenshot ou video da funcionalidade aqui**

### 3. Adicionar suporte para mais cidades
- [ ] Concluído Total
- [ ] Concluído Parcial
- [ ] Não Concluído

**GIF, screenshot ou video da funcionalidade aqui**

