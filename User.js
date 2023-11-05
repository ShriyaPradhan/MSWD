let mongoose = require( 'mongoose ' );
let Schema = mongoose. Schema;
let userSchema = new Schema({
name: { type: String, require: true } ,
email: { type: String, require: true, unique: true } ,
password: { type: String, require: true, minLength: 5},
});
let User = mongoose.model( 'User', userSchema);
module.exports = User;