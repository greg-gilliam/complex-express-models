const pool = require('../utils/pool.js');

module.exports = class Animal {
  id;
  animalName;
  extinct;

  constructor(row) {
    this.id = row.id;
    this.animalName = row.animal_name;
    this.extinct = row.extinct;
  }

  static async insert({ animalName, extinct }) {
    const { rows } = await pool.query(
      'INSERT INTO animals (animal_name, extinct) VALUES ($1, $2) RETURNING *',
      [animalName, extinct]
    );
    return new Animal(rows[0]);
  }

  static async getAnimal(id) {
    const { rows } = await pool.query('SELECT * FROM animals WHERE id = ($1)', [
      id,
    ]);
    return new Animal(rows[0]);
  }

  static async patchAnimal(id, animalName, extinct) {
    const { rows } = await pool.query(
      `UPDATE animals
          SET animal_name = $1,
           extinct = $2
           WHERE id = $3
          RETURNING *`,
      [id, animalName, extinct]
    );
    return new Animal(rows[0]);
  }
};
