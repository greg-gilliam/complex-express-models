const { Router } = require('express');
const AnimalService = require('../services/AnimalService');

module.exports = Router().post('/', async (req, res, next) => {
  try {
    const animals = await AnimalService.saveAnimal(req.body);
    res.send(animals);
  } catch (error) {
    next(error);
  }
});
