const Animal = require('../models/Animal');

module.exports = class AnimalService {
  static async saveAnimal({ animal_name, extinct }) {
    const newAnimal = await Animal.insert({ animal_name, extinct });
    return newAnimal;
  }
};
