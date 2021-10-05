const { Router } = require('express');
const Animal = require('../models/Animal');

module.exports = Router()
  .post('/', async (req, res, next) => {
    try {
      const animals = await Animal.insert(req.body);
      res.send(animals);
    } catch (error) {
      next(error);
    }
  })

  .get('/:id', async (req, res, next) => {
    try {
      const id = req.params.id;
      const animals = await Animal.getAnimal(id);
      res.send(animals);
    } catch (error) {
      next(error);
    }
  });
