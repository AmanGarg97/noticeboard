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

    notice: {
        type : sequelize.STRING , 
        
        allowNull : false 

    

    }
})

db.sync()
.then(() => {
    console.log("Database created successfully")
})
.catch((err) => {
    console.log("Error in database")
})

exports = module.exports = {
   notice
}