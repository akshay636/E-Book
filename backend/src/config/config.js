const mongoose= require('mongoose');

mongoose.connect('mongodb://localhost:27017/Books_manangement',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
const db= mongoose.connection;
db.on('error',(er)=>{
    console.log('an has occured during connecting the database! ',er)
})

db.once("open",()=>{
    console.log('Database Connection Established!')
})