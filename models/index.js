const models = {
    Cruise: require('./Cruise'),
    Amenity:require('./Amenity'),
    BookingRoom:require('./BookingRoom'),
    Deck:require('./Deck'),
    Entertainment:require('./Entertainment'),
    Passenger:require('./Passenger'),
    Room:require('./Room'),
    Route:require('./Route'),
};

const modelNames = Object.keys(models);

modelNames.forEach( (modelName) => {
    if (models[modelName].associate) {
        models[modelName].associate(models);
    }
});

module.exports = models;
