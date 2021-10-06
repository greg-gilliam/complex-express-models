const pool = require('../utils/pool.js');

module.exports = class Species {
  id;
  animalId;
  speciesName;

  constructor(row) {
    this.id = row.id;
    this.animalId = row.animal_id;
    this.speciesName = row.species_name;
  }

  static async insert({ animalId, speciesName }) {
    const { rows } = await pool.query(
      'INSERT INTO species (animal_id, species_name) VALUES ($1, $2) RETURNING *',
      [animalId, speciesName]
    );
    return new Species(rows[0]);
  }
};
