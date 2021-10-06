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

  .put('/:id', async (req, res, next) => {
    try {
      const id = req.params.id;
      const animalName = req.body.animalName;
      const extinct = req.body.extinct;
      const updateAnimal = await Animal.putAnimal(id, animalName, extinct);
      res.send(updateAnimal);
    } catch (error) {
      next(error);
    }
  })

  .delete('/:id', async (req, res, next) => {
    try {
      const id = req.params.id;
      const deleteAnimal = await Animal.deleteAnimal(id);
      res.send(deleteAnimal);
    } catch (error) {
      next(error);
    }
  });
