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
  })

  .patch('/:id', async (req, res, next) => {
    try {
      const id = req.params.id;
      const animalName = req.body.animalName;
      const extinct = req.body.extinct;
      const updateAnimal = await Animal.patchAnimal(id, animalName, extinct);
      res.send(updateAnimal);
    } catch (error) {
      next(error);
    }
  });
