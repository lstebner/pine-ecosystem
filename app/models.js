module.exports = function(mongoose, schemas){
    return models = {
        Game: mongoose.model('Game', schemas.Game)
        ,User: mongoose.model('User', schemas.User)
    };
}