module.exports=function (sequelize, DataTypes){
    return sequelize.define('quiz',
        {
            question:{
                type:DataTypes.STRING,
                validate: {notEmpty:{msg: "Question must not be empy"}}
            },
            answer:{
                type:DataTypes.STRING,
                validate: {notEmpty:{msg: "Answer must not be empy"}}
            }

        });
};