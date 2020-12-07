# GAMES COLAB

Será implementado, utilizando a MEAN Stack (Mongo, Express, Angular e Node), um sistema colaborativo para cadastramento, avaliação e consulta de jogos.

Usamos do ![AngularMaterial](https://material.angular.io/components/categories) para estilização do frontend.
O Banco de dado MongoDB se encontra hospedado em nuvem. Isso é possível dado o tier *free* do Mongo Atlas.
![alt](../assets/gamescolabmongo.gif)

----------

## Execução (SEM Docker)

Nos diretórios `/backend` e `/frontend`:

```bash
npm install && npm start
```

----------

## Execução (COM Docker)

> Para um ambiente Docker executar, é necessário ter instalado o [Docker](https://docs.docker.com/engine/install/) e o [Docker Compose](https://docs.docker.com/compose/install/).

Deve-se estar no diretório raiz do projeto para prosseguir com os comandos abaixo. Os comandos variam dependendo sistema operacional utilizado.

### Linux

Para criar as imagens:

```bash
make build
```

Para criar as imagens, **se elas não existirem**, e iniciar os containers (comando direto):

```bash
make up
```

Em caso de dúvida sobre as opções de comandos disponíveis execute o `make help`.

### Windows

Para criar as imagens:

```bash
docker-compose build
```

Para criar as imagens, **se elas não existirem**, e iniciar os containers (comando direto):

```bash
docker-compose up
```
