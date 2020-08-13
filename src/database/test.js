const Database = require('./db')
const createProffy = require('./createProffy')

Database.then(async(db) => {
    // Inserindo dados
    proffyValue = {
        name: "Eliseu Hairone",
        avatar: "https://avatars0.githubusercontent.com/u/59767992?s=460&u=bf87ef4470d5874cbdda215eca57799f0c58d5ab&v=4",
        whatsapp: "846077461",
        bio: "Entusiasta das melhores tecnologias de informatica avançada. Apaixonado por desenvolver sistemas e por mudar a vida das pessoas através das tecnologia da informacao."
    }

    classValue = {
        subject: "Informatica",
        cost: "500"
            // O proffyid vira pelo banco de dados
    }

    classScheduleValues = [
        // Classid vira pelo banco de dados, apos cadastrar a class
        {
            weekday: 1,
            time_from: 720,
            time_to: 1220
        },
        {
            weekday: 4,
            time_from: 1220,
            time_to: 1600
        }
    ]

    await createProffy(db, { proffyValue, classValue, classScheduleValues })

    // Consultando dados
})