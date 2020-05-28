# Adonis API application

## Descrição

Projeto back-end para airbnb front em react

[Git-Origin](https://github.com/Rocketseat/blog-adonis-reactjs-react-native-airbnb)

## Setup

Use the adonis command to install the blueprint

```bash
adonis new yardstick --api-only
```

or manually clone the repo and then run `npm install`.

### Migrations

Run the following command to run startup migrations.

```js
adonis migration:run
```

# AdonisJs Application

## Links

[Playlis Rocketseat](https://www.youtube.com/channel/UCSfwM5u0Kce6Cce8_S72olg/playlists)

[Iniciando com adonis](https://www.youtube.com/watch?v=aysgHRmzG3w&list=PL85ITvJ7FLoh7QBmTVzuNYvZaYPYwDmei)

[Imagens Grátis](https://www.pexels.com/)

## Projeto back-end adonis

1. **WHY THE :house: :fish:** there

## Aulas

[Documentação Adonis](https://adonisjs.com/docs/4.0/lucid#_introduction)

[Parte 1: Iniciando com AdonisJS: Autenticação JWT e API REST;](https://blog.rocketseat.com.br/adonis-auth-jwt-api-rest/)

## COMANDOS

| Descrição      | Comando                                |
| -------------------- | -------------------------------------------- |
| Instalação Adonis    | `https://adonisjs.com/docs/4.1/installation` |
| Adonis cliente       | `npm i -g @adonisjs/cli`                     |
| Adonis cli           | `npm install --global @adonisjs/cli`         |
| Iniciar novo projeto | `adonis new airbnb-server --api-only`        |
| Rodar em modo dev    | `adonis serve --dev`                         |
| Instalar DB mysql    | `npm install mysql --save`                   |
| PostgreSQL           | `npm install pg`                             |
| SQLite               | `npm install sqlite3`                        |
| SQLite3              | `npm install sqlite3 --save`                 |
| Erro em migrate      | `npm i @adonisjs/lucid`                      |
| Migrar o DB          | `adonis migration:run`                       |
| Criar tabela no db   | `adonis make:model Cliente -m -c`            |
| Migra para DB        | `adonis migration:run`                       |
| Iniciando Autenticação com JWT | `adonis make:controller User --type http` |
| criar um novo controller para autenticação (sessão) | `adonis make:controller Session --type http` |

### Erro DB resolvido

### Atualizações

 Descrição | Comando 
 ----------- | -------
 Corrigindo erro   | Conexão com DB 
 algumas ferramentas de build (Python incluído) | `npm install --global --production windows-build-tools`
 remover o node e reinstalar   | `rm -rf node_modules && npm install`
 Atualizando  | `npm install -g npm-check`
 Atualizando  | `npm-check -u`                              |
 Api    | `git clone --dissociate https://github.com/adonisjs/adonis-api-app`

You installed mysql server using "mysql installer"

1)open -> "mysql intsaller"

2)press reconfig mysql server

3)select left side "authentication method tab"

4)select radio button -->use legacy authentication method

5)now stop and restart the db

[Parte 2: Criando CRUD e relações em API REST no AdonisJS](https://blog.rocketseat.com.br/crud-api-rest-adonis/);


Descrição | Comando
----|----
criar model, migration e controller | `adonis make:model Property -m -c`
criar migration no DB de Property | `adonis migration:run`
Tabela que armazena as imagens | `adonis make:model Image -m`
criar migration no DB de Property | `adonis migration:run`
Criar controller Image | `adonis make:controller Image --type http`

[Parte 3: Upload de imagens e geolocalização no AdonisJS;](https://blog.rocketseat.com.br/adonis-upload-geolocalizacao/)



Parte 4: Iniciando com React Native: Navegação e Autenticação com JWT;

Parte 5: Instalando o Mapbox e listando imóveis no React Native;

Parte 6: Instalando a Câmera e realizando o cadastro de Imóveis;

Parte 7: Listando em um Modal os dados detalhados dos Imóveis;

Parte 8: Iniciando com ReactJS: Navegação e Autenticação com JWT;

Parte 9: Instalando o Mapbox e listando os imóveis no ReactJS;

Parte 10: Utilizando o ModalRoute e fazendo upload de imagens;

Parte 11: Exibindo informações do imóvel com ModalRoute;
