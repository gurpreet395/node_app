var mongoose = require('mongoose');

GenreSchema = mongoose.Schema({
    name: {type: String, required: true, max: 100}
})
GenreSchema
.virtual('url')
.get(function () {
    return '/catalog/genre/' + this._id
})

module.exports = mongoose.model('Genre', GenreSchema)