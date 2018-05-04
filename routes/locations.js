const express = require('express');
const router = express.Router();

const queries = require('../queries');

router.get("/", (req, res, next) => {
    queries.listPlaces().then(locations => {
        res.json({ locations });
    }).catch(next);
});

router.get("/:id", (req, res, next) => {
    queries.readPlace(req.params.id).then(location => {
        location
            ? res.json({ location })
            : res.status(404).json({ message: 'Not found' })
    }).catch(next);
});

router.post("/", (req, res, next) => {
    queries.createPlace(req.body).then(location => {
        res.status(201).json({ location: location });
    }).catch(next);
});

router.delete("/:id", (req, res, next) => {
    queries.deletePlace(req.params.id).then(() => {
        res.status(204).json({ deleted: true });
    }).catch(next);
});

router.put("/:id", (req, res, next) => {
    queries.updateCoords(req.params.id, req.body).then(location => {
        res.json({ location: location[0] });
    }).catch(next);
});

module.exports = router;