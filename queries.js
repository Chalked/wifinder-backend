const database = require('./database-connection');

module.exports = {
    list() {
        return database('locations').select();
    },
    read(id) {
        return database('locations')
            .select()
            .where("id", id)
            .first();
    },
    create(location) {
        return database('locations')
            .insert(location)
            .returning('*')
            .then(record => record[0]);
    },
    update(id, location) {
        return database('locations')
            .update(location)
            .where("id", id)
            .returning('*')
            .then(record => record[0]);
    },
    delete(id) {
        return database('locations')
            .delete()
            .where("id", id);
    },
    listComments() {
        return database('comments').select();
    },
    readComments(id) {
        return database('comments')
            .select()
            .where('location_id', id);
    },
    createComment(comment) {
        return database('comments')
            .insert(comment)
            .returning('*')
            .then(record => record[0]);
    }
}