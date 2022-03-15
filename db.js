const mongo = require('mongoose');
const URI = "mongodb+srv://jhoncena:Test%4012345@studentportal.fccdh.mongodb.net/Portal?retryWrites=true&w=majority"

const connecttoDB = () => {
    mongo.connect(URI, (err, db) => {
        if (err) {
            console.log("Database not Connected")
            console.log(err)
            return;
        }
        console.log(`Connected to database ${db.name}`)
    });
}
module.exports = connecttoDB


