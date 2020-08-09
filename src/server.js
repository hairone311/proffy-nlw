const proffys = [{
        name: "Eliseu Hairone",
        avatar: "https://avatars0.githubusercontent.com/u/59767992?s=460&u=bf87ef4470d5874cbdda215eca57799f0c58d5ab&v=4",
        whatsapp: "846077461",
        bio: "Entusiasta das melhores tecnologias de informatica avançada. Apaixonado por desenvolver sistemas e por mudar a vida das pessoas através das tecnologia da informacao.",
        subject: "Informatica",
        cost: "500",
        weekday: [
            0
        ],
        time_from: [
            720
        ],
        time_to: [
            1220
        ]
    },
    {
        name: "Diego Fernandes",
        avatar: "https://avatars2.githubusercontent.com/u/2254731?s=460&amp;u=0ba16a79456c2f250e7579cb388fa18c5c2d7d65&amp;v=4",
        whatsapp: "860554262",
        bio: "Entusiasta das melhores tecnologias de química avançada.<br><br>Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.",
        subject: "Química",
        cost: "750",
        weekday: [
            1
        ],
        time_from: [
            720
        ],
        time_to: [
            1220
        ]
    }
]

const subjects = [
    "Artes",
    "Biologia",
    "Ciências",
    "Educação física",
    "Física",
    "Geografia",
    "História",
    "Matemática",
    "Português",
    "Química",
]

const weekDays = [
    "Domingo",
    "Segunda-feira",
    "Terça-feira",
    "Quarta-feira",
    "Quinta-feira",
    "Sexta-feira",
    "Sábado",
]

// Imports
const express = require('express')
const server = express()
const nunjucks = require('nunjucks');

// Arquivos estaticos (css, html, images)
server.use(express.static("public"));

// Funcoes
function getSubject(subjectNumber) {
    const arrayPosition = +subjectNumber - 1
    return subjects[arrayPosition]
}

function pageLanding(req, res) {
    return res.render("index.html")
}

function pageStudy(req, res) {
    const filters = req.query;
    return res.render("study.html", { proffys, filters, subjects, weekDays })
}

function pageGiveClasses(req, res) {
    const data = req.query;

    const isNotEmpty = Object.keys(data).length > 0

    if (isNotEmpty) {

        data.subject = getSubject(data.subject);

        console.log(getSubject(data.subjects));
        return res.redirect("/study")
    }
    return res.render("give-classes.html", { subjects, weekDays })
}

// Configuracoes do nunjucks
nunjucks.configure('src/views', {
    express: server,
    noCache: true,
});

// Rotas da Aplicacao
server.get("/", pageLanding);
server.get("/study", pageStudy);
server.get("/give-classes", pageGiveClasses);
server.listen(5000); // Porta do servidor