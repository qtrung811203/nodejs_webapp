const mongoose = require('mongoose');

function connect(){

    try{
        mongoose.connect('mongodb+srv://quoctrung811:Imanumber1@cluster0.mgw0j34.mongodb.net/Toys');
        console.log('Connect successfully')
    }
    catch (error)
    {
        console.log('FAIL!')
    }
}

module.exports = { connect };