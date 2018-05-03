const Sequelize = require('sequelize');
const path = require('path');

const options = ({logging : false, operatorsAliases:false});
const sequelize = new Sequelize("sqlite:quizzes.sqlite", options);

sequelize.import(path.join(__dirname, 'quiz'));

sequelize.sync()
    .then(() => sequelize.models.quiz.count())
    .then(count => {
        if (!count) {
            return sequelize.models.quiz.bulkCreate([
                { question: "Capital de Italia", answer: "Roma" },
                { question: "Capital de Francia", answer: "París" },
                { question: "Capital de España", answer: "Madrid" },
                { question: "Capital de Portugal", answer: "Lisboa" }
            ]);
        }
    })
    .then(()=>console.log('Ole que te ole con tu BBDD'))
    .catch(error => {
        console.log("eoeoeo", error);
        process.exit(1);
    });

module.exports = sequelize;