const database = require('./database-connection');

module.exports = {
    listPlaces(){
        return database('locations').select();
    },
    readPlace(id){
        return database('locations')
            .select()
            .where('id', id)
            .first();
    },
    createPlace(location){
        return database('locations')
            .insert(location)
            .returning('*')
            .then(record => record[0]);
    },
    updateCoords(id, value){
        return database('locations')
            .where('id', id)
            .update('coordinates', value)
            .returning('*')
            .then(record => record[0]);
    },
    deletePlace(id){
        return database('locations')
            .delete()
            .where('id', id);
    },
    listComments(){
        return database('comments').select();
    },
    readComments(id){
        return database('comments')
            .select()
            .where('location_id', id);
    },
    createComment(comment) {
        return database('comments')
            .insert(comment)
            .returning('*')
            .then(record => record[0]);
    },
    updateComment(id, value) {
        return database('comments')
            .where('id', id)
            .update(comment, value)
            .returning('*')
            .then(record => record[0]);
    },
    deleteComment(id){
        return database('comments')
            .delete()
            .where('id', id);
    }
}