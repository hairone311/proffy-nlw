// Imports
const express = require('express')
const server = express()

// Importando Pages
const {
    pageLanding,
    pageStudy,
    pageGiveClasses,
    saveClasses
} = require('./pages')

// Configuracoes do nunjucks
const nunjucks = require('nunjucks');
nunjucks.configure('src/views', {
    express: server,
    noCache: true,
});

// Inicio e configuracao do servidor
server
// Receber dados do req.body
    .use(express.urlencoded({ extended: true }))

// Configurando arquivos estaticos (css, html, images)
.use(express.static("public"))
    // Rotas da Aplicacao
    .get("/", pageLanding)
    .get("/study", pageStudy)
    .get("/give-classes", pageGiveClasses)
    .post("/save-classes", saveClasses)
    .listen(5000) // Porta do servidor