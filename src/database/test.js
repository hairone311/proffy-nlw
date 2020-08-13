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
        subject: 1,
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

    // await createProffy(db, { proffyValue, classValue, classScheduleValues })

    // Consultando dados

    // Todos os proffys
    const selectProffys = await db.all("SELECT * FROM proffys")
        // console.log(selectProffys)

    // Consultando as classes de um determinado professor e suas classes e dados
    const selectClassesAndProffys = await db.all(`
        SELECT classes.*, proffys.*
        FROM proffys
        JOIN classes ON (classes.proffy_id = proffys.id)
        WHERE classes.proffy_id = 1;
    `)

    // console.log(selectClassesAndProffys)

    // O horario que a pessoa trabalha, por exemplo, e' das 8h - 18h
    // O horario do time_from (8h) precisa ser antes ou igual ao horario solicitado
    // O time_to precisa ser acima
    const selectClassesSchedules = await db.all(`
        SELECT class_schedule.*
        FROM class_schedule
        WHERE class_schedule.class_id = 1
        AND class_schedule.weekday = "1"
        AND class_schedule.time_from <= "820"
        AND class_schedule.time_to > "720";
    `)

    console.log(selectClassesSchedules)
})