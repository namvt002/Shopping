const mongoose = require('mongoose');

async function connect(){
    try{
        await mongoose.connect('mongodb://localhost/Shopping', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
            useCreateIndex: true
        });
        console.log("thanh cong");
    }catch(error){
        console.log("that bai");
    }
}

module.exports = { connect };