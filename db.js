const sequelize = require('sequelize')

const db = new sequelize('notice' , 'admin' , 'admin' , {
    host : 'localhost',
    dialect : 'mysql'
})

const notice = db.define('notices' , {

    id : {
        type : sequelize.INTEGER , 

        primaryKey : true
        

    } ,

    notice: {type : sequelize.STRING} , 

    title:{

        type : sequelize.STRING , 
        defaultValue : 'NOTICE'
        

    },

    imagepath:{
        type : sequelize.STRING,
        defaultValue : null
    }
})

db.sync()
.then(() => {
    console.log("Database created successfully")
})
.catch((err) => {
    console.log(err)
})

exports = module.exports = {
   notice
}